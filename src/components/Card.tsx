import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../slice/userSlice";
import User from "../types/user";

type CardProps = {
  user: User;
};

export default function Card({ user }: CardProps) {
  const { username, email, id } = user;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="w-full bg-slate-800 p-4 rounded-md cursor-pointer">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="ml-3">
            <h3 className="text-lg font-medium">{username}</h3>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h1 onClick={() => navigate(`/edit-user/${id}`)}>edit</h1>
          <h1 onClick={() => dispatch(removeUser(id))}>delete</h1>
        </div>
      </div>
    </div>
  );
}
