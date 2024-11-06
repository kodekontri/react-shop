import { Form, Link, useNavigation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export function RegisterForm() {
  const navigation = useNavigation();

  // Check if the form is currently submitting
  const loading = navigation.state === "submitting";
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Create New Account</CardTitle>
        <CardDescription>
          Fill the form below to create new account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form method="post" className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              name="username"
              placeholder="johndoe700"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" name="password" required />
          </div>
          <Button
            type="submit"
            className="w-full flex items-center gap-2"
            disabled={loading}
          >
            Create Account
            {loading && <Loader2 className="w-3 h-3 animate-spin" />}
          </Button>
        </Form>
        <div className="mt-4 text-center text-sm">
          Have an account?{" "}
          <Link to="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
