import React from 'react';

const foolad = ( {ppp} ) => {
    return ( 
      <>
          {
          ppp.map((p, i)=>{
              return (
                  <img key={i} src={p.source_url} alt={p.slug} />
                  // <IMG key={i} src={p.source_url} alt={p.slug} layout='fill' />
              )
          })
          }
      </>
     );
}
 
export default foolad;

export const getStaticProps = async () => {
    const res = await fetch('http://irsbf.ir/wp-json/wp/v2/media');
    // const res = await ax('https://jsonplaceholder.typicode.com/users');
    const ppp = await res.json();
    return {
      props: { ppp }
    }
}