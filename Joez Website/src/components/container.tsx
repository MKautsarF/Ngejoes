import React, { useState } from "react";

interface ContainerProps {
  children: React.ReactNode;
  h?: number;
  w?: number;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="mt-32 mb-32"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      {children}
    </div>
  );
};

export default Container;