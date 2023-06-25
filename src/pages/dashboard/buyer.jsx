import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { buyerData } from "@/data/buyer-data";
import pump from "../../../public/img/pump.jpg";
import industrialGenerator from "../../../public/img/industrialGenerator.jpg";

export function Buyer() {
  const [cardOne, setCardOne] = useState(true);
  const [cardTwo, setCardTwo] = useState(true);
  const [cardThree, setCardThree] = useState(true);
  return (
    <div className="grid grid-cols-3">
      {/* {buyerData.map((a) => (
        <div className="col-span-3 mx-1 mt-5 md:col-span-1">
          <Card className="w-64">
            <CardHeader shadow={false} floated={false} className="h-64">
              <img src={a.img} className="h-64 w-full object-cover" />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  {a.title}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  {a.cost}
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                {a.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-green-500 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))} */}
      <div
        className={`col-span-3 mx-1 mt-5 md:col-span-1 ${
          cardOne ? "" : "hidden"
        }`}
      >
        <Card className={`w-64 `}>
          <CardHeader shadow={false} floated={false} className="h-64">
            <img src={pump} className="h-64 w-full object-cover" />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Electric Pump
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                $95.00
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Used for transferring liquids or gases in various industrial
              processes, such as water pumping, chemical transfer, or oil
              refining.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-green-500 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              onClick={() => setCardOne(false)}
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div
        className={`col-span-3 mx-1 mt-5 md:col-span-1 ${
          cardTwo ? "" : "hidden"
        }`}
      >
        <Card className={`w-64 `}>
          <CardHeader shadow={false} floated={false} className="h-64">
            <img
              src={industrialGenerator}
              className="h-64 w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Electric Generator
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                $95.00
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Used for transferring liquids or gases in various industrial
              processes, such as water pumping, chemical transfer, or oil
              refining.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-green-500 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              onClick={() => setCardTwo(false)}
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div
        className={`col-span-3 mx-1 mt-5 md:col-span-1 ${
          cardThree ? "" : "hidden"
        }`}
      >
        <Card className={`$ w-64`}>
          <CardHeader shadow={false} floated={false} className="h-64">
            <img src={pump} className="h-64 w-full object-cover" />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Electric Pump
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                $95.00
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              Used for transferring liquids or gases in various industrial
              processes, such as water pumping, chemical transfer, or oil
              refining.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-green-500 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              onClick={() => setCardThree(false)}
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Buyer;
