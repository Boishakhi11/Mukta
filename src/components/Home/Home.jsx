import React from "react";

const Home = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello, I'm Boishakhi</h1>
          <p className="py-6">I am a Software Developer</p>
          <div className="flex justify-center items-center gap-6">
            <button className="btn btn-primary">See My Works</button>
            <button className="btn btn-primary">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
