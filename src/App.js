import logo from './logo.svg';
import './App.css';
import BalanceDisplay from './BalanceDisplay';
import SendXRP from './SendXRP';
import Instructions from './Instructions';
import NewWallet from './NewWallet'

function App() {
  return (
    <div className="App">
      <Instructions></Instructions>
      <NewWallet></NewWallet>
      <BalanceDisplay></BalanceDisplay>
    </div>
  );
}

export default App;
