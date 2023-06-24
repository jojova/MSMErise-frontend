import React from "react";
import { Button } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  authorsTableData,
  projectsTableData,
  crowdfundingData,
  investmentData,
  startedData,
} from "@/data";

export function Portfolio() {
  return (
    <div className="mt-12 mb-8 flex flex-col">
      <div className="mb-10">
        <Card>
          <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Invested Projects
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Company Name", "Sector", "Type", "status"].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {investmentData.map(
                  (
                    {
                      img,
                      name,
                      sector,
                      projectName,
                      email,
                      job,
                      online,
                      date,
                      budget,
                      completion,
                    },
                    key
                  ) => {
                    const className = `py-3 px-5 ${
                      key === investmentData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name} className="cursor-pointer">
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src={img} alt={name} size="sm" />
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {name}
                              </Typography>
                              <Typography className="text-xs font-normal text-blue-gray-500">
                                {projectName}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {sector}
                          </Typography>
                        </td>
                        {/* <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {projectName}
                          </Typography>
                        </td> */}
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {job[0]}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Chip
                            variant="gradient"
                            color={online ? "green" : "blue-gray"}
                            value={online ? "active" : "closed"}
                            className="py-0.5 px-2 text-[11px] font-medium"
                          />
                        </td>
                        {/* <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {budget}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <Typography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              {completion}%
                            </Typography>
                            <Progress
                              value={completion}
                              variant="gradient"
                              color={completion === 100 ? "green" : "blue"}
                              className="h-1"
                            />
                          </div>
                        </td> */}
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Started Projects
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Company Name", "Sector", "Type", "status"].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {startedData.map(
                  (
                    {
                      img,
                      name,
                      sector,
                      projectName,
                      email,
                      job,
                      online,
                      date,
                      budget,
                      completion,
                    },
                    key
                  ) => {
                    const className = `py-3 px-5 ${
                      key === startedData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name} className="cursor-pointer">
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src={img} alt={name} size="sm" />
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {name}
                              </Typography>
                              <Typography className="text-xs font-normal text-blue-gray-500">
                                {projectName}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {sector}
                          </Typography>
                        </td>
                        {/* <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {projectName}
                          </Typography>
                        </td> */}
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {job[0]}
                          </Typography>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            {job[1]}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Chip
                            variant="gradient"
                            color={online ? "green" : "blue-gray"}
                            value={online ? "active" : "closed"}
                            className="py-0.5 px-2 text-[11px] font-medium"
                          />
                        </td>
                        {/* <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {budget}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <Typography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              {completion}%
                            </Typography>
                            <Progress
                              value={completion}
                              variant="gradient"
                              color={completion === 100 ? "green" : "blue"}
                              className="h-1"
                            />
                          </div>
                        </td> */}
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Portfolio;
