import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    Typography,
    
  } from "@material-tailwind/react";
const Spices = () => {
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
        Spices and Food processing
      </Typography>
      
    </CardHeader>
    {expanded && (
      <div className="p-6">
        <Typography variant="body1">
        <h1>
        PM Formalisation of micro food processing Enterprises Scheme (PM FME Scheme)</h1>
         
        </Typography>
        <Typography variant="body2">
       
        PM FME scheme is a centrally sponsored scheme that is designed to address the challenges faced by the micro enterprises and to tap the potential of groups and cooperatives in supporting the upgradation and formalization of these enterprises. The expenditure under the scheme would to be shared in 60:40 ratios between Central and State Governments.
        Aims
        The scheme aims to:
        
        Enhance the competitiveness of existing individual micro-enterprises in the unorganized segment of the food processing industry and promote formalization of the sector; and
        Support Farmer Producer Organizations (FPOs), Self Help Groups (SHGs) and Producers Cooperatives along their entire value chain.
        Financial Assistance
        The objectives of scheme are to build capability of microenterprises to enable:
        
        Increased access to credit by existing micro food processing entrepreneurs, FPOs, Self Help Groups and Co-operatives;
        Integration with organized supply chain by strengthening branding & marketing;
        Support for transition of existing 2,00,000 enterprises into formal framework;
        Increased access to common services like common processing facility, laboratories, storage, packaging, marketing and incubation services;
        Strengthening of institutions, research and training in the food processing sector; and
        Increased access for the enterprises, to professional and technical support.
        Coverage:  
         Under the scheme, 2, 00,000 micro food processing units will be directly assisted with credit linked subsidy. Adequate supportive common infrastructure and   institutional architecture will be supported to accelerate growth of the sector.
        
        One District One Product:
        The Scheme adopts One District One Product (ODOP) approach to reap the benefit of scale in terms of procurement of inputs, availing common services and marketing of products. ODOP for the scheme will provide the framework for value chain development and alignment of support infrastructure.
        
        There may be more than one cluster of ODOP products in a district. A state may have a cluster of ODOP product consisting of more than one district. With respect to support to existing individual micro units for capital investment, preference would be given to those producing ODOP products. However, existing units producing other products would also be supported. In case of capital investment by groups, predominately those involved in ODOP products would be supported. New units, whether for individuals or groups would only be supported for ODOP products.
        
        Support for common infrastructure and marketing & branding would only be for ODOP products. In case of support for marketing & branding at State or regional level, same products of districts not having that product as ODOP could also be included.
        
        Programme Components:
        The programme has four broad components addressing the needs of the sector:
        
        Support to individual and groups of micro enterprises;
        Branding and Marketing support;
        Support for strengthening of institutions;
        Setting up robust project management framework.
         Support to Individual Micro Enterprises:
        Individual micro food processing units would be provided credit-linked capital subsidy @35% of the eligible project cost with a maximum ceiling of Rs.10.0 lakh per unit. Beneficiary contribution should be minimum of 10% of the project cost with balance being loan from Bank.
        
        Eligibility criteria for individual micro enterprises under the scheme:
        
        Existing micro food processing units in operations
        Existing units should be those identified in the SLUP for ODOP products or by the Resource Person on physical verification. In case of units using electrical power, electricity bill would support it being in operations. For others units, existing operations, inventory, machines and sales would form the basis
        The enterprise should be unincorporated and should employ less than 10 workers
        The enterprise should preferably be involved in the product identified in the ODOP of the district. Other micro enterprises could also be considered;
        The applicant should have ownership right of the enterprise;
        Ownership status of enterprise could be proprietary / partnership firm;
        The applicant should be above 18 years of age and should possess at least VIII standard pass educational qualification;
        Only one person from one family would be eligible for obtaining financial assistance. The “family” for this purpose would include self, spouse and children
        Willingness to formalize and contribute10% of project cost and obtain Bank loan
        Cost of the land should not be included in the Project cost. Cost of the ready built as well as long lease or rental work shed could be included in the project cost. Lease rental of workshed to be included in the project cost should be for a maximum period of 3 years only.
        
        </Typography>
      </div>
    )}
  </Card></div>
  )
}

export default Spices