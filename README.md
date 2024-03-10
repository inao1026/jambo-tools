# Jambo Tools

## Description

Jambo Tools is a Web3 Utility Gadget designed to simplify interactions with blockchain networks.

## Installation

Install Jambo Tools using npm:

```bash
npm install jambo-tools

const jamboTools = require('jambo-tools');

const getBalance = async () => {
    try {
        const balance = await contract.balanceOf();
        console.log("balance : ", balance)
    } catch (error) {
        console.error("Error fetching contract's balance:", error);
    }
}
