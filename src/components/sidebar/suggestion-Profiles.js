import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

function SuggestionsProfile({ userDocId, username, profileId, userId }) {
  const [followed, setFollowed] = useState(false);

  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <Link to={`/p/${username}`}>
        <div className="flex items-center justify-between mt-4">
          <img
            className="rounded-full w-8 flex mr-3"
            src={`/images/avatars/${username}.jpg`}
          />
          <span className="font-bold text-sm">{username}</span>
        </div>
      </Link>
    </div>
  ) : null;
}

SuggestionsProfile.propTypes = {
  userDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};
export default SuggestionsProfile;
