import { useEffect } from "react";
import { useAuth } from "../../auth";
import { useNavigate } from "react-router-dom";

const Signout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    logout();
    navigate("/signin");
    setTimeout(() => {
      window.location.reload();
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
};

export default Signout;
