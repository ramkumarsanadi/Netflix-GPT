import { signOut } from "firebase/auth";
import { LOGO_IMG_URL, USER_LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <>
      <div className="absolute w-full z-10 bg-gradient-to-b from-black flex justify-between items-center">
        <img className="w-44" src={LOGO_IMG_URL} alt="logo" />

        {user && (
          <div className="flex gap-3">
            <img
              className="w-12 h-12 rounded-md"
              src={user?.photoURL}
              alt="user logo"
            />
            <button
              className="text-white font-bold mr-4"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
