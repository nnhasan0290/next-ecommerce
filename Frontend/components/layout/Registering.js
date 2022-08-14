import { useState } from "react";
const Registering = () => {
  const [fname, setFname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  //submit handler method ====================================
  const submitHandler = (e) => {
    e.preventDefault();
    const register_form = new FormData();
    register_form.set("fname", fname);
    register_form.set("lname", lname);
    register_form.set("email", email);
    register_form.set("password", password);
    register_form.set("confirmPass", confirmPass);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f9f9f9]">
      <div className="p-10 w-full bg-white border sm:w-1/2 shadow-3xl">
        <div className="p-2 my-5">
          <h2 className="text-[22px] font-bold mb-[10px] leading-[1.2] hover:cursor-auto hover:text-[#081828] semi-heading">No Account? Register now</h2>
          <p className="mb-5">
            Registration takes less than a minute but it gives you full controll
            over your order{" "}
          </p>
        </div>
        <form
          action=""
          className="flex-wrap items-center sm:flex"
          onSubmit={submitHandler}
        >
          <div className="each-input">
            <label htmlFor="fname">First Name</label>
            <input
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
              }}
              className="text-input"
              type="text"
              required
            />
          </div>
          <div className="each-input">
            <label htmlFor="lname">Last Name</label>
            <input
              value={lname}
              onChange={(e) => {
                setlname(e.target.value);
              }}
              className="text-input"
              type="text"
              required
            />
          </div>
          <div className="each-input">
            <label htmlFor="email">Email Address</label>
            <input
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="text-input"
              type="text"
              required
            />
          </div>
          <div className="each-input">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              className="text-input"
              type="text"
              required
            />
          </div>
          <div className="each-input">
            <label htmlFor="confirmpass">Confirm Password</label>
            <input
              value={confirmPass}
              onChange={(e) => {
                setconfirmPass(e.target.value);
              }}
              className="text-input"
              type="text"
              required
            />
          </div>
          <div className="bg-[#0167f3] text-white hover:bg-[#081828] w-full rounded-md m-2 transition-all duration-300 ease-linear">
            <input className="cursor-pointer" type="submit" value="Register" />
          </div>
        </form>
        <p className="my-2 text-center">
          Already have an account? <a className="text-[#0167f3]" href="/signin">login now</a>
        </p>
      </div>
    </div>
  );
};
export default Registering;
