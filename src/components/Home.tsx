import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store";
import H1 from "./H1";
import Button from "./ui/Button";
import Userlist from "./Userlist";

export default function Home() {
  const users = useSelector((state: RootState) => state.users.users || []);

  return (
    <>
      <H1 className="text-center">CRUD with Redux Toolkit</H1>
      <div className="flex flex-col gap-2 mt-6">
        <Link to="/add-user">
          <Button type="button">Add User</Button>
        </Link>
        <Userlist users={users} />
      </div>
    </>
  );
}
