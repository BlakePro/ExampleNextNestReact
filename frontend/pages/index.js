import Configuration from '../config.json';
import Layout from '../components/Layout';
import TableCrud from '../components/Table';

Home.getInitialProps = async (context) => {
  let res = await fetch(Configuration.ProductEndpoint, {method: 'GET'});
  let data = await res.json();
  return { products: data.product };
}

export default function Home(data) {
  return (
    <div>
      <Layout title="Store"/>
      <TableCrud {...data}/>
    </div>
  );
}
