import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne } from './Data';

function Products() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjTwo} /> */}
    </>
  );
}

export default Products;
