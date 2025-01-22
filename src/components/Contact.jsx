import { useState } from "react";
import { useForm } from "react-hook-form";
import { API_URL } from "../lib/config";

const url = API_URL;
const Contact = () => {
  //hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState(false);
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  //submit
  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${url}/notion/form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("フォームが正常に送信されました");
      } else {
        alert("送信中にエラーが発生しました");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("サーバーに接続できませんでした");
    }
  };

  //clear
  const handleClear = () => {
    reset();
  };

  return (
    <div
      id="contact"
      className="container mt-52 mb-20 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <h2 className="secondary-title">お問い合わせ</h2>
        <p className="section-paragraph text-secondary font-semibold">
          お問い合わせは下記のフォームからお願いいたします。
          <br />
          <span className="text-red-700"> * </span>は必ず入力してください。
        </p>
        <div className="w-full lg:grid-cols-2 gap-8 lg:gap-32 mt-16">
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="contactForm"
            className="space-y-12"
            action=""
            method="POST"
          >
            <div>
              <label className="text-black block mb-6 text-xl font-bold">
                お名前<span className="text-red-700"> *</span>
              </label>
              <input
                id="name"
                type="text"
                {...register("name", {
                  required: "お名前を入力してください。",
                })}
                placeholder="田中　太郎"
                className="rounded-md w-full border-black bg-white pw-4 py-4"
              />
              <p className="text-red-700">{errors.name?.message}</p>
            </div>
            <div>
              <label className="text-black block mb-6 text-xl font-bold">
                メールアドレス<span className="text-red-700"> *</span>
              </label>
              <input
                id="email"
                type="text"
                {...register("email", {
                  required: "メールアドレスを入力してください。",
                  validate: (value) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                    "有効なメールアドレスを入力してください",
                })}
                placeholder="tanaka@example.com"
                className="rounded-md w-full  border-black bg-white pw-4 py-4"
              />
              <p className="text-red-700">{errors.email?.message}</p>
            </div>
            <div>
              <label className="text-black block mb-6 text-xl font-bold">
                電話番号
              </label>
              <input
                id="phone"
                type="text"
                {...register("phone", {
                  pattern: {
                    value: /^\d{10,11}$/,
                    message: "有効な電話番号を入力してください",
                  },
                })}
                placeholder="00000000000"
                className="rounded-md w-full  border-black bg-white pw-4 py-4"
              />
              <p className="text-red-700">{errors.phone?.message}</p>
            </div>
            <div>
              <label className="text-black block mb-6 text-xl font-bold">
                メッセージ<span className="text-red-700"> *</span>
              </label>
              <input
                id="message"
                type="text"
                {...register("message", {
                  required: "メッセージを入力してください。",
                })}
                placeholder="こちらにお問い合わせ内容を入力してください"
                className="rounded-md w-full  border-black bg-white pw-4 py-4"
              />
              <p className="text-red-700">{errors.message?.message}</p>
            </div>
            <div className="flex justify-between">
              <button
                id="submitButton"
                type="submit"
                className="font-bold hover:text-selectedText transition-all duration-300"
              >
                送信
              </button>
              <button
                id="clearButton"
                type="reset"
                className="font-bold hover:text-selectedText transition-all duration-300"
                onClick={handleClear}
              >
                クリア
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
