import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../common";


// TODO: Refactor this any.
export function RequireLogin({children}: any) {
  const navigate = useNavigate()

  return isLoggedIn() === true ? children : navigate('/', { replace: true })
}
