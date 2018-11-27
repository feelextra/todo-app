import React from "react";
import { Button } from "reactstrap";

import LoginModal from "./LoginModal";
import { AuthContext } from "../containers/AuthContainer";

class ModalWithActivator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  openLoginModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeLoginModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <div>
        <Button color="info" onClick={() => this.openLoginModal()}>
          Sign-in
        </Button>
        <AuthContext.Consumer>
          {authContext => (
            <LoginModal
              isModalOpen={isModalOpen}
              closeLoginModal={this.closeLoginModal}
              {...authContext}
            />
          )}
        </AuthContext.Consumer>
      </div>
    );
  }
}

export default ModalWithActivator;
