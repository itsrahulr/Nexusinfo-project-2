import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Registration Successful . please login 🤗");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-dvh bg-buttonbg flex justify-center items-center">
        <form
          className="w-[350px] bg-bg rounded-xl p-5 flex flex-col justify-center items-center"
          onSubmit={registerUser}
          action=""
        >
          <h1 className="text-3xl md:text-5xl font-gs text-h1">Sign up</h1>
          <div className="flex flex-col gap-3 w-[300px] mt-5">
            <input
              className="border border-buttonbg h-10 rounded-md p-1 placeholder-buttonbg outline-0  text-buttonbg"
              type="text"
              placeholder="enter a username"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <input
              className="border border-buttonbg h-10 rounded-md p-1 placeholder-buttonbg outline-0  text-buttonbg"
              type="email"
              placeholder="enter a email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <input
              className="border border-buttonbg h-10 rounded-md p-1 placeholder-buttonbg outline-0  text-buttonbg "
              type="password"
              placeholder="enter a password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <p className="font-pop font-base text-buttonbg my-4">
              By signing up you accept a{" "}
              <Link to="/terms&conditions" className="underline">
                Terms & Conditions
              </Link>
            </p>
            <button
              className="bg-buttonbg rounded-full font-pop h-10 text-bg"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
