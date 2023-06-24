import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    Typography,
    
  } from "@material-tailwind/react";
const Travel = () => {
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
        Travels and Artisans
      </Typography>
      
    </CardHeader>
    {expanded && (
      <div className="p-6">
        <Typography variant="body1">
        Procedure
        Apply In-Person:
        To register as a Tourist Operator, applicant has to visit the Kerala Tourism Development Corporation.
        For Kerala Tourism Development Corporation Office contact click here: Contact Info
        Applicant has to visit the Kerala Tourism Development Corporation and obtain the application form from the respective officer.
        Now complete the form with necessary information and make sure you have all the documents in hand that are listed under the “Required Documents” section of this page.
        After filling the form, attach the documents mentioned in the required documents section below with the completed application form.
        Check the application form and then submit it to the Deputy Director (Marketing) in Kerala Tourism Development Corporation office address mentioned in the office locations & contacts section below.
        Now the authorities will verify your application and validate the submitted documents.
        KTDC authorities will inspect the facilities that are related to the touring company and if they are satisfied with the standards followed the authorities will provide a franchise permission.
        The applicant will be later requested to collect the Tour Operator License on a specified date.
         
        </Typography>
        <Typography variant="body2">
        
        
        Apply Online - Kerala Register as Tour Operator Or Travel Agent License Online with Images
        To register as a tourist operator through online, visit the following link Register
        First “Sign in” to create an account.
        After successfully Sign in, click on “submit a new application” options which is available at the right side of the home screen.
        Now fill the application form with mandatory details and Click on the “save” button.
        In the next page you fill the Demand Draft details, then click “Save” button. Now enter the financial performance mandatory details and click on “save” button.
        In the next page you download the undertaking form then “choose file” for all required scanned document and click on “Upload” to upload the documents.
        In the next page you can “choose file” for all required photographs and click on “Upload” button. Next page you fill the required details and click on “save” button.
        You will redirected to a next screen in which you can review your all information. After reviewing your all information, tap on the “save” option at the bottom of the screen.
        You will get pop-up message as “Successfully uploaded the application for admin verification” at the middle of the screen.
        
        
        Apply through Centres:
        
        To apply through centres, the applicant has to visit the respective “CSC” centre. Please tap on the following link to locate the centre according to the respective district: link.
        Make sure to have the documents that are listed under the “Required Documents” section of this page.
        It is advised to take the documents in original to the kiosk for scanning purposes.
        The operator will process the application online.
        On successful submission, the applicant will receive an application number as acknowledgement.
        The status, viz. Approval or Rejection if any, will be conveyed to the applicant through an SMS.
        If verified, the registration certificate will be hand delivered or sent through post to the address mentioned while applying in a stipulated period of time.
        
        
        Required Documents
        Copy of the firm registration certificate or trade license.
        PAN card.
        Proof of bank account in the name of firm.
        Registered copy of the professional tax with commercial department.
        GST
        Service tax number
        Aadhaar card.
        Office Locations & Contacts
        Kerala Tourism Development Corporation:
        Department of Tourism,
        Park View, Thiruvananthapuram,
        Kerala, India - 695033
        Phone: +91-471-2321132/ +91-471-2322279
        Email: info@keralatourism.org
        </Typography>
        
      </div>
    )}
  </Card></div>
  )
}

export default Travel