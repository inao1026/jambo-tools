const { ethers } = require('ethers');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

// 从.env文件中读取私钥、合约地址和ABI文件地址
const privateKey = process.env.PRIVATE_KEY;
const contractAddress = process.env.CONTRACT_ADDRESS;
const abiFilePath = process.env.ABI_FILE_PATH;

// 读取ABI文件
const abi = JSON.parse(fs.readFileSync(abiFilePath));

// 创建provider
const provider = new ethers.providers.JsonRpcProvider(process.env.WEB3_PROVIDER);

// 创建签名对象
const signer = new ethers.Wallet(privateKey, provider);

// 创建合约实例
const contract = new ethers.Contract(contractAddress, abi, signer);

module.exports = { provider, contract, signer };
