import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    Typography,
    
  } from "@material-tailwind/react";
const ItandT = () => {
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
      IT and Software Services
      </Typography>
      
    </CardHeader>
    {expanded && (
      <div className="p-6">
        <Typography variant="body1">
        <h1>
        Assistance Scheme for Travwls Artisans (ASHA)</h1>
         
        </Typography>
        <Typography variant="body2">
        Basic Process for Registering a Software Company
        Moving towards registering of a software company, the first thing you have to do is to get the name of your company approved with consent from ROC (Registrar Of Companies). Then you have to get CIN (Company Identification Number). After getting CIN, you have to submit all your legal documents as well as other legal forms. During this process, you have to mention all the necessary information about the company.
        
        Also, mention the shareholders, share capital, funds and all the relative information which you need to fill in the legal form. Once it is approved, you (the owner) can apply for the certificate of registration.
        </Typography>
        <Typography variant="body2">
        Legal Procedures Used To Start A Software Company
        To start a software company, the company should undergo pre-registration processes which are as follows:
        
        Direct Identification Numbers
        Reservation of Company Name
        Electronic Signatures
        While incorporating a software company, it has to identify its directors first. The number of directors should be between 2 and 8 inclusive, but not to be lesser or greater than that. The directors must have Director Identification Numbers (DIN). If they do not have DIN, they must apply for that. They have to submit their identity proof and residence proof to apply for this. The identity proof may be PAN card, Passport, DL or Voter ‘s ID and the address proof may be DL, Ration Card, EB bill, Passport or Telephone bill.
        
        After the DIN is obtained, the company has to apply for a name. There are about 5-6 names from which the company can choose one. If the preferred name is not available, then the company can choose a name by its own. After this, the company has to apply for incorporation. At this process, the company has to come up with a Memorandum of Association which includes company’s first director and its operations.
        
        This process has to be done online. While applying one has to submit this application along with the form 1A at the official website of the concerned department. Registration can also be done with the help of chartered accountants. After the company has been incorporated formally, the owner should open a current account in a well-known bank for carrying their operations. To open a current account the owners have to furnish copies of Memorandum of Association and Certificate of Incorporation.
        
        Get Digital Signature Certificate (DSC)
        To ensure the authenticity or security of documents filed electronically, the information act 2000 demands a valid digital signature on the necessary documents submitted electronically. This is the only safe method through which one can submit their essential documents electronically. The digital signature certificate must be obtained only through agencies which are appointed by CCA (Controller of Certification Agencies). One must not employ DSC provided by any other agency that is not approved and it is unlawful to use others DSC as yours or the counterfeit one.
        
        If you already have a digital signature then you can employ the same, no need to apply for another. But do not forget to check the validity of the digital signature, agencies provide DSC’s with 1 or 2-year validity after expiry you ought to renew it.
        
        Create An Account On MCA Portal: New User Registration
        This is about having a registered user account on MCA site for filling up an e-form, for online fee-payment, for various transactions as business and registered user. Generating an account is completely free of cost. In order to register yourself on MCA portal, click on the registered link.
        
        Steps To Be Followed While Setting Up A Software Company
        First, one has to give a brief description of the business like the type of product, field, target and the type of technology which you’re going to use. You have to mention everything related to that software like how it will be developed and supply to the market, etc.
        Then select the form of the company whether it is a sole proprietorship or private or partnership. The key factor that decides the form of the company is sizes of the firm, the range of risk, target market as well as budget. Plan according to your goal whether to go nation-wide or globally.
        Select the region and get updated about the business laws running in that perspective region.
        Register your software company under ROC. While registering it is necessary to file an application to the same office where the head office is situated.
        Choose the place where you want to set up your office. After getting the certificate from ROC, you shall start hiring employees.
        It is better to register in the state or region Department of Employment for legal hiring and offering jobs. Applying in one state may offer you to hire from anywhere in India. Without registration may cause problems in your hiring process.
        Register under STPI (Software Technology Parks India). This may help you to reach the complete legal benefits and other benefits like tax breaks, etc.
        </Typography>
      </div>
    )}
  </Card></div>
  )
}

export default ItandT