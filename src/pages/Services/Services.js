import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo, 
  homeObjFive, homeObjSix, homeObjSeven, homeObjEight } from './Data';


function Services() {
  return (
    <>
   
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFive} />
      <InfoSection {...homeObjSix} />
      <InfoSection {...homeObjSeven} />
      <InfoSection {...homeObjEight} />
      
    </>
  );
}

export default Services;
