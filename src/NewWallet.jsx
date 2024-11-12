import React, { useState } from 'react';
import * as xrpl from 'xrpl'; // Import the xrpl library to generate the wallet
// import './GenerateWallet.css'; // Optional: Add styling

const GenerateWallet = () => {
  const [wallet, setWallet] = useState(null);
  const [faucetStatus, setFaucetStatus] = useState(null);

  // Function to generate a new XRP wallet
  const generateWallet = () => {
    const newWallet = xrpl.Wallet.generate(); // Generate a new wallet using xrpl
    setWallet(newWallet); // Store the wallet in state
    requestFaucet(newWallet); // Request XRP from the faucet after generating the wallet
  };

  // Function to request XRP from the Testnet faucet
  const requestFaucet = async (wallet) => {
    const faucetUrl = 'https://faucet.altnet.rippletest.net/accounts';
    const response = await fetch(faucetUrl, {
      method: 'POST',
      body: JSON.stringify({ destination: wallet.classicAddress }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      setFaucetStatus({ success: true, message: 'Faucet request successful! Funds will arrive shortly.' });
    } else {
      setFaucetStatus({ success: false, message: 'Failed to request funds from the faucet.' });
    }
  };

  return (
    <div className="generate-wallet">
      <h2>Generate New XRP Wallet</h2>
      <button onClick={generateWallet}>Generate Wallet</button>

      {wallet && (
        <div className="wallet-info">
          <h3>Wallet Credentials</h3>
          <p><strong>Address:</strong> {wallet.classicAddress}</p>
          <p><strong>Secret:</strong> {wallet.seed}</p>
        </div>
      )}

      {faucetStatus && (
        <div className={`faucet-status ${faucetStatus.success ? 'success' : 'error'}`}>
          <p>{faucetStatus.message}</p>
        </div>
      )}
    </div>
  );
};

export default GenerateWallet;
