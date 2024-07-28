import { useState } from "react";
import User from "../types/user";
import Button from "./ui/Button";
import Textfield from "./ui/Textfield";

type FormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  item?: User;
};

export default function Form({ onSubmit, item }: FormProps) {
  const [user, setUser] = useState({
    username: item?.username || "",
    email: item?.email || "",
  });

  return (
    <form
      action=""
      className="flex flex-col max-w-sm gap-2 m-auto mt-10"
      onSubmit={onSubmit}
    >
      <Textfield
        placeholder="Username"
        name="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <Textfield
        placeholder="Email"
        name="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
