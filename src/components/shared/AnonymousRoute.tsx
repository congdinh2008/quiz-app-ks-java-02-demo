import { Navigate, Outlet } from "react-router-dom";

const AnonymousRoute: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ?  <Navigate to="/" /> : <Outlet />
}

export default AnonymousRoute;