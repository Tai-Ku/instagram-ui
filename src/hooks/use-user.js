import { useContext, useEffect, useState } from "react";
import UserConText from "../context/user";
import { getUserByUserId } from "../services/fribase";
export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserConText);

  useEffect(() => {
    async function getUserObjByUserId() {
      const [res] = await getUserByUserId(user.uid);
      setActiveUser(res);
    }
    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);
  return { user: activeUser };
}
