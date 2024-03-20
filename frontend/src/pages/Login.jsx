import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { name, password } = data;
    try {
      const response = await axios.post("/login", {
        name,
        password,
      });
      const responseData = response.data;
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({ name: "", password: "" });
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while logging in");
    }
  };

  return (
    <>
      <div className="bg-buttonbg min-h-screen flex justify-center items-center">
        <form
          className="bg-bg rounded-xl p-5 flex flex-col justify-center items-center"
          onSubmit={loginUser}
          action=""
        >
          <h1 className="text-3xl md:text-5xl font-gs text-h1">Login</h1>
          <div className="flex flex-col gap-3 w-[300px] mt-5">
            <input
              className="border border-buttonbg h-10 rounded-md p-1 placeholder-buttonbg outline-none text-buttonbg"
              type="text"
              placeholder="Enter a username"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <input
              className="border border-buttonbg h-10 rounded-md p-1 placeholder-buttonbg outline-none text-buttonbg"
              type="password"
              placeholder="Enter a password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <p className="font-pop font-base text-buttonbg my-4">
              Don't you have an account ?{" "}
              <Link className="underline" to="/register">
                Create one
              </Link>
            </p>
            <button
              className="bg-buttonbg rounded-full font-pop h-10 text-bg"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
