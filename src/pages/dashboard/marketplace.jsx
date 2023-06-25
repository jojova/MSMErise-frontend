import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import Buyer from "./buyer";
import Seller from "./seller";

export function MarketPlace() {
  const [buyer, setBuyer] = useState(true);
  return (
    <>
      <ul class="my-5 flex list-none flex-row flex-wrap border-b-0 pl-0">
        <li role="presentation" class="flex-auto text-center">
          <button
            className={`${buyer ? "font-semibold text-green-500" : ""} `}
            onClick={() => setBuyer(true)}
          >
            Buyer
          </button>
        </li>
        <li role="presentation" class="flex-auto text-center">
          <button
            className={`${buyer ? "" : "font-semibold text-green-500"}`}
            onClick={() => setBuyer(false)}
          >
            Seller
          </button>
        </li>
      </ul>
      {buyer ? <Buyer /> : <Seller />}
      {/* <Card className="w-96">
        <CardHeader shadow={false} floated={false} className="h-64">
          <img
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            className="h-64 w-full object-cover"
          />
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
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card> */}
    </>
  );
}

export default MarketPlace;
