# Razor Wallet Kit Example

Welcome to the **Razor Wallet Kit Example**! This example demonstrates a React application built with Vite that integrates the Razor Wallet Kit to connect to the Movement Suzuka testnet.

## Overview

The Razor Wallet Kit Example provides a simple and intuitive way to connect and interact with the Movement Suzuka testnet using the Razor Wallet Kit components. It includes basic functionality for connecting a wallet, reading data from a smart contract, and submitting transactions.

## Getting Started

### Prerequisites

Before running the project, ensure you have [Node.js](https://nodejs.org/) and npm (or yarn) installed on your machine.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/MovementLabs/Razor_Wallet_Kit_Example.git
   cd Razor_Wallet_Kit_Example
   ```

2. **Install Dependencies**:
   Install the necessary packages using npm or yarn.
   ```bash
   npm install
   ```

3. **Run the Application**:
   Start the development server.
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

## Implementation Details

### Components

- [**main.tsx**](./src/main.tsx): This file includes the `AptosWalletProvider` components, setting up the context for wallet interactions.
[- **App.tsx**](./src/App.tsx): This file includes the `AptosConnectButton` component, allowing users to connect their wallets to the application.

### Custom Components

- [**MessageDisplay.tsx**](./src/components//MessageDisplay.tsx): This component uses the Aptos TypeScript SDK to read a message from a smart contract.
- [**MessageCreate.tsx**](./src/components/MesageCreate.tsx): This component utilizes the `useAptosWallet` hook to sign and submit a transaction.

### Styling

Custom CSS has been added to the [`App.css`](./src/App.css) file in the `src` directory to match the styling of the buttons to the default styling of the Vite app.

## Workshop Reference

The module used in this implementation is based on a Move 0-1 workshop, which provides an in-depth tutorial on getting started with Move and the Aptos ecosystem. You can view the workshop here: [Move 0-1 Workshop](https://www.youtube.com/watch?v=gXPOvOjr9lM).


---

Thank you for checking out the Razor Wallet Kit Example! We hope this example helps you get started with building on the Movement Suzuka testnet. Happy coding!