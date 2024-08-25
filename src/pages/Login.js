import React from "react";
import Lottie from "lottie-react";
import animation from "../utilities/LogInAnimation.json";
import LoginForm from "../components/LoginForm";

const LogIn = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-10 px-3 lg:px-20 justify-between items-center">
      <Lottie
        className="hidden lg:block"
        animationData={animation}
        loop={true}
      />
      <LoginForm></LoginForm>
    </div>
  );
};

export default LogIn;
