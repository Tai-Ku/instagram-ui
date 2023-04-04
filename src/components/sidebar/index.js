import useUser from "../../hooks/use-user";
import User from "./user";
import Suggestions from "./suggestions";
export default function Sidebar() {
  const {
    user: { fullName, username },
  } = useUser();
  console.log(fullName, username);
  return (
    <div className="p-4">
      <User />
      <Suggestions />
    </div>
  );
}
