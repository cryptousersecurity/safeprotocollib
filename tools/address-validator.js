const ethers = require('ethers');
const fs = require('fs');
const path = require('path');

function validateAddress(address) {
  try {
    return ethers.utils.getAddress(address) === address;
  } catch (e) {
    return false;
  }
}

function validateProtocolFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const protocol = JSON.parse(content);

  let isValid = true;

  for (const network in protocol.contracts) {
    for (const contractType in protocol.contracts[network]) {
      const address = protocol.contracts[network][contractType];
      if (!validateAddress(address)) {
        console.error(`Invalid address for ${protocol.name} - ${network} - ${contractType}: ${address}`);
        isValid = false;
      }
    }
  }

  return isValid;
}

function validateAllProtocols(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  let allValid = true;

  for (const file of files) {
    if (path.extname(file) === '.json') {
      const filePath = path.join(directoryPath, file);
      if (!validateProtocolFile(filePath)) {
        allValid = false;
      }
    }
  }

  return allValid;
}

// Usage example
const protocolsDir = './protocols';
if (validateAllProtocols(protocolsDir)) {
  console.log('All protocol addresses are valid.');
} else {
  console.error('Some protocol addresses are invalid. Please check the errors above.');
  process.exit(1);
}