import Web3 from 'web3';
const web3 = new Web3('infura test network url');
const getaccount = web3.eth.accounts.privateKeyToAccount("paster here your private key");
console.log("sepolia ethereum of metamsk",getaccount.address)
async function getBalance(){
  const balance = await web3.eth.getBalance(getaccount.address)
  const etherbalance = await web3.utils.fromWei(balance,'ether')
  console.log("balance of sepolia ethereum in wei: ",balance)
  console.log("balance of sepolia ethereum in eth: ",etherbalance)
}
getBalance();

// Function to fetch the latest block
const getLatestBlock = async () => {
  try {
    const latestBlock = await web3.eth.getBlock('latest'); // Fetch latest block
    console.log("Latest Block Details:", latestBlock);
  } catch (error) {
    console.error("Error fetching latest block:", error.message);
  }
};
getLatestBlock();


