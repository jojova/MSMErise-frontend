import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    Typography,
    
  } from "@material-tailwind/react";
const Health = () => {
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
      Healthcare and Ayurveda
      </Typography>
      
    </CardHeader>
    {expanded && (
      <div className="p-6">
        <Typography variant="body1">
        <h1>
        Assistance Scheme for Travwls Artisans (ASHA)</h1>
         
        </Typography>
        <Typography variant="body2">
        What Do Ayurveda And Kerala Have In Store For Medical Tourism?
        Medical tourism in India is booming, the main reasons being cost effectiveness, high quality of treatment, lack of language barrier, no or less waiting time, and specialized treatment options. However, if you look at the scenario a bit closer, you will see that Kerala, an Indian state with ayurvedic packages, has enormous potential in medical tourism.
        
        Ayurveda, the ancient natural system of medicine, isn’t just about great body structure but also about healing. As listed in Vedic books, the herbs, and oils used for ayurvedic treatments are of immense medicinal value. After all, Ayurveda belongs to the Vedic period and was primarily a treatment mode to conserve the well-being of people and cure diseases through remedial methods like massage, yoga, meditation, diet, and workouts.
        
        Whether you are suffering from body pain or have a severe health issue if you are contemplating your medical travel to Kerala for ayurvedic treatment, here is a blog to help you with everything you should know.
        
        Ayurveda: A Deeper Look
        Ayurveda is a centuries-old tradition that is fast adding Kerala to the global medical tourism map, attracting both vacationers as well as global celebrities who wish to rejuvenate and heal their bodies. Yes, people have been dubious about Ayurveda’s healing capabilities. However, when Naomi Campbell, the British supermodel, landed in Kerala last year, it was an affirmation of the efficacy of this powerful healing system.
        
        Perhaps, the most popular objective of ayurvedic healing is the removal of toxins from the body so it can be more immune to diseases. However, the best part is that Ayurveda rejuvenates not just your body but also your mind and soul.
        
        While there exist several ayurvedic hospitals across India, Ayurveda is practiced in its authentic and most traditional form in Kerala. Additionally, the state’s perfect weather conditions all throughout the year, top-notch hospitals with outstanding amenities, and dedicated doctors make it an excellent option for medical tourism. There are nearly 924 ayurvedic health tourism centers across the 14 districts of Kerala, offering numerous healing techniques.
        
        Potential Benefits Of Ayurveda & Common Treatments
        From anxiety to asthma, arthritis to digestive problems, and eczema to diabetes, Ayurveda has been found to cure almost all health problems. Some popular ayurvedic treatments include Abhyangam, Njavarakkizhi, and Dhara.
        
        Typically, Abhyangam involves massaging your entire body using ayurvedic oils to improve blood circulation and thereby reduce stress. On the other hand, Njavarakkizhi is a body polishing therapy that will revitalize your skin complexion. Dhara also involves ayurvedic oils, but the oils are made to sit on your head to improve memory, sleep quality, and relieve stress.
        
        With Ayurveda’s growing popularity, many private players have entered the scene. In most health centers, Ayurveda is practiced in the most traditional form, and unlike the common misconception, they don’t act as massage parlors. Instead, these centers are genuine healthcare providers that practice wellness and recreation as a part of their service. However, some of the best ayurvedic healthcare centers include Vaidyaratnam, Kottakkal, Pankajakasthuri, Kairali, and Shanthigiri.
        
        The Best Time For Ayurvedic Treatment In Kerala
        While the festivities never cease in Kerala, Keralites take a respite in the month of June, when the season switches from summer to monsoon, which lasts for nearly two months. This is also when the Malayalam month of Karkidakam falls—a time that is deemed to be the perfect period to indulge in rejuvenation therapies that fall under the big umbrella of Ayurveda.
        
        In fact, it is written in the Vedic scriptures that Karkidakam is ideal for ayurvedic treatments because the season is accompanied by a lack of dust and humidity in the atmosphere. One treatment that is of particular importance here is Panchakarma—an ayurvedic therapy performed to remove toxins from the body.
        
        Often, the stressful lifestyle that people live every day results in the accumulation of toxins in the body that causes health issues. Panchakarma flushes out these toxins and restores vitality.
        
        Ayurveda is also beneficial for skin-related issues. It suggests several treatments involving herbal blends that can help your skin break free from the everyday chemical applied to the skin. Furthermore, beauty in the ayurvedic sense goes beyond just your skin and external factors. It suggests that beauty results from improper lifestyle and harmful food habits than the summer sun. Thus, be prepared to follow a healthy vegetarian diet devoid of impurities while undergoing any ayurvedic treatment. And in the month of Karkkidakam, you might also be fed Karkkidaka kanji, an ayurvedic gruel made of rice and a combination of herbs and spices.
        
        Fly To Kerala With Bluedot Medical Assistance
        Ayurvedic treatments in Kerala offer therapeutic and rejuvenating treatments for various health issues, including skin care, weight loss, diabetes, back problems, and much more. It has also been proven ideal for curing and managing various chronic illnesses, such as paralysis, arthritis, neurological ailments, etc. The geographical position and the climate make Kerala an ideal place to undergo relaxing treatment that uses a wide array of herbs and plants.
        
        So, if you have been considering ayurvedic treatment in Kerala for a long, now is the time to plan your trip. However, you don’t have to do it alone.
        
        At Bluedot Assistance, we have been helping people travel to popular medical tourism destinations like India, Thailand, Singapore, and UAE for affordable and quality healthcare. Reach out to us, and let us help you plan your journey and beyond.
        </Typography>
      </div>
    )}
  </Card></div>
  )
}

export default Health