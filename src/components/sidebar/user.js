import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

import { memo } from "react";

function User({ username, fullName }) {
  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link
      to={`/p/${username}`}
      className="grid grid-cols-4 gap-4 mb-6 items-center"
    >
      <div className="flex items-center justify-between col-span-1">
        <img
          src={`/images/avatars/${username}.jpg`}
          className="rounded-full w-16 mr-3"
        />
      </div>
      <div className="grid ">
        <span className="font-bold text-sm">{username}</span>
        <span className="text-sm">{fullName}</span>
      </div>
    </Link>
  );
}

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};
User.whyDidYouRender = true;
export default memo(User);
