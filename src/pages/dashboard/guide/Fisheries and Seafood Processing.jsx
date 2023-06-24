import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    Typography,
    
  } from "@material-tailwind/react";
const Fisheries = () => {
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
      Fisheries and Seafood Processing
      </Typography>
      
    </CardHeader>
    {expanded && (
      <div className="p-6">
        <Typography variant="body1">
        Fish farming is the process of commercial breeding and rearing of fish, generally for food consumption or ornamental purposes.

Tilapia, Salmon, Carp, Shrimp, and Trout are the few high-selling fish species that can give huge returns.
         
        </Typography>
        <Typography variant="body2">
        How to Start Fish Farming in India? Get Started in Just 6 Steps
        </Typography>
        <Typography variant="body2">
        Step 1 – Decide on the capital
        For every business, deciding capital is imperative. Also, to identify the cost of starting this business, you must do extensive market research to see the target market and competition in the same area. And must identify the actual costs required to procure the raw materials and run the business. 
        
        Here are a few types of costs you would need to oversee:
        
        Costs related to infrastructure or area where you will culture or rear the fish. Such as fishing tanks or artificially curated man-made ponds or structures.
        Types of fish you would be rearing in your fish farm.
        And other variable costs related to buying fish feeds, electrical or water resources, labour costs, and other resources needed to pursue business activities.
        Step 2 – Explore Loans and Schemes for Fish Farming
        Chhattisgarh government has given fish rearing and culture the status of Agriculture. Also, the Government of India is now providing concession of water and electricity bills and some interest-free loans to pursue this fish farming. 
        
        The government of India has initiated Pradhan Mantri Matsya Sampada Yojana to regulate a comprehensive framework and eliminate infrastructural gaps in the fisheries sector.
        
        Top 4 Government Fish Farming Schemes In India
        
        1. 60% subsidy will be available for fish farming, know how to take loan from bank
        
        2. Government will get up to 75 percent subsidy on fish farming
        
        3. Up to 60 percent subsidy will be given from the government for prawn farming
        
        4. Matsya Sampada Yojana: 60 percent subsidy for fish farming. Apply now
        
        Here are a few loan schemes offered by private banks, NBCs and Government banks that can be utilise to pursue this farming type.
        
        SBI’s Pradhan Mantri Mudra Yojna (PMMY)
        SBI is offering term loans up to Rs. 10 lakhs @10.75% per annum to help individuals gain employment opportunities and livelihood in agriculture or allied activities. The loan is credited by lending institutions such as commercial banks, RRBs, small finance banks, MFIs and NBFCs.
        
        Axis Bank Kisan Matsya Loan
        Axis bank offers a Kisan Matsya loan to help farmers cultivate fresh/brackish water fish or prawns. The minimum loan amount is Rs. 25,001, and the maximum loan limit is Rs.1,50,00,000. However, the farmer should have 2 acres of own land/ water spread area pan India. And if residing in West Bengal and Odisha, a minimum of 1 acre of land is require. 
        
        Step 3 – Perform Market Research for Demand, Supply & Competition Analysis
        You can perform market research in 3 different areas:
        
        Economy Level – Understand the purchasing power of people, know inflation & deflation in the economy and observe the factors that can impact the purchasing intent of buyers. 
        Industry Level – Understand what the fish farming industry looks like, what it entails, the costs, profitability, and which marine resources are in huge demand.
        Business Level – Understand what kind of fish culturing and rearing will be fruitful and what size of business you would like to start and scale with. 
        Along with all these, understand your competitors. Know what added advantage they have. Moreover, figure out the demand and supply ratio in the fish farming market.
        
        Step 4 – Invest in Fish Farming Training in India
        You can learn about fish farming through various Government institutes. Also, these institutes aim to increase employment opportunities by providing free or less costly training on biofloc fish farming technology, management, handling operations of fish seed hatchery, aquarium construction, and deciding on the type of fish farming ponds.
        
        Step 5 – Identify Location, technology and Scale
        Know whether you want to invest in Marine aquaculture or freshwater aquaculture, based on your requirement and the area’s resources. You can use the Recirculatory Aquaculture System (RAS) (where water is recycled through filtration) a BFT (Biofloc Fishing Technology, where aggregates of algae, bacteria, or protozoa are used to improve water quality).
        
        Ascertain whether your state or union territory provides any subsidiary, tax, and business benefits to pursuing this farming type or not.
        
        If you are going for sustainable marine aquaculture, it is best to choose shallow coastal waters. If you are pursuing this farming in land-locked areas, you can go for the manmade types of ponds for fish farming and then decide the scale of business.
        
        Step 6 – Built Connections with Suppliers, Logistic Partners & Buyers
        To ensure your output reaches the right buyers in their preferred state, you need to have tie-ups with suppliers and logistic partners. Moreover, build connections with suppliers who deal in cold storage space to make your products reach freshly as practically as possible. Also, connect with suppliers of fish feeds and ancillaries. Create a value chain of the right suppliers and buyers.
        
        You can adapt the D2C (Direct to Customer) model if you want to run every process internally rather than 3rd parties.
        </Typography>
      </div>
    )}
  </Card></div>
  )
}

export default Fisheries