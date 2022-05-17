import React from 'react';
import { Carousel } from 'antd';
import IMG from 'next/image';

const foolad = ( {ppp} ) => {
    return ( 
      <>
            <Carousel autoplay>
            {
              ppp.map((p, i) => (
                <div key={i}>
                    <IMG src={p.source_url} alt={p.slug} height={500} width={1100} />
                </div>
            ))
            }
            </Carousel>
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