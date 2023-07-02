import React from "react";

function Hero() {
  return (
    <div
      className="hero min-h-[80vh] bg-right-top bg-[url('https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1382&q=80')]  "
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">NODE SHARK</h1>
          <p className="mb-5">
           Giving software devs the best experience during their physical and mental workouts.  Whether you're coding a marathon or running one, we've got you covered.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
