import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginService } from "../service/authService";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const { login} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await loginService(formData.email, formData.password);
      console.log("res.data", res.data);
      login(res.data);
      goToDashboard()
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };
  function goToDashboard() {
    navigate('/dashboard');
  }
  return (
    <form onSubmit={handleSubmit} noValidate>
      <p>
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </p>
      <p>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </p>
      <button type="submit">Login</button>
      {error ? <p>Have error {error}</p> : ""}
    </form>
  );
}
