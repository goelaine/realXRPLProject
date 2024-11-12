import React, { useState, useEffect } from 'react';
import * as xrpl from 'xrpl'; // Import the xrpl library to generate the wallet
// import './GenerateWallet.css'; // Optional: Add styling

const GenerateWallet = () => {
  const [wallet, setWallet] = useState(null);
  const [faucetStatus, setFaucetStatus] = useState(null);
  const [countdown, setCountdown] = useState(0); // State for countdown timer
  const [message, setMessage] = useState('');  // State to store faucet status message

  // Function to generate a new XRP wallet
  const generateWallet = () => {
    const newWallet = xrpl.Wallet.generate(); // Generate a new wallet using xrpl
    setWallet(newWallet); // Store the wallet in state
    setCountdown(30); // Set countdown for 30 seconds after wallet is generated
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

  useEffect(() => {
    // If countdown is greater than 0, start the timer
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1); // Decrement countdown
      }, 1000); // Decrease countdown by 1 second every 1000ms (1 second)

      // Clean up the interval when countdown reaches 0
      return () => clearInterval(timer);
    } else if (countdown === 0) {
      setWallet((prevWallet) => ({ ...prevWallet, seed: '*****' })); // Clear wallet secret after countdown
    }
  }, [countdown]); // Run the effect when countdown state changes

  return (
    <div className="generate-wallet">
      <h2>Generate New XRP Wallet</h2>
      <button onClick={generateWallet}>Generate Wallet</button>

      {wallet && (
        <div className="wallet-info">
          <h3>Wallet Credentials</h3>
          <p><strong>Address:</strong> {wallet.classicAddress}</p>
          <p>
            <strong>Secret:</strong> 
            {countdown > 0 ? (
              <>
                {wallet.seed} <span>({countdown}s)</span> {/* Show countdown next to the secret */}
              </>
            ) : (
              '*****' // Replace seed with asterisks after countdown reaches 0
            )}
          </p>
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
