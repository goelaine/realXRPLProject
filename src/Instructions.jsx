import React from 'react';
import './Instructions.css'; 

function Instructions() {
  return (
    <section className="instructions">
      <h2>Getting Started with Your XRP Wallet</h2>
      <p>Welcome to your XRP Wallet! This interface allows you to manage your XRP holdings, view your balance, and perform transactions. Please follow the steps below to get started:</p>
      <ul>
        <li><strong>Step 1:</strong> <em>Create or Import Wallet</em> If you don't have an XRP wallet yet, create a new one by clicking 'generate wallet'. Make sure to copy this information down, 
        as your Secret will disappear in 30 seconds. If you already have a wallet, you can import it by entering your secret key to check your wallet balance.</li>
        <li><strong>Step 2:</strong> <em>View Your Balance</em> After logging into your wallet, your XRP balance will be displayed below. </li>
        <li><strong>Step 3:</strong> <em>Send XRP</em> To send XRP, enter the recipient's address, specify the amount, and press 'send XRP'! This will automatically deduct your wallet balance.</li>
        <li><strong>Step 4:</strong> <em>Receive XRP</em> To receive XRP, beg someone to send you some and provide them with your wallet address. Then, click 'check balance' to reveal the good news.</li>
      </ul>
    </section>
  );
}

export default Instructions;
