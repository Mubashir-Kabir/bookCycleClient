import React from "react";

const LandingBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-96"
        style={{
          backgroundImage:
            "url(https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=600&h=400&fit=crop&dpr=1)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn  btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;
