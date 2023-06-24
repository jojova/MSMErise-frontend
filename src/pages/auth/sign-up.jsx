import { useState } from "react";
import { Link } from "react-router-dom";
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
import { signUpUser } from "../../services/userService";

export function SignUp() {
  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userType: ["msme"], // Default value
  });

  const [investorChecked, setInvestorChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setInvestorChecked(e.target.checked);
    setUserData((prevState) => ({
      ...prevState,
      userType: e.target.checked ? ["msme", "investor"] : ["msme"],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdUser = await signUpUser(userData); // Call your API service function
      console.log("Created user:", createdUser);
      // Handle the created user data as needed
    } catch (error) {
      console.error("Error signing up user:", error);
      // Handle the error as needed
    }
  };
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardBody className="flex flex-col gap-4">
              <Input
                type="text"
                name="userName"
                value={userData.userName}
                onChange={handleChange}
                label="Name"
                size="lg"
              />
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
              <Checkbox
                label="I am an Investor"
                checked={investorChecked}
                onChange={handleCheckboxChange}
              />
            </CardBody>
          </form>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
