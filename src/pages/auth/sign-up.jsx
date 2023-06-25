import { useState, useEffect } from "react";
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
import { signUpUser } from "../../services/userService";

export function SignUp() {
  const history = useNavigate(); // Access the history object

  useEffect(() => {
    history("/auth/sign-up"); // Redirect to /auth/sign-up when the component mounts
  }, [history]);

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
      const createdUser = await signUpUser(userData);
      console.log("Created user:", createdUser);
      // Redirect to signing page on successful sign up
      history("/auth/sign-in");
    } catch (error) {
      console.error("Error signing up user:", error);
      // Handle the error as needed (e.g., show an error message)
    }
  };

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1617957743097-0d20aa2ea762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JhZGllbnQlMjBncmVlbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4 xs:w-4/5">
          <CardHeader
            variant="gradient"
            color="green"
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
              <Input type="text" name="MSME ID" label="MSME ID" size="lg" />
              <input type="file" className="hidden" id="file_upload" />
              <Button
                variant="gradient"
                color="green"
                fullWidth
                onClick={(e) => {
                  e.preventDefault();
                  const uploadButton = document.querySelector("#file_upload");
                  uploadButton.click();
                }}
              >
                Upload File (for MSME only)
              </Button>

              <Checkbox
                label="Registering on behalf of an MSME?"
                checked={investorChecked}
                onChange={handleCheckboxChange}
              />
              <Button variant="gradient" color="green" fullWidth type="submit">
                Sign Up
              </Button>
            </CardBody>
          </form>
          <CardFooter className="pt-0">
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="green"
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
