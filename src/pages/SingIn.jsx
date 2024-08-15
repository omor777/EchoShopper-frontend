import { Button, HR, Label, TextInput } from "flowbite-react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { auth } from "../firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewUser,
  setError,
  setIsLoggedIn,
  setLoading,
  singInUser,
} from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SingIn = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSingUpUser = async ({ email, password }) => {
    dispatch(setLoading("pending"));
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      const loggedInUser = {
        email: user.email,
        createdAt: user.metadata.createdAt,
      };

      toast.success("Sing in successful");
      dispatch(setLoading("succeeded"));
      dispatch(setIsLoggedIn(true));
      dispatch(singInUser(loggedInUser));
      navigate("/");
    } catch (e) {
      // console.dir(e?.message);
      console.error(e);
      dispatch(setError(e?.message));
      toast.error(error);
    } finally {
      dispatch(setLoading("idle"));
    }
  };
  return (
    <div className="bg-white p-8 rounded-md w-full max-w-4xl mx-auto">
      <h1 className="text-center text-[clamp(32px,4vw,50px)] font-semibold">
        Sing In
      </h1>
      <form
        onSubmit={handleSubmit(handleSingUpUser)}
        noValidate
        className="space-y-4"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            {...register("email", {
              required: {
                value: true,
                message: "email is required!",
              },
            })}
            id="email"
            type="email"
            placeholder="example@gmail.com"
            rightIcon={MdEmail}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            {...register("password", {
              required: {
                value: true,
                message: "password is required!",
              },
              minLength: {
                value: 6,
                message: "password  minimum 6 character is required!",
              },
            })}
            id="password"
            type="password"
            placeholder="******"
            rightIcon={TbPasswordUser}
          />
        </div>
        <Button disabled={loading === "pending"} type="submit" fullSized>
          Sing In
        </Button>
      </form>
    </div>
  );
};

export default SingIn;
