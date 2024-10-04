import React, { ChangeEvent, FormEvent, useState } from 'react';
import { MINT_FUNCTION } from '../constants';
import { useAptosWallet } from '@razorlabs/wallet-kit';

interface MintingProps {
  setMessage: (message: string) => void;
}

const Minting: React.FC<MintingProps> = ({ setMessage }) => {
  const [quantity, setQuantity] = useState<string>('2');
  const { signAndSubmitTransaction } = useAptosWallet();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value || '1');
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
    <div style={styles.container}>
      <h1 style={styles.title}>Move Developer Vietnam Demo</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="quantityInput" style={styles.label}>Quantity to Mint:</label>
        <input
          type="string"
          id="quantityInput"
          value={quantity}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Mint</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    width: '100%',
    maxWidth: '300px',
  },
  label: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '1rem',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Minting;