import logo from './logo.svg';
import './App.css';

function App() {
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
          data.map((record) => {
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
