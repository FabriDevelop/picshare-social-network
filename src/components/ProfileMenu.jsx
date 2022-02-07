import React from "react";
import { Popup } from "reactjs-popup";
import { LogoutIcon, PlusIcon } from "@heroicons/react/outline";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ user }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <Popup
        trigger={(open) => (
          <img
            alt="profile"
            className="h-12 w-12 rounded-full"
            src={user?.image}
          />
        )}
        position="bottom center"
        closeOnDocumentClick
      >
        <div className="sm:p-3 md:p-5 bg-gray-200 rounded-lg">
          <button
            className="md:hidden p-2 text-gray-500 font-bold flex gap-2 items-center
          text-xs md:text-base sm:text-sm"
          >
            New Post
            <PlusIcon className="w-4 h-4" />
          </button>

          {user && (
            <GoogleLogout
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps) => (
                <button
                  className="p-2 mt-3 md:mt-0 text-red-600 font-bold flex gap-2 items-center
                  text-xs md:text-base sm:text-sm"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Log out <LogoutIcon className="w-4 h-4" />
                </button>
              )}
              onLogoutSuccess={logout}
              cookiePolicy="single_host_origin"
            />
          )}
        </div>
      </Popup>
    </div>
  );
};

export default ProfileMenu;
