import React, { useState } from "react";
import { Card, CardHeader, Typography } from "@material-tailwind/react";

import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import Handicraft from "./guide/handicraft";
import Travel from "./guide/Travel";
import Spices from "./guide/Spices";
import Agro from "./guide/Agro";
import Coir from "./guide/Coir";
import Fisheries from "./guide/Fisheries and Seafood Processing";
import Health from "./guide/Health";
import Rubber from "./guide/Rubber";
import ItandT from "./guide/IT and Software Services";
import { Input } from "@material-tailwind/react";
import { guideData } from "@/data";

function Doc() {
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const handleSearchInput = (event) => {
    const newSearchTerm = event.target.value;
    console.log(newSearchTerm);
    setSearchTerm(newSearchTerm);
  };
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <div className="mr-auto w-full md:mr-4">
        <Input
          value={searchTerm}
          onChange={(e) => {
            handleSearchInput(e);
          }}
          label="Type here"
          icon={<i className="fas fa-magnifying-glass" />}
        />
      </div>
      {guideData
        .filter((a) => {
          const searchTermMatch =
            searchTerm === "" ||
            a.title.toLowerCase().includes(searchTerm.toLowerCase());
          return searchTermMatch;
        })
        .map((data) => {
          return (
            <div>
              <Card>
                <CardHeader
                  variant="gradient"
                  color="blue"
                  className="mb-8 p-6"
                  onClick={handleToggle}
                  style={{ cursor: "pointer" }}
                >
                  <Typography variant="h6" color="white">
                    {data.title}
                  </Typography>
                </CardHeader>
                {expanded && (
                  <div className="p-6">
                    <Typography variant="body1">
                      <h1>{data.heading1}</h1>
                    </Typography>
                    <Typography variant="body2">{data.details}</Typography>
                  </div>
                )}
              </Card>
            </div>
          );
        })}
      {/* <Handicraft />
      <Travel /> */}
      {/* <Spices /> */}
      <Agro />
      <Coir />
      <Fisheries />
      <Health />
      <Rubber />
      <ItandT />
    </div>
  );
}

export default Doc;
