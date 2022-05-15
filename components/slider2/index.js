import React from 'react';

const HeSl = ({pp}) => {
    pp.kkk;
    
    
    return ( 3 );
}
 
export default HeSl;

export const getStaticProps = async () => {
    const res = await fetch('http://meratkish.ir/wp-json/wp/v2/media');
    const pp = await res.json();
    return {
      props: { pp }
    }
}