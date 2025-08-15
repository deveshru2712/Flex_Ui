import React from "react";

const Overlay = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-white/90 blur-[2px]">
      {/* Left quarter-circle container */}
      <div className="absolute left-0 top-0 w-[50vw] h-[50vw] overflow-hidden">
        {/* Actual circle (positioned to show only bottom-right quarter) */}
        <div
          className="absolute -left-full -top-full w-[200%] h-[175%]"
          style={{
            background: "#ffffff",
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.15) 2px, transparent 1px)",
            backgroundSize: "20px 20px",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Right quarter-circle container */}
      <div className="absolute right-0 top-0 w-[50vw] h-[50vw] overflow-hidden">
        {/* Actual circle (positioned to show only bottom-left quarter) */}
        <div
          className="absolute -right-full -top-full w-[190%] h-[175%]"
          style={{
            background: "linear-gradient(135deg, #E4F1FF 0%, white 100%)",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
};

export default Overlay;
