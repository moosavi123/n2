import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ppp}) {
  // console.log(ppp);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h6>به مرات یار خوش آمدید</h6>
        <h5>به مرات یار خوش آمدید</h5>
        <h4>به مرات یار خوش آمدید</h4>
        <h3>به مرات یار خوش آمدید</h3>
        <h2>به مرات یار خوش آمدید</h2>
        <h1>به مرات یار خوش آمدید</h1>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <hr></hr>
        {
            // ppp.map((p, i)=>{return ( <i key={i}> {p.title.rendered} <br /> </i> )})
        }
      </main>

    </div>
  )
}


// export const getStaticProps = async () => {
//   const res = await fetch('http://meratkish.ir/wp-json/wp/v2/posts');
//   // const res = await ax('https://jsonplaceholder.typicode.com/users');
//   const ppp = await res.json();
//   return {
//     props: { ppp }
//   }
// }