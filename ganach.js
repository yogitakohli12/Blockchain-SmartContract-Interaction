
import Web3 from 'web3';
const web3 = new Web3('paste ganach url');    //local ethereum 
// console.log(web3);
async function getaccouns(){
  const accounts=await web3.eth.getAccounts()
  console.log(accounts[1])
}
getaccouns()
// Private key exported from MetaMask
const privateKey = 'paste private key of importing account'; // Ensure this starts with '0x'
// Import the account
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

(async () => {
  try {
    console.log("Derived Address:", account.address);

    // Fetch the balance
    const balanceWei = await web3.eth.getBalance(account.address);

    // Log balance in wei and Ether
    console.log("account created by private key AccountBalance in Wei:", balanceWei);
    console.log("account created by private key AccountBalance in Ether:", web3.utils.fromWei(balanceWei, 'ether'));

  } catch (error) {
    console.error("Error:", error.message);
  }
})();

async function getAccountBalance() {
    try {
        const accounts = await web3.eth.getAccounts();  // 🔹 Get all available accounts (for local nodes)
        console.log("accounts:",accounts)      //it is not working here becuase infura does not manage accounts
        const myAddress = "";        // 🔹 Replace with your MetaMask address
        const balanceWei = await web3.eth.getBalance(myAddress);  // 🔹 Fetch balance in Wei
        const balanceEth = web3.utils.fromWei(balanceWei, "ether");  // 🔹 Convert to ETH
        console.log(`💰 Balance of a specific Account: ${balanceEth} ETH`);
    } catch (error) {
        console.error("❌ Error Fetching Balance:", error);
    }
}
getAccountBalance();

// Replace with accounts provided by Ganache
const senderAddress = '';
const receiverAddress = '';

// // Private key of the sender account (from Ganache)
const senderPrivateKey = '';

const createBlock = async () => {
  try {
    // Create a transaction
    const tx = {
      from: senderAddress,
      to: receiverAddress,
      value: web3.utils.toWei('1', 'ether'),
      gas: 21000,
      gasPrice: 20000000000, // Set the gas price
    };

    // Sign the transaction
    const signedTx = await web3.eth.accounts.signTransaction(tx, senderPrivateKey);

    // Send the transaction
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    console.log('Transaction Hash:', receipt.transactionHash);
    console.log('New block created with transaction.');

    // Fetch the latest block
    const latestBlock = await web3.eth.getBlock('latest');
    console.log('Latest Block Details:', latestBlock);
  } catch (error) {
    console.error('Error creating block:', error.message);
  }
};

// Call the function
createBlock();

const getGasPrice = async () => {
  try {
    // Fetch the current gas price
    const gasPrice = await web3.eth.getGasPrice();

    // Convert gas price to Ether for readability
    const gasPriceInEther = web3.utils.fromWei(gasPrice, 'ether');

    console.log(`Gas Price: ${gasPrice} Wei`);
    console.log(`Gas Price in Ether: ${gasPriceInEther} ETH`);
  } catch (error) {
    console.error('Error fetching gas price:', error.message);
  }
};

// Call the function
getGasPrice();

