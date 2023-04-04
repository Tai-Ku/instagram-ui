import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getSuggestedProfiles } from "../../services/fribase";
import SuggestionsProfile from "./suggestion-Profiles";
function Suggestions({ userId, following }) {
  const [profiles, setProfiles] = useState(null);
  // hint: use the firebase service (call using userId)
  useEffect(() => {
    async function suggestedProfiles() {
      const res = await getSuggestedProfiles(userId, following);
      setProfiles(res);
    }
    console.log("profiles", profiles);

    if (userId) {
      suggestedProfiles();
    }
  }, [userId]);
  // getSuggestedProfiles
  // call the async function ^^^^ within useEffect
  // store it in state
  // go ahead and render (wait on the profiles as in 'skeleton')
  return !profiles ? (
    <Skeleton count={4} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
      <div>
        {profiles.map((profile) => (
          <SuggestionsProfile
            key={profile.docId}
            userDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            userId={userId}
          />
        ))}
      </div>
    </div>
  ) : null;
}
Suggestions.prototype = {
  userId: PropTypes.string,
  following: PropTypes.array,
};
export default Suggestions;
