import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    Typography,
    
  } from "@material-tailwind/react";
const Rubber = () => {
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
      Rubber and Rubber Products
      </Typography>
      
    </CardHeader>
    {expanded && (
      <div className="p-6">
        <Typography variant="body1">
        <h1>
        The world production of rubber was considered to be very unstable during the last few years. Comparatively, India's production of rubber is consistent at the rate of 6% per annum. The Rubber industry in India is growing with its roots deeper. India is the 3rd largest consumer, while the largest producer of natural rubber in the world. The growth of rubber industry in India plays a significant role in the global economy. These factors along with high growth of automobile production with many large and medium industries has made India one of the fastest growing economy globally.
        </h1>
        </Typography>
        <Typography variant="body2">
        Here are some facts regarding rubber industry in India.

        India is the third largest producer of rubber in the world.
        It is the fourth largest consumer of natural rubber.
        It is the fifth largest consumer of natural rubber and synthetic rubber together in the world.
        India is the world's largest manufacturer of reclaim rubber.
        India and China are the only two countries in the world which have the capacity to consume the entire indigenous production of natural rubber.
        To know more about India's export opportunities regarding rubber products and also to have an idea about global rubber industry, take the Rubber Industry Overview
        Rubber Consumption in India
        The following industrial sector consume most of the rubber products.
        Automotive tyre sector: 50% consumption of all kinds of rubbers
        Bicycles tyres and tubes: 15%
        Footwear: 12%
        Belts and hoses: 6%
        Camelback and latex products: 7%
        Other products: 10%
        Indian Rubber Market
        India’s production varies between 6 and 7 lakh tons annually which amounts to Rs. 3000 crores. Seventy percent of the total rubber production in India is in the form of Ribbed Smoked Sheets (RSS). This is also imported by India accounting for 45% of the total import of rubber. The Indian rubber industry has a turnover of Rs 12000 crores. Most of the rubber production is consumed by the tyre industry which is almost 52% of the total production of India. Among the states, Kerala is the leading consumer of rubber, followed by Punjab and Maharashtra. The exports of Indian natural rubber have increased tremendously over the years and have reached 76000 tons in 2003-04.
        
        Though, India is one of the leading producers of rubber but it still imports rubber from other countries. At present, India is importing around 50000 tons of rubber annually.
        
        India Rubber Industry Overview
        There are about 6000 unit comprising 30 large scale, 300 medium scale and around 5600 small scale and tiny sector units. These units are manufacturing more than 35000 rubber products, employing 400 hundred thousand people, which also includes 22000 technically qualified support personnel, contributing Rs. 40 billions to the National Exchequer through taxes, duties and other levies. The Indian Rubber Industry plays a vital role in the Indian national economy. The rubber plantation sector in India produces over 630 hundred thousand tones of natural rubber and there is a projected production of more than one million tones in near future. This has helped in the radical and rapid growth of the Indian rubber industry. This prospect of growth is further enhanced by a boom in the vehicle industry, improved living standards of the people and rapid over-all industrialization. The per capita consumption of rubber in India is only 800 grams compared to 12 to 14 kilos in Japan, USA and Europe. So far as consumption of rubber products is concerned, India is far from attaining any saturation level. This is another factor leading to tremendous growth prospects of the industry in the years to come.
        </Typography>
      </div>
    )}
  </Card></div>
  )
}

export default Rubber