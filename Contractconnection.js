import Web3 from "web3";
const web3 = new Web3('paste blockchain url ');
// Contract ABI
const ABI = []  // paste smart contract abi after deployment

const contractAddress = " ";  //paste contract address after deploye on remix
const contract = new web3.eth.Contract(ABI, contractAddress);

  // Function to Deploy and Call Contract
  const getAgefunction = async () => {
	try {
	  
	  const getage = await contract.methods.getter().call();
	  console.log("Contract getage:", getage);
	  
	} catch (error) {
	  console.error("Error calling contract:", error);
	}
  };
  


  const setAgefunction = async () => {
	try {
	//  const setagevalue = prompt("set the age in smart contract dynamically")

	  const setage = await contract.methods.setAge(2).send({
		from: '0xBEd7e70675bB5ba99F1496c8c16594Fb065FeD31',
	  });
	  console.log("Contract setage:", setage);
	} catch (error) {
	  console.error("Error calling contract:", error);
	}
  };
  setAgefunction();
getAgefunction();

