import { Table } from "react-bootstrap";
import axios from "axios";
import { useQuery } from "react-query";

import logo from './logo.svg';
import './App.css';

function App() {
  const { isLoading, error, data } = useQuery("posts", () =>
    axios("https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/tokens/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2/transactions/?quote-currency=USD&format=JSON&page-size=5&key=ckey_dd79741ebac5474fa3c08b53f0c")
  );

  if (isLoading) {
    <main>
      <h2>data loading</h2>
    </main>
  }

  console.log(data)

  return (
    <main>
      <Table responsive bordered hover className="rounded">
        <thead className="bg-primary text-white">
          <tr>
            <th>Act</th>
            <th scope="col" className="w-25">Address</th>
            <th>To Address</th>
            <th>Sender Address</th>
            <th>Quote Currency</th>
            <th>Total Quote</th>
          </tr>
        </thead>
        {
          data.data.items.map((record) => {
            return <tbody>
              <tr>
                <td>{record.act}</td>
                <td>{record.address}</td>
                <td>{record.to_address}</td>
                <td>{record.sender_address}</td>
                <td>{record.quote_currency}</td>
                <td>{record.total_quote}</td>
              </tr>
            </tbody>
          })
        }
      </Table>
    </main>
  );
}

export default App;
