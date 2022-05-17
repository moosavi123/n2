import React from 'react';
import IMG from 'next/image';

const pricing = ( {ppp} ) => {
    return ( 
      <>
          {
          ppp.map((p, i)=>{
              return (
                //   <img key={i} src={p.source_url} alt={p.slug} width='600' />
                  <IMG key={i} src={p.source_url} alt={p.slug} height={500} width={1100} />
              )
          })
          }
      </>
     );
}
 
export default pricing;

export const getStaticProps = async () => {
    const res = await fetch('https://meratyar.com/wp-json/wp/v2/media');
    // const res = await ax('https://jsonplaceholder.typicode.com/users');
    const ppp = await res.json();
    return {
      props: { ppp }
    }
}