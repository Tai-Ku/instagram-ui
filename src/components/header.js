import { useContext } from "react";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaSignOutAlt } from "@react-icons/all-files/fa/FaSignOutAlt";
import FirebaseContext from "../context/firebase";
import UserConText from "../context/user";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";
function Header() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserConText);
  return (
    <header className="h-16 bg-white border-b border-gray-primary mb-8">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.DASBOARD} aria-label="Instagram logo">
                <img
                  src="/images/logo (2).png"
                  alt="Instagram"
                  className="mt-2 w-6/12"
                />
              </Link>
            </h1>
          </div>
          <div className="text-gray-700 text-center flex items-center align-items">
            {user ? (
              <>
                <Link to={ROUTES.DASBOARD}>
                  <FaHome className="w-8 mr-6 text-black-light cursor-pointer h-8" />
                </Link>
                <button
                  type="button"
                  title="Sign Out"
                  onClick={() => firebase.auth().signOut()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      firebase.auth().signOut();
                    }
                  }}
                >
                  <FaSignOutAlt className="w-8 mr-6 text-black-light cursor-pointer h-8" />
                </button>
                <div className="flex items-center cursor-pointer">
                  <Link to={`/p/${user.userName}`}>
                    <img
                      className="rounded-full overflow-hidden  h-8 w-8 flex"
                      src={`/images/avatars/karl.jpg`}
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button className="bg-blue-medium font-bold text-sm rounded text-white w-2 h-8">
                    Login{" "}
                  </button>
                </Link>
                <Link to={ROUTES.SINGN_UP}>
                  <buttom className="text-blue-medium font-bold text-sm rounded w-20 h-8">
                    Sign up{" "}
                  </buttom>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
