import {useSelector, useDispatch} from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  return(
    <div>
      <button onClick={() => dispatch({type: "SIGN_IN"})}> Login</button>
    </div>
  )
}

export default Login;