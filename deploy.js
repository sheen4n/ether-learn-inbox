require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(process.env.MNEMONIC, process.env.ETHEREUM_INFURA_ENDPOINT);

const web3 = new Web3(provider);
const INITIAL_STRING = 'Hi there!';

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempt to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: [INITIAL_STRING],
    })
    .send({ from: accounts[0], gas: '1000000' });

  console.log('Contract deployed to', result.options.address);
};

deploy();
