import H1 from "./H1";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../slice/userSlice";
import Form from "./Form";

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
      <Form onSubmit={handleSubmit} />
    </div>
  );
}
