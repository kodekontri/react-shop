import AuthLayout from "@/components/layouts/AuthLayout";
import { RegisterForm } from "@/components/register-form";
import React from "react";

function Register() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}

export default Register;
