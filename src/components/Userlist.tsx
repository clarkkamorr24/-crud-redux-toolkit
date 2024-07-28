import User from "../types/user";
import Card from "./Card";

type UserlistProps = {
  users: User[];
};

export default function Userlist({ users }: UserlistProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-5">
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}
