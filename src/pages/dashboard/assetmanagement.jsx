import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  StarIcon,
  HeartIcon,
  WifiIcon,
  HomeIcon,
  TvIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

import { assetsData } from "@/data/assets-data";

export function AssetManagement() {
  return (
    <div className="grid grid-cols-3 ">
      {assetsData.map((data) => (
        <div className="col-span-3 mx-1 mt-5 md:col-span-1">
          <Card className="h-[28rem] w-full shadow-lg">
            <CardHeader floated={false} color="">
              <img
                className="mx-auto h-48"
                src={data.img}
                alt="industrial oven"
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-medium"
                >
                  {data.title}
                </Typography>
              </div>
              <Typography color="gray">{data.description}</Typography>
            </CardBody>
            <CardFooter className="mb-0 mt-auto">
              <Button color="green" size="lg" fullWidth={true}>
                Add to Marketplace
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default AssetManagement;
