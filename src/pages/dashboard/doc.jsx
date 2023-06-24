import React, { useState } from "react";

import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import Handicraft from "./guide/handicraft";
import Travel from "./guide/Travel";
import Spices from "./guide/Spices";
import Agro from "./guide/Agro";
import Coir from "./guide/Coir";
import Fisheries from "./guide/Fisheries and Seafood Processing";
import Health from "./guide/Health";
import Rubber from "./guide/Rubber";
import ItandT from "./guide/IT and Software Services";

function Doc() {
  

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Handicraft/>
      <Travel/>
      <Spices/>
      <Agro/>
      <Coir/>
      <Fisheries/>
      <Health/>
      <Rubber/>
      <ItandT/>
      
    </div>

  );
}

export default Doc;
