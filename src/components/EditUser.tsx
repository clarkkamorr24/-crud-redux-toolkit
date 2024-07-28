import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import H1 from "./H1";
import { RootState } from "../store";
import { editUser } from "../slice/userSlice";

export default function EditUser() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state: RootState) =>
    state.users.users.find((user) => user.id === Number(params.id))
  );

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

    dispatch(editUser({ ...state, username, email }));
    navigate("/");
  };

  console.log("state", state);

  return (
    <div className="text-center">
      <H1>CRUD with Redux Toolkit</H1>
      <Form onSubmit={handleSubmit} item={state} />
    </div>
  );
}
