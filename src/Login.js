const Login = ({ isLogin, toggle }) => {
  return (
    <div>
      <p>Login Page</p>
      <button onClick={toggle}>{isLogin}</button>
    </div>
  );
};

export default Login;
