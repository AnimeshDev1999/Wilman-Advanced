const Login = () => {
  return (
    <div className="bg-WPurple1 m-5 mt-28 mb-14 pb p-10 rounded-lg xs:w-full sm:w-max md:w-max lg:w-max xl:w-max 2xl:w-max mx-auto">
      <h2 className="text-3xl mb-10">Welcome to Wilman Advanced</h2>
      <form
        action=""
        className="flex flex-col gap-5 justify-center items-center"
      >
        <input className="text-field" type="text" placeholder="Employee ID" />
        <input className="text-field" type="password" placeholder="Password" />
        <label htmlFor="">
          Keep me logged in &nbsp;
          <input type="checkbox" />
        </label>
        <a href="#" className="text-WGold1 underline">
          Forgot password?
        </a>
        <div className="flex gap-10 mt-5">
          <input
            type="submit"
            value="Login"
            className="bg-WPurple hover:bg-WGold duration-500 text-white px-2 py-1 rounded-md"
          />
          <input
            type="reset"
            value="Clear"
            className="border-2 border-slate-800 duration-500 text-slate-800 px-2 py-1 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};
export default Login;
