import H1 from "./H1";
import Textfield from "./ui/Textfield";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../slice/userSlice";

export default function AddUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //get the form data

    const formData = new FormData(e.currentTarget);
    //get the username and email from the form data
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;

    if (!username || !email) {
      alert(`Item can't be empty`);
      return;
    }

    dispatch(addUser({ id: new Date().getTime(), username, email }));
    navigate("/");
  };

  return (
    <div className="text-center">
      <H1>CRUD with Redux Toolkit</H1>
      <form
        action=""
        className="flex flex-col max-w-sm gap-2 m-auto mt-10"
        onSubmit={handleSubmit}
      >
        <Textfield placeholder="Username" name="username" />
        <Textfield placeholder="Email" name="email" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
