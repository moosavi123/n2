import React from 'react';

const pricing = ( {ppp} ) => {
    return ( 
      <>
          {
          ppp.map((p, i)=>{
              return (
                  <img key={i} src={p.source_url} alt={p.slug} width='600' />
                  // <IMG key={i} src={p.source_url} alt={p.slug} layout='fill' />
              )
          })
          }
      </>
     );
}
 
export default pricing;

export const getStaticProps = async () => {
    const res = await fetch('http://meratyar.com/wp-json/wp/v2/media');
    // const res = await ax('https://jsonplaceholder.typicode.com/users');
    const ppp = await res.json();
    return {
      props: { ppp }
    }
}