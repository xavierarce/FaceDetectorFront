import React from "react";
import { serverSignIn } from "../../API/serverFunctions";
import LoadingSpinerLocal from "../LoadingSpinerLocal/LoadingSpinerLocal";
// import './Signin.css'

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singInEmail: "",
      singInPassword: "",
      isLoading: false,
    };
  }

  onEmailChange = (event) => {
    this.setState({ singInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ singInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    this.setState({ isLoading: true });
    const emailToSend = this.state.singInEmail;
    const passwordToSend = this.state.singInPassword;

    serverSignIn(emailToSend, passwordToSend)
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.setState({ isLoading: false });
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }else{
          this.setState({ isLoading: false });
          alert('Not able to log In')
        }
      })
      .catch(() => {
        this.setState({ isLoading: false });
        alert("Invalid");
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure  ">
            {this.state.isLoading ? <LoadingSpinerLocal /> : null}
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba b--black bw1 bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba b--black bw1 bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="username"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba black b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("register")}
                className="f6 link dim black db pointer"
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
