import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { LoginRequestModel } from "../../models/login-request.model";
import { authService } from "../../services/auth.service";
import type { LoginResponseModel } from "../../models/login-response.model";
import type { UserInformationViewModel } from "../../view-models/user-infomation.view-model";
import { useAuth } from "../../contexts/auth.context";

const Login = () => {
  const navigate = useNavigate();
  const {login} = useAuth();
  const [username, setUsername] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    // username and password not empty or null
    if (username && password) {
      const authData: LoginRequestModel = {
        username: username,
        password: password
      }

      // Gọi API để đăng nhập, nhận về token và user information, expires
      const loginResponse: LoginResponseModel = await authService.login(authData);
      if (loginResponse && loginResponse.token) {
        // Reset form fields
        setUsername("");
        setPassword("");
        // Nạp thông tin đăng nhập thành công vào context
        login(loginResponse);
        // Navigate to home page
        navigate("/");
      } else {
        alert("Login failed. Please check your username and password.");
      }
    } else {
      if (!username) setUsernameError("Username is required");
      if (!password) setPasswordError("Password is required");
    }
  }

  return (
    <section className="bg-white p-6 rounded-md shadow-md w-96" aria-labelledby="login-title">
      <h2 className="text-3xl font-bold mb-4 text-center ">Login</h2>
      <form className="" method="post" onSubmit={onSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="username" className="block mb-[5px]">Username</label>
          <input type="text" id="username" value={username} className="w-full p-2 border border-gray-300 rounded-sm" name="username" placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)} />
          {usernameError && <p className="text-red-500 text-sm mt-1">{usernameError}</p>}
        </div>

        <div className="form-group mb-4">
          <label htmlFor="password" className="block mb-[5px]">Password</label>
          <input type="password" id="password" value={password} className="w-full p-2 border border-gray-300 rounded-sm" name="password" placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
          {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
        </div>

        <div className="form-actions mb-4 flex justify-between items-center gap-4">
          <Link to="/" className="w-1/2 bg-slate-100 px-4 py-2 rounded-sm hover:bg-slate-200" role="button">Back to Home</Link>
          <button type="submit" className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600">Login</button>
        </div>

        <div className="text-center">
          <Link to="#" className="block mb-4 hover:text-blue-500" aria-label="Forgot your password?">Forgot password?</Link>
          <span>Don't have an account?</span> <Link to="/register" aria-label="Create a new account" className="hover:text-blue-500">Register</Link>
        </div>
      </form>
    </section>
  )
}

export default Login
