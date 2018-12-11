import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Header from "./Header.js";
import Body from "./Body/index.js";
import AuthContext from "../containers/Auth/AuthContext.js";
import Delay from "../containers/Delay.js";
import "./style.css";

const Layout = () => (
  <AuthContext.Consumer>
    {authContext => (
      <Delay
        component={ScreenLayout}
        shouldShow={!authContext.isAwaitingAuth}
        timeout={500}
      />
    )}
  </AuthContext.Consumer>
);

const ScreenLayout = () => (
  <TransitionGroup>
    <CSSTransition classNames="fade" appear={true}>
      <div>
        <Header />
        <Body />
      </div>
    </CSSTransition>
  </TransitionGroup>
);

export default Layout;
