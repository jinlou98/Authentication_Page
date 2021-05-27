import React, {useContext} from "react";
// useContext does the job of .consumer 

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = (props) => {
  const ctx= useContext(AuthContext);
  return (
    // with consumer, we listen 
    // <AuthContext.Consumer>

          <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={ctx.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
        )

      
    // </AuthContext.Consumer>

};

export default Navigation;
