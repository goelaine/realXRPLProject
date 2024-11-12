import React, { useState } from 'react';
import { Client, Wallet } from 'xrpl';
import SendXRP from './SendXRP';
import Flower from './Flower';  // Import the Flower component
import './BalanceDisplay.css'

const BalanceDisplay = () => {
    const [secret, setSecret] = useState('');
    const [balance, setBalance] = useState('');

    const handleSecretChange = (e) => {
        setSecret(e.target.value);
    };

    const fetchBalance = async () => {
        const client = new Client('wss://s.altnet.rippletest.net:51233');
        await client.connect();

        try {
            const userWallet = Wallet.fromSecret(secret);
            const accountInfo = await client.request({
                command: 'account_info',
                account: userWallet.classicAddress,
                ledger_index: 'validated'
            });
            setBalance(accountInfo.result.account_data.Balance);
        } catch (error) {
            console.error('Error fetching balance:', error);
            setBalance('Error fetching balance');
        } finally {
            await client.disconnect();
        }
    };

    return (
        <div className="balance-display">
            <h1>XRPL Wallet Balance</h1>
            <input
                type="password"
                placeholder="Enter secret key"
                value={secret}
                onChange={handleSecretChange}
            />
            <button onClick={fetchBalance}>Check Balance</button>
            <h2>Balance: {balance}</h2>
            <SendXRP fetchBalance={fetchBalance} senderSeed={secret} /> 
            <Flower balance={balance} />  {/* The flower component */}
        </div>
    );
};

export default BalanceDisplay;
