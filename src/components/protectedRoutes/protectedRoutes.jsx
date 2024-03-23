import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
function ProtectedRoutes({ user, redirectTo = "/" }) {
  if (!user) {
    return <Navigate to={redirectTo} />;
  }
  return <Outlet />;
}

ProtectedRoutes.propTypes = {
  user: PropTypes.object,
  redirectTo: PropTypes.node,
};

export default ProtectedRoutes;
