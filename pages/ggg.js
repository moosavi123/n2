import { Carousel } from 'antd';
import IMG from 'next/image';

const ggg = ( {ppp} ) => {
    return ( 
        <>
            <Carousel autoplay>
            {
              ppp.map((p, i) => (
                <div key={i} style={{textAlign:'center'}} >
                    <IMG src={p.media_details.sizes.medium_large.source_url} alt={p.slug} height={300} width={700} />
                    <br />
                    <a href={p.link}> {p.title.rendered} </a>
                </div>
            ))
            }
            </Carousel>
        </>
     );
}
 
export default ggg;

export const getStaticProps = async () => {
    const res = await fetch('http://meratkish.ir/wp-json/wp/v2/media');
    // const res = await ax('https://jsonplaceholder.typicode.com/users');
    const ppp = await res.json();
    return {
      props: { ppp }
    }
  }