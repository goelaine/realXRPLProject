import React, { useState } from 'react';
import { Client, Wallet, xrpToDrops } from 'xrpl';

const SendXRP = ({ fetchBalance, senderSeed }) => {
    const [recipientAddress, setRecipientAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleRecipientChange = (e) => {
        setRecipientAddress(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const sendXRP = async () => {
        const client = new Client('wss://s.altnet.rippletest.net:51233');
        await client.connect();

        try {
            const wallet = Wallet.fromSecret(senderSeed);
            const prepared = await client.autofill({
                TransactionType: 'Payment',
                Account: wallet.classicAddress,
                Amount: xrpToDrops(amount), // Convert amount to drops
                Destination: recipientAddress
            });
            // Sign the transaction using the wallet
            const signed = wallet.sign(prepared);

            // Submit the signed transaction blob
            const { tx_blob, hash } = await client.submitAndWait(signed.tx_blob);
            setMessage(`Success! Hash: ${hash}`);
            fetchBalance(); // fetches balance display after sending XRP
        } catch (error) {
            console.log('Error sending XRP:', error);
            setMessage(`Error sending XRP: ${error.message}`); // Display more detailed error message
        } finally {
            await client.disconnect();
        }
    };

    return (
        <div>
            <h1>Send XRP</h1>
            <input
                type="text"
                placeholder="Recipient XRPL Address"
                value={recipientAddress}
                onChange={handleRecipientChange}
            />
            <input
                type="text"
                placeholder="Amount of XRP to send"
                value={amount}
                onChange={handleAmountChange}
            />
            <button onClick={sendXRP}>Send XRP</button>
            <p>{message}</p>
        </div>
    );
};

export default SendXRP;