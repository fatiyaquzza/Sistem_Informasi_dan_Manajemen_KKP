import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import logo from "../images/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user && user.role === "admin") {
      navigate("/dashboard");
    } else if (user && user.role === "user") {
      navigate("/form");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  // Function untuk menampilkan atau menyembunyikan password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-Poppins bg-gradient-to-t from-primarywhite via-softgray to-blue-200 p-4 md:p-0">
      <div className="flex flex-col md:flex-row max-w-lg bg-white shadow-lg rounded-lg overflow-hidden w-full">
        <div className="w-full p-8 flex flex-col justify-center">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Logo" className="w-24 md:w-32" />
          </div>
          {isError && <p className="text-center text-red-600">{message}</p>}
          <h1 className="text-3xl font-semibold text-center my-2">
            Selamat Datang Kembali
          </h1>
          <p className="text-center mb-6 text-gray-600">
            Silakan masuk ke akun Anda
          </p>
          <form onSubmit={Auth}>
            <div className="mb-4">
              <label className="text-gray-700">Email</label>
              <input
                type="text"
                className="w-full px-4 py-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan Email Anda"
              />
            </div>
            <div className="mb-6">
              <label className="text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // Menyesuaikan tipe input berdasarkan showPassword
                  className="w-full px-4 py-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan Password Anda"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 mt-2"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-4 py-3 font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
