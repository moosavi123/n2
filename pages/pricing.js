import React from 'react';

const pricing = ( {ppp} ) => {
    return ( 
        <>
            <h2>1ddfddfg</h2>
            <h2>2ddfddfg</h2>
            <h2>3ddfddfg</h2>
            <h1> { ppp.length } </h1>
        </>
     );
}
 
export default pricing;

export const getStaticProps = async () => {
    const res = await fetch('http://meratkish.ir/wp-json/wp/v2/posts');
    // const res = await ax('https://jsonplaceholder.typicode.com/users');
    const ppp = await res.json();
    return {
      props: { ppp }
    }
  }