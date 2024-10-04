import React, { ChangeEvent, FormEvent, useState } from 'react';
import { MINT_FUNCTION } from '../../constants';
import { useAptosWallet } from '@razorlabs/wallet-kit';
import "../App.css"

interface MintingProps {
  setMessage: (message: string) => void;
}

const Minting: React.FC<MintingProps> = ({ setMessage }) => {
  const [quantity, setQuantity] = useState<string>('2');
  const { signAndSubmitTransaction } = useAptosWallet();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value || '2');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const result = await signAndSubmitTransaction({
        payload: {
          function: MINT_FUNCTION.toString(),
          functionArguments: [quantity.toString()],
          typeArguments: []
        }
      });
      setMessage("Minting...");
      if (result.status === "Approved") {
        setMessage(`Minted ${quantity} token(s)`);
        alert(`Transaction: https://explorer.movementlabs.xyz/txn/${result.args.hash}?network=testnet`);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="message-create-container">
      <form onSubmit={handleSubmit} className="message-form">
        <label htmlFor="quantityInput" className="message-label">Quantity to Mint:</label>
        <input
          type="string"
          id="quantityInput"
          value={quantity}
          onChange={handleChange}
          required
          className="message-input"
        />
        <button type="submit" className="submit-button">Mint</button>
      </form>
    </div>
  );
};

export default Minting;