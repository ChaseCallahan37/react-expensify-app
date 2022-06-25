import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
  );
};

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please dont share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const withAuthWarning = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <h1>
          {props.isAuthenticated
            ? "Thank you for signing in"
            : "Please sign in"}
        </h1>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthWarning(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="These are the details" />,
  document.getElementById("app")
);
