import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Store from "./pages/Store";
import { toast } from "sonner";
import {
  createUserWithCredentials,
  loginUserWithEmailAndPassword,
} from "./services/authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Store />,
    errorElement: <h1>Not Found</h1>,
  },
  {
    path: "/login",
    element: <Login />,
    action: async ({ request }) => {
      try {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        await loginUserWithEmailAndPassword(data.email, data.password);

        console.log(data);
        toast.success("login successful");
        return redirect("/");
      } catch (error) {
        toast.error("Something went wrong");
        return { success: false };
      }
    },
  },
  {
    path: "/register",
    element: <Register />,
    action: async ({ request }) => {
      try {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        await createUserWithCredentials(data);

        console.log(data);
        toast.success("Account created successfully");
        return redirect("/");
      } catch (error) {
        toast.error("Something went wrong");
        console.log(error);
        return { success: false };
      }
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
