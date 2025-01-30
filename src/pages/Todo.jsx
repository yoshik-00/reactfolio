import BackButton from "../components/BackButton";
import { cn, dayNames } from "../lib/utils";
import { SiGoogletasks } from "react-icons/si";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isBefore,
  isEqual,
  isSameMonth,
  isThisMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import TasksModal from "../components/TasksModal";
import { API_URL } from "../lib/config";

const url = API_URL;
const Todo = () => {
  //get priority tasks
  const [primaryTasks, setprimaryTasks] = useState([]);
  useEffect(() => {
    const getPrimaryTasks = async () => {
      try {
        const response = await fetch(`${url}/notion/primary-tasks`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        });
        const data = await response.json();
        setprimaryTasks(data.results);
      } catch (error) {
        console.error("優先度高のデータ取得エラー:", error);
      }
    };
    getPrimaryTasks();
  }, []);

  //get all tasks
  const [tasks, setTasks] = useState([]);
  const [taskDates, setTaskDates] = useState([]);
  const [priorities, setpriorities] = useState([]);
  const [fillingDates, setFillingDates] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await fetch(`${url}/notion/tasks`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        });
        const data = await response.json();

        //get deadline date
        const dates = data.results.map(
          (task) => task.properties.Deadline?.date?.start || "未記入"
        );
        setTaskDates(dates);

        //get tasks name
        const taskName = data.results.map(
          (task) => task.properties.Task?.rich_text[0]?.plain_text || "未記入"
        );
        setTasks(taskName);

        //get priority
        const priority = data.results.map(
          (task) => task.properties.Priority?.status.name || "未記入"
        );
        setpriorities(priority);

        //get entry date
        const fillingDate = data.results.map(
          (task) => task.created_time || "未記入"
        );
        const formattedDates = fillingDate.map((date) =>
          date !== "未記入"
            ? new Date(date).toISOString().split("T")[0]
            : "未記入"
        );
        setFillingDates(formattedDates);
      } catch (error) {
        console.error("データ取得エラー:", error);
      }
    };
    getTasks();
  }, []);

  //initialize
  let today = startOfToday();
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let [selectedDay, setSelectedDay] = useState(today);
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  //memo current month’s dates
  let days = useMemo(
    () =>
      eachDayOfInterval({
        start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
        end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
      }),
    [firstDayCurrentMonth]
  );

  //last month buttom
  const prevMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };
  //next month buttom
  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };
  //hastask
  const hasTask = (day) => {
    return taskDates.some((element) => element === day);
  };

  return (
    <div
      id="todo"
      className="container mt-12 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <h2 className="secondary-title">カレンダー</h2>
        <p className="section-paragraph:"></p>
        <div className="m-12 flex items-center space-x-2">
          <h1 className="background-todo text-lg"></h1>
        </div>

        {/* calendar */}
        <div className="flex flex-col min-h-screen rounded-md justify-center items-center gap-2 bg-stone-50">
          <div
            className={cn("flex flex-col gap-2 justify-center items-center")}
          >
            <span className="mx-8 text-md sm:text-lg text-secondary font-serif font-semibold px-2">
              私の月別スケジュールです。
              <br />
              NOTIONと連携しており開発スケジュールや研修の日程等をスマホからでも管理できるようにしています。
            </span>
          </div>

          <div className="flex flex-col gap-2 h-[450px] w-[380px] mt-12">
            {/* header */}
            <div className="grid grid-cols-3">
              <button
                type="button"
                onClick={prevMonth}
                disabled={isThisMonth(new Date(currentMonth))}
              >
                <ChevronLeft
                  size={20}
                  aria-hidden="true"
                  className={cn(
                    isThisMonth(new Date(currentMonth)) && "text-gray-300"
                  )}
                />
              </button>
              <h2 className="font-semibold text-orange-950 justify-center flex">
                {format(firstDayCurrentMonth, " MMMM yyyy")}
              </h2>
              <button
                type="button"
                className="flex justify-end"
                onClick={nextMonth}
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>

            {/* body */}
            <div>
              <div className="grid grid-cols-7 mt-4">
                {dayNames.map((day, i) => {
                  return (
                    <div
                      key={i}
                      className={cn(
                        "flex justify-center items-center text-sm text-blue-500 w-full py-2",
                        {
                          "text-orange-400 bg-orange-50 rounded-t-lg":
                            day === "Sun" || day === "Sat",
                        }
                      )}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
              {/* each day */}
              <div className="grid grid-cols-7 text-sm">
                {days.map((day, dayIdx) => {
                  return (
                    <div
                      key={day.toString()}
                      className={cn(
                        dayIdx === 0 && colStartClasses[getDay(day) - 1],
                        "h-14 justify-center flex items-center",
                        (getDay(day) === 0 || getDay(day) === 6) &&
                          "bg-orange-50 rounded-lg"
                      )}
                    >
                      <div
                        onClick={() => {
                          setSelectedDay(day);
                        }}
                        className={cn(
                          "w-12 h-12 flex flex-col p-2 justify-center items-center rounded-xl gap-0 group bg-gray-50 relative group cursor-default",
                          isEqual(day, selectedDay) &&
                            "bg-orange-100 text-slate-900 text-lg",
                          isEqual(today, day) && "text-blue-900 bg-blue-50",
                          isEqual(today, day) && "text-blue-900 bg-blue-50",
                          isEqual(day, selectedDay) &&
                            isToday(day) &&
                            "bg-blue-200",
                          !isEqual(day, selectedDay) &&
                            !isToday(day) &&
                            !isSameMonth(day, firstDayCurrentMonth) &&
                            "text-gray-400",
                          !isEqual(day, selectedDay) &&
                            !isToday(day) &&
                            isSameMonth(day, firstDayCurrentMonth) &&
                            "text-gray-900"
                        )}
                        disabled={isBefore(day, today)}
                      >
                        <time
                          dateTime={format(day, "yyyy-MM-dd")}
                          className={cn(
                            "group-hover:text-lg",
                            (isEqual(day, selectedDay) || isToday(day)) &&
                              "font-semibold"
                          )}
                        >
                          {format(day, "d")}
                        </time>

                        {/* hastask*/}
                        {hasTask(format(day, "yyyy-MM-dd")) && (
                          <>
                            {
                              <TasksModal
                                params={{
                                  selectedDate: format(day, "yyyy-MM-dd"),
                                  taskName: tasks,
                                  priority: priorities,
                                  deadline: taskDates,
                                  taskDate: fillingDates,
                                }}
                              />
                            }
                          </>
                        )}
                        <CheckCircle2
                          className={cn(
                            "hidden",
                            isEqual(day, today) && "text-blue-900"
                          )}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center w-full justify-center gap-1">
              <div className="flex items-center w-full gap-1 break-words">
                <SiGoogletasks />
                優先すべき用事があります。
              </div>
              {primaryTasks && primaryTasks.length > 0 ? (
                primaryTasks.map((task, index) => (
                  <div key={index} className="text-left w-full">
                    {index + 1} -{" "}
                    {task.properties.Task?.rich_text[0]?.plain_text ||
                      "記入なし"}
                  </div>
                ))
              ) : (
                <span>特にありません</span>
              )}
            </div>
          </div>
        </div>

        <BackButton />
      </section>
    </div>
  );
};
let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export default Todo;
