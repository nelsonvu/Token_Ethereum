const HDWalletProvider = require('truffle-hdwallet-provider');   
require("dotenv").config();

module.exports = {
  networks: {
		development: {
			host: "127.0.0.1",
			port: 7545,
			network_id: "*",
		},
		ropsten: {
			provider: () => new HDWalletProvider(process.env.TEST_MNEMONIC, 
        `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`,
        0,
        5
      ),
			host: "127.0.0.1",
      port:  8545,
      network_id: 3,
			gas: 5500000,
      gasPrice: 20000000000,
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, 
      from: process.env.ADDRESS_OWNER
		},
	},
  compilers: {
    solc: {
      version: '0.5.16',
      settings: {
        optimizer: {
          enabled: true,
          runs: 1000
        },
        // evmVersion: 'istanbul'
      }
    }
  },
   
  // development: {
  //  host: "127.0.0.1",     // Localhost (default: none)
  //  port: 8545,            // Standard Ethereum port (default: none)
  //  network_id: "*",       // Any network (default: none)
  // },

  // advanced: {
  // port: 8777,             // Custom port
  // network_id: 1342,       // Custom network
  // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
  // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
  // from: <address>,        // Account to send txs from (default: accounts[0])
  // websocket: true        // Enable EventEmitter interface for web3 (default: false)
  // },

  // private: {
  // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
  // network_id: 2111,   // This network is yours, in the cloud.
  // production: true    // Treats this network as if it was a public net. (default: false)
  // }

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },


  // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
  // }
};
