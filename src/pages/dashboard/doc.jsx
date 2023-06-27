import React, { useState } from "react";
import { Card, CardHeader, Typography } from "@material-tailwind/react";

import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import { Input } from "@material-tailwind/react";
import { guideData } from "@/data";

function Doc() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
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
        .map((data, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div key={index}>
              <Card>
                <CardHeader
                  variant="gradient"
                  color="green"
                  className="mb-8 p-6"
                  onClick={() => handleToggle(index)}
                  style={{ cursor: "pointer" }}
                >
                  <Typography variant="h6" color="white">
                    {data.title}
                  </Typography>
                </CardHeader>
                {isExpanded && (
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
    </div>
  );
}

export default Doc;
