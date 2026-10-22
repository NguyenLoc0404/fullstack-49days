import { useState } from "react";

export default function ControlledInput() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    // Boss viết phần còn thiếu ở đây
    e.preventDefault();
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập tên!";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email!";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email không đúng định dạng!";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    console.log("Đăng ký thành công:", formData);
  };
  return (
    <form onSubmit={handleSubmit} noValidate>
      <p>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </p>
      {errors.name && <p>{errors.name}</p>}
      <p>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          //   onChange={(e) => {
          //     console.log(e);
          //     setFormData({
          //       ...formData,
          //       email: e.target.value,
          //     });
          //   }}
        />
      </p>
      {errors.email && <p>{errors.email}</p>}
      <p>Name hiện tại: {formData.name}</p>
      <p>Email hiện tại: {formData.email}</p>
      <button type="submit">Register</button>
    </form>
  );
}
