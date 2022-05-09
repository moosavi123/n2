import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'swiper/css';
import Layout2 from '../components/Layout2';

function MyApp({ Component, pageProps }) {
  return (
    <Layout2>
      <Component {...pageProps} />
    </Layout2>
  );
}

export default MyApp
