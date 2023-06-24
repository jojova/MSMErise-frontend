import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    Typography,
    
  } from "@material-tailwind/react";
const Coir = () => {
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
      Coir and Handloom
      </Typography>
      
    </CardHeader>
    {expanded && (
      <div className="p-6">
        <Typography variant="body1">
        <h1>
        Kerala has a rich heritage and a significant presence in the coir and handloom sectors. These industries are integral to the state's culture, economy, and employment generation. Let's delve into each sector in more detail:

Coir Sector:</h1>
         
        </Typography>
        <Typography variant="body2">
        Coir Sector:
        The coir sector in Kerala involves the production of various products using coir fiber derived from coconut husks. Coir mats, rugs, carpets, ropes, and other coir-based products are commonly manufactured by Micro, Small, and Medium Enterprises (MSMEs) in the state. Kerala is renowned for its high-quality coir products, which are in demand both domestically and internationally.
        
        Production Process: The coir production process begins with the extraction of coir fiber from coconut husks. The husks are soaked in water for several months, allowing them to decompose and separate the fibers. Afterward, the fibers are extracted, cleaned, and spun into yarn or twisted into ropes. Skilled artisans then utilize traditional handlooms or mechanized looms to weave the fibers into mats, rugs, or other desired products.
        
        Market Demand: Coir products have gained popularity due to their durability, eco-friendliness, and aesthetic appeal. These products find applications in households, hotels, resorts, and various industries. Internationally, there is a growing demand for coir-based products for landscaping, erosion control, and agriculture. Additionally, coir products have gained recognition for their sustainability and eco-friendly attributes.
        
        Government Support: The government of Kerala provides support to the coir industry through various initiatives, including financial assistance, training programs, infrastructure development, and marketing assistance. These measures aim to enhance the competitiveness of coir manufacturers and promote the growth of the sector.
        </Typography>
        <Typography variant="body2">
        Handloom Sector:
        The handloom sector in Kerala is deeply rooted in the state's tradition and cultural heritage. Skilled weavers, often working in small-scale or cooperative units, produce a wide range of handloom textiles, including traditional Kerala sarees, dhotis, mundus, and other garments. The handloom sector plays a crucial role in preserving indigenous weaving techniques, designs, and patterns.
        
        Production Process: Handloom textiles are meticulously crafted using traditional weaving techniques. The process involves preparing the yarn, dyeing it using natural or synthetic dyes, and then weaving it on handlooms. Skilled weavers operate these handlooms, incorporating intricate designs and patterns into the fabrics. Kerala's handloom textiles are known for their fine craftsmanship, vibrant colors, and distinctive motifs.
        
        Market Demand: Handloom textiles from Kerala have a strong market demand, both within the state and across the country. Traditional Kerala sarees like Kasavu sarees, known for their golden borders, are highly sought after for weddings, festivals, and other special occasions. Handloom dhotis and mundus are popular among men for traditional and ceremonial wear. The uniqueness and elegance of these textiles contribute to their appeal among customers.
        
        Government Support: The Kerala government extends support to the handloom sector through various initiatives, such as financial assistance, skill development programs, marketing support, and infrastructure development. These efforts aim to uplift weavers, improve their livelihoods, preserve traditional weaving techniques, and promote handloom products in domestic and international markets.
        
        Overall, the coir and handloom sectors in Kerala not only contribute significantly to the state's economy but also preserve its cultural heritage and traditional craftsmanship. These industries offer employment opportunities to skilled artisans, empower women, and promote sustainable practices. The unique products from these sectors have gained recognition globally, showcasing Kerala's expertise in coir and handloom manufacturing.
        </Typography>
      </div>
    )}
  </Card></div>
  )
}

export default Coir