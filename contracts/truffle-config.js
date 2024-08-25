const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    // Configure other networks as needed (e.g., testnet, mainnet)
  },
  compilers: {
    solc: {
      version: "0.8.19",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    }
  },
  contracts_directory: './contracts',
  contracts_build_directory: './build/contracts',
  migrations_directory: './migrations',
  test_directory: './test',
  contracts_directory: './contracts',
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    // Add your API keys for verification if needed
    // etherscan: process.env.ETHERSCAN_API_KEY
  },
  // Configure Mocha if you're using it for testing
  mocha: {
    timeout: 100000
  },
  // Custom configuration for your project structure
  custom_contracts_directory: {
    interfaces: './contracts/interfaces',
    tokens: './contracts/tokens',
    incentives: './contracts/incentives',
    escrow: './contracts/escrow',
    verification: './contracts/verification',
    governance: './contracts/governance',
    utils: './contracts/utils'
  }
};