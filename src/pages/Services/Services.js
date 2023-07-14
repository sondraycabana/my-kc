import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';


function Services() {
  return (
    <>
   
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Services;
