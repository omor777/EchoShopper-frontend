import { Button, HR, Label, TextInput } from "flowbite-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { auth } from "../firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewUser,
  setError,
  setLoading,
} from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const SingUp = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSingUpUser = async ({ email, password }) => {
    dispatch(setLoading("pending"));
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = {
        email: user.email,
        createdAt: user.metadata.createdAt,
      };
      toast.success("Sing up successful");
      dispatch(setLoading("succeeded"));
      dispatch(createNewUser(newUser));
      navigate("/");
    } catch (e) {
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
        Sing Up
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
            })}
            id="password"
            type="password"
            placeholder="******"
            rightIcon={TbPasswordUser}
          />
        </div>
        <Button disabled={loading === "pending"} type="submit" fullSized>
          Sing Up
        </Button>
      </form>
    </div>
  );
};

export default SingUp;
