import { useNavigate } from "react-router-dom";
import User from "../types/user";

type UserlistProps = {
  users: User[];
};
export default function Userlist({ users }: UserlistProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-5">
      {users.map((user) => (
        <Card key={user.id} username={user.username} email={user.email} />
      ))}
    </div>
  );
}

type CardProps = {
  username: string;
  email: string;
};

function Card({ username, email }: CardProps) {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-slate-800 p-4">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="ml-3">
            <h3 className="text-lg font-medium">{username}</h3>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h1 onClick={() => navigate(`/edit-user/1212`)}>edit</h1>
          <h1>delete</h1>
        </div>
      </div>
    </div>
  );
}
