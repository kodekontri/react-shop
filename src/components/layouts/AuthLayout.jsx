import React from "react";
import { Toaster } from "../ui/sonner";

function AuthLayout({ children }) {
  return (
    <div className="h-screen grid place-items-center">
      {children}
      <Toaster />
    </div>
  );
}

export default AuthLayout;
