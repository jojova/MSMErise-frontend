import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { signInUser } from "../../services/userService";

export function SignIn() {
  const history = useNavigate(); // Access the history object from react-router-dom

  const [userData, setUserData] = useState({
    userEmail: "",
    userPassword: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInUser(userData);
      console.log("Sign-in response:", response);

      // Check if authentication was successful
      if (response.success) {
        // Redirect to the dashboard/home on successful sign-in
        history("/dashboard/home");
      } else {
        // Show error message if authentication failed
        setError(response.message);
      }
    } catch (error) {
      console.error("Error signing in user:", error);
      // Handle the error as needed (e.g., show an error message)
    }
  };

  return (
    <>
      {/* Your JSX code */}
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4 xs:w-4/5">
          <CardHeader
            variant="gradient"
            color="green"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardBody className="flex flex-col gap-4">
              <Input
                type="email"
                name="userEmail"
                value={userData.userEmail}
                onChange={handleChange}
                label="Email"
                size="lg"
              />
              <Input
                type="password"
                name="userPassword"
                value={userData.userPassword}
                onChange={handleChange}
                label="Password"
                size="lg"
              />
            </CardBody>
            {error && (
              <Typography variant="caption" color="red" className="mt-2">
                {error}
              </Typography>
            )}
            
            <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" color="green" fullWidth>
            Sign In
          </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don't have an account?
                <Link to="/auth/sign-up">
                  <Typography
                    as="span"
                    variant="small"
                    color="green"
                    className="ml-1 font-bold"
                  >
                    Sign up
                  </Typography>
                </Link>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
