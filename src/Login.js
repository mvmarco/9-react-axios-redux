import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const signedIn = useSelector((store) => store.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "SIGN_IN" })}>
        {signedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Login;
