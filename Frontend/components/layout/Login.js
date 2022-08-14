const Login = () => {
  return (
    <div className="flex justify-center items-center bg-[#f9f9f9]">
      <div className="p-5 my-10 bg-white rounded-sm border shadow-3xl md:basis-1/2">
      <h2 className="p-2 text-xl semi-heading hover:text-[#081828] cursor-auto">Login Now</h2>
      <form action="" className="">
        <div className="form-group each-input">
          <label htmlFor="email"> Email:</label>
          <input type="email" name="email" />
        </div>
        <div className="each-input">
          <label htmlFor="password"> Password:</label>
          <input type="password" name="password" />
        </div>
        <div className="flex justify-between items-center each-input">
          <div>
            
          <input className="h-[18px] w-[18px] mr-3" type="checkbox" name="remember" id="remeber" />
          <label htmlFor="remember">Remember me</label>
          </div>
          <a href="#">Forgot password?</a>
        </div>
        <input type="submit" value="Login" className="cursor-pointer bg-[#0167f3] text-white hover:bg-[#081828] transition duration-300"/>
      </form>
      </div>
    </div>
  );
};
export default Login;
