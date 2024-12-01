import { BiAnchor } from "react-icons/bi";
import BackButton from "../components/BackButton";
import { cn, dayNames } from "../lib/utils";
import { SiGoogletasks } from "react-icons/si";
import {
  add,
  addDays,
  addHours,
  eachDayOfInterval,
  eachMinuteOfInterval,
  endOfDay,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isAfter,
  isBefore,
  isEqual,
  isSameMonth,
  isThisMonth,
  isToday,
  parse,
  parseISO,
  set,
  startOfDay,
  startOfToday,
  startOfWeek,
  startOfYesterday,
} from "date-fns";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState, useEffect } from "react";

const Todo = () => {
  //優先すべきTask取得
  const [primaryTasks, setprimaryTasks] = useState([]);
  useEffect(() => {
    const getPrimaryTasks = async () => {
      try {
        // APIからデータを取得する例
        const response = await fetch(
          "http://localhost:3001/notion/primary-tasks",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({}),
          }
        );
        const data = await response.json();
        setprimaryTasks(data.results);
      } catch (error) {
        console.error("優先度高のデータ取得エラー:", error);
      }
    };
    getPrimaryTasks();
  }, []);

  //Taskを全取得
  const [tasks, setTasks] = useState([]);
  const [taskDates, setTaskDates] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      try {
        // APIからデータを取得する例
        const response = await fetch("http://localhost:3001/notion/tasks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        });
        const data = await response.json();

        //締切日取得
        const dates = data.results.map(
          (task) => task.properties.Deadline?.date?.start
        );
        setTaskDates(dates);

        //タスク名取得
        const taskName = data.results.map(
          (task) => task.properties.Task?.rich_text[0].plain_text
        );
        setTasks(taskName);
      } catch (error) {
        console.error("データ取得エラー:", error);
      }
    };
    getTasks();
  }, []);

  const [calendarTouched, setCalendarTouched] = useState(false);

  // 初期化
  let today = startOfToday();
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let [selectedDay, setSelectedDay] = useState(today);
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  //useMemoで当月の日付を保持
  let days = useMemo(
    () =>
      eachDayOfInterval({
        start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
        end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
      }),
    [firstDayCurrentMonth]
  );

  //先月ボタン押下後
  function prevMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }
  //翌月ボタン押下後
  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function hasTask(day) {
    return taskDates.some((element) => element === day);
  }
  return (
    <div
      id="todo"
      className="container mt-12 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <h2 className="secondary-title">カレンダー</h2>
        <p className="section-paragraph:"></p>
        <div className="m-12 flex items-center space-x-2">
          <BiAnchor />
          <h1 className="background-todo text-lg">To-do Calendar</h1>
        </div>

        {/* カレンダー */}

        <div className="flex flex-col min-h-screen justify-center items-center gap-2 bg-stone-50">
          <div
            className={cn("flex flex-col gap-2 justify-center items-center")}
          >
            <span className="mx-8 text-md sm:text-lg text-secondary font-serif font-semibold px-2">
              私の月別スケジュールです。
              <br />
              NOTION
              APIを使用して、業務での開発スケジュールや研修の日程等をスマートフォンと連携させています。
            </span>
          </div>

          <div className="flex flex-col gap-2 h-[450px] w-[380px] mt-12">
            {/* ヘッダー */}
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

            {/* ボディ */}
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
              {/* 各日をmapで生成 */}
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
                      <button
                        onClick={() => {
                          setCalendarTouched(true);
                          setSelectedDay(day);
                        }}
                        className={cn(
                          "w-12 h-12 flex flex-col p-2 justify-center items-center rounded-xl gap-0 group bg-gray-50 relative group",
                          isEqual(day, selectedDay) &&
                            "bg-orange-100 text-slate-900 text-lg",
                          isEqual(today, day) && "text-blue-900 bg-blue-50",
                          isBefore(day, today) &&
                            "text-red-800 bg-red-50 cursor-not-allowed",
                          isEqual(today, day) && "text-blue-900 bg-blue-50",
                          isBefore(day, today) && "cursor-not-allowed",
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
                        {/* {isAfter(day, startOfYesterday()) && (
                          <span className="hidden group-hover:flex absolute top-0 -translate-x-.5 -translate-y-4 z-10 text-[11px] bg-slate-900 text-slate-100 px-1 rounded-md gap-1">
                            <span>{availableTimesInThisMonth[dayIdx]}</span>
                            <span>Available</span>
                          </span>
                        )} */}

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

                        {/* taskがある場合「予定あり」としてクリック時モーダルを表示 */}
                        {hasTask(format(day, "yyyy-MM-dd")) && (
                          <span className="text-[0.5rem]">予定あり</span>
                        )}
                        <CheckCircle2
                          className={cn(
                            "hidden",
                            isEqual(day, selectedDay) &&
                              "absolute block top-0 right-0 h-[18px] w-[18px] translate-x-1 -translate-y-1 text-orange-900",
                            isEqual(day, today) && "text-blue-900"
                          )}
                        />

                        {/* {isAfter(day, startOfYesterday()) && (
                          <TimesBar
                          // times={availableTimesInThisMonthForEachDay[dayIdx]}
                          />
                        )} */}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center w-full justify-center gap-1">
              <div className="flex items-center w-full gap-1">
                <SiGoogletasks />
                優先すべき用事があります。
              </div>
              {/* <div className="flex flex-col items-start"> */}
              {primaryTasks && primaryTasks.length > 0 ? (
                primaryTasks.map((task, index) => (
                  <span key={index} className="text-left w-full">
                    {index + 1} -{" "}
                    {task.properties.Task?.rich_text[0].plain_text}
                  </span>
                ))
              ) : (
                <span>特にありません</span>
              )}
              {/* </div> */}
            </div>
          </div>
          {/* <div className={cn(`hidden`, calendarTouched && "block")}>
            <span className="flex items-center w-full justify-center gap-1">
              <span>
                Select your reservation time for
                <span className="text-orange-950 font-semibold pl-1">
                  {format(selectedDay, "dd MMMM yyyy").toString()}
                </span>
              </span>
            </span>

            <AvailableHours freeTimes={freeTimes} />
          </div> */}
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
