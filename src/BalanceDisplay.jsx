// Address
// rEQ5EjkbtnCZqpAjig6oshmPuRk8uH8Qas
// Secret
// sEdS2zTGTUX5NPGKPpUiiEWUr6UbK9B
// Balance
// 100 XRP
// Sequence Number
// 2228105

// Address
// rEm6YRsvQmXcFZD2s8VsmsWTtr3719fqBF
// Secret
// sEdS4HHrvTdRhESBP2qhMCBcN6AGoDG
// Balance
// 100 XRP
// Sequence Number
// 2228125

import React, { useState } from 'react'; //useState stores client side states
import { Client, Wallet } from 'xrpl';

const BalanceDisplay = () => {
    // track state of these 3 things
    const [userWalletAddress, setWalletAddress] = useState('');
    const [secret, setSecret] = useState('');
    const [balance, setBalance] = useState('');

    const handleAddressChange = (e) => {
        setWalletAddress(e.target.value);
    };

    const handleSecretChange = (e) => {
        setSecret(e.target.value);
    };

    const fetchBalance = async () => {
        // connect to testnet
        const client = new Client('wss://s.altnet.rippletest.net:51233');
        await client.connect();

        try {
            // access wallet using secret
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
        <div>
            <h1>XRPL Wallet Balance</h1>
            <input
                type="text"
                placeholder="Enter wallet address"
                value={userWalletAddress}
                onChange={handleAddressChange}
            />
            <input
                type="password"
                placeholder="Enter secret key"
                value={secret}
                onChange={handleSecretChange}
            />
            <button onClick={fetchBalance}>Check Balance</button>
            <h2>Balance: {balance}</h2>
        </div>
    );
};

export default BalanceDisplay;