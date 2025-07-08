import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch("https://sheetdb.io/api/v1/uxf4yasogukwy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: form }),
  });
  setSubmitted(true);
};

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-center text-pink-600 drop-shadow">
          Đăng ký lớp học tiếng Anh
        </h1>
        <p className="text-center text-gray-600">
          Lớp học kết hợp học & chơi – giúp bé yêu thích tiếng Anh từ sớm!
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Họ và tên phụ huynh"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              name="email"
              type="email"
              placeholder="Email hoặc SĐT liên hệ"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <textarea
              name="message"
              placeholder="Thông tin thêm về bé hoặc câu hỏi (nếu có)"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              rows="4"
            />
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
            >
              Gửi đăng ký
            </button>
          </form>
        ) : (
          <div className="text-center text-green-600 text-lg font-medium">
            🎉 Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ lại sớm nhất 💌
          </div>
        )}
      </div>
    </div>
  );
}
