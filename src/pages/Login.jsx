import AuthLayout from "@/components/layouts/AuthLayout";
import { LoginForm } from "@/components/login-form";
import React from "react";

function Login() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;
