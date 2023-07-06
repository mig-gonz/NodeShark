import React from "react";

function BotHero() {
  return (
    <div className="hero min-h-[50vh] bg-right-top bg-[url('https://images.unsplash.com/photo-1532382708467-d720b918f0da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3648&q=80')]  ">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content ">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">NODE SHARK</h1>
          <p className="mb-5">
            Giving software devs the best experience during their physical and
            mental workouts. Whether you're coding a marathon or running one,
            we've got you covered.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BotHero;