import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    Typography,
    
  } from "@material-tailwind/react";
const Handicraft = () => {
    const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    
    <div><Card>
    <CardHeader
      variant="gradient"
      color="blue"
      className="mb-8 p-6"
      onClick={handleToggle}
      style={{ cursor: "pointer" }}
    >
      <Typography variant="h6" color="white">
        Handicrafts and Artisans
      </Typography>
      
    </CardHeader>
    {expanded && (
      <div className="p-6">
        <Typography variant="body1">
        <h1>
        Assistance Scheme for Handicrafts Artisans (ASHA)</h1>
        </Typography>
        <Typography variant="body2">
          The Scheme intends to provide financial assistance in the form of
          grant to the artisans in the Handicrafts sector for setting up
          Handicraft enterprises. The assistance is a one-time support to
          eligible artisans of the state as back-end assistance.
        </Typography>
        <Typography variant="body2">
          For the purpose of this scheme, an artisan is a person who has
          been categorized as such by the office of the Development
          Commissioner (Handicrafts), Govt. of India or SURABHI, KSBC,
          KADCO, HDCK, KELPALM and has taken effective steps to set up an
          enterprise in the Handicrafts sector.
        </Typography>
      </div>
    )}
  </Card></div>
  )
}

export default Handicraft