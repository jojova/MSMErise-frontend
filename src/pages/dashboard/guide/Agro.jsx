import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    Typography,
    
  } from "@material-tailwind/react";
const Agro = () => {
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
      Agro-based Industries
      </Typography>
      
    </CardHeader>
    {expanded && (
      <div className="p-6">
        
        <Typography variant="body1">
        If there is one sector that is always thriving, regardless of the economic environment of the country, it is Agriculture. After all, food is one of the basic necessities of human beings for survival. So the agricultural sector is considered to be the prime sector for any nation. More so in a country like India which is known as an agricultural country because farming is the backbone of the Indian economy.

        The importance of agriculture in India:
        More than 60% to 70% of the Indian population is dependent on agriculture and its allied activities for their livelihood
        The agricultural sector provides employment to more than 52% of total labour of the country
        The contribution of agriculture to India’s total GDP (Gross Domestic Product) is between 14% to 15%.
        Hence, it goes without saying that agriculture can potentially be a feasible business idea in India. Also known as Agribusiness, an agricultural business includes farming, production, marketing and management of agricultural commodities like grains, vegetables, fruits, and livestock. From a broader perspective, an agribusiness also consists of resource management, conservation, ranching and sales of the agricultural produce.
        
        The main causes of a surge in the Agribusiness in the past few years:
        With the consistent rise of E-commerce, home delivery grocery stores have created an opportunity for agriculture enthusiasts to start their own farms with the help of agriculture experts
        The ever growing population has increased the demand for food produce
        Start ups have come up with the innovative idea of growing organic produce in terraces and balconies of homes
        The growing awareness and popularity of high quality organic farm produce that sells at high value in the market.
        The agriculture business can be predominantly categorised into three main sectors mentioned below:
        Production resources, which include seed, feed, fertilizer, energy, equipment, machinery and the likes
        Agricultural commodities like raw or processed items of food and fibre
        Facilitative services like insurance, marketing, credit, processing, storage, packaging, transportation, etc.
        However, just like any other business, starting an agricultural business also needs systematic planning and strategising in order to achieve the desired goals.
        
        A Step by Step guide on drafting an Agribusiness business:
        Step1 – Decide which, amongst the below, agriculture business idea suits you the most:
        
        Urban agriculture, which means practicing agriculture in urban areas and its surrounding regions.
        Herb, fruit or vegetable farming
        Production of Botanical pesticide
        Organic gardening
        Field crop farming
        Distribution of fertilisers
        Dairy farming
        Poultry farming
        Step 2 – Obtain the chosen farming land’s proof of ownership or lease agreement and secure a farm map which includes farm boundaries and watering points.
        
        Step 3 – Research and identify the potential markets and its requirements to cater to.
        
        Step 4 – Take into account your expertise, ability, knowledge and access to professional assistance before finalising the commodity for your business plan.
        
        Step 5 – Calculate the short term as well as long term economic potential, viability and future opportunities of the chosen commodities and source information accordingly.
        
        Step 6 – Once you have zeroed in on the commodities, the next logical step would be to identify resources that need to be obtained to manufacture your chosen commodities.
        
        Step 7 – Once you have finalised the agribusiness sector of your choice, you will have to get your business registered with its chosen operational name.
        
        Step 8 – Arguably the most vital step in starting any new business is arranging the required finances from a reliable source to ensure smooth operations of the business.
        
        Agriculture loans in India:
        An agribusiness loan is nothing but an overdraft facility that can be used as working capital for activities related to agriculture like farming and cultivation. Agricultural loans in India are usually low interest loans that can be availed by farmers. The repayment tenure of an agricultural loan differs from lender to lender. The loan can be repaid in monthly, half yearly or yearly instalments.
        
        Uses of Agribusiness loans:
        Purchasing farming and irrigation equipment
        Buying cattle and livestock
        Purchase land for agricultural activities
        Storage and warehousing expenses
        Marketing expenses
        Transportation costs
        Managing day to day operations.
        Sources of Agribusiness loans:
        In India, financial institutions like government and private banks, co-operative societies and Non-Banking Financial Companies (NBFC) like Lendingkart provide convenient agribusiness loans.
        
        Benefits of Agribusiness loans from Lendingkart:
        
        Convenient and flexible loan
        Simplified documentation
        Easy loan repayment terms as per the borrower’s income
        Zero hidden costs
        Attractive interest rates
        Fast processing
        Eligibility criteria for an Agriculture Loan:
        Applicant should be between 18 – 70 years old.
        Applicant should utilise the loan for cultivation of agricultural land
        Documents required to avail an Agriculture Loan:
        ID proof – PAN card/Aadhar card/Ration card/Driving license/Voter ID
        Address proof – Bank statement/No more than 3 months old utility bill/Ration card/Driving license/Passport
        Land ownership proof.
        </Typography>
      </div>
    )}
  </Card></div>
  )
}

export default Agro