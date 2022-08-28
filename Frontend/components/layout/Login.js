import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/userAction";
import {useRouter} from "next/router";
import Link from "next/link"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const state = useSelector((state) => state.loginUser);
  const dispatch = useDispatch();
  const router = useRouter();

  //Submit handler =================================
  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("email", email);
    myForm.set("password", password);
    dispatch(loginUser(myForm));
    router.push("/",{shallow:false});
  };
  return (
    <div className="flex justify-center items-center bg-[#f9f9f9]">
      <div className="p-5 my-10 bg-white rounded-sm border shadow-3xl md:basis-1/2">
        <h2 className="p-2 text-xl semi-heading hover:text-[#081828] cursor-auto">
          Login Now
        </h2>
        <form action="" className="" onSubmit={submitHandler}>
          <div className="form-group each-input">
            <label htmlFor="email"> Email:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="border"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="each-input">
            <label htmlFor="password"> Password:</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border"
              type="password"
              name="password"
              required
            />
          </div>
          <div className="each-input">
            <div>
              <input
                className="h-[18px] w-[18px] mr-3"
                type="checkbox"
                name="remember"
                id="remeber"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
          </div>
          <input
            type="submit"
            value="Login"
            className="cursor-pointer bg-[#0167f3] text-white hover:bg-[#081828] transition duration-300"
          />
        </form>
        <div className="flex justify-center items-center my-3 space-x-3">
          <p>Don't have an account?</p>
          <div className="text-[#0167f3]">
            
        <Link href="/register"> Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
