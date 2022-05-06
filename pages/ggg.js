
const ggg = ( {ppp} ) => {
    return ( 
        <div>
            <h1>1kjhjkhhfsf</h1>
            <h1>2kjhjkhhfsf</h1>
            <h1>3kjhjkhhfsf</h1>
            <h1>kjhjkhhfsf</h1>
            <h1>kjhjkhhfsf</h1>
            <h1>kjhjkhhfsf</h1>
            {
                ppp.map((p, i)=>{return ( <i key={i}> {p.id} <br /> </i> )})
            }
        </div>
     );
}
 
export default ggg;

export const getServerSideProps = async () => {
    const res = await fetch('http://meratkish.ir/wp-json/wp/v2/posts');
    // const res = await ax('https://jsonplaceholder.typicode.com/users');
    const ppp = await res.json();
    return {
      props: { ppp }
    }
  }