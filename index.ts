#! /usr/bin/env node


import inquirer from "inquirer"

const currency : any = {
    USD: 1, // Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
}

let user_answer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter From Currency",
            type : "list",
            choices: ["USD","EUR", "GBP", "INR", "PKR"]
        },
        {
            name: "to",
            message: "Enter TO Currency",
            type : "list",
            choices: ["USD","EUR", "GBP", "INR", "PKR"]
        },
        {
            name: "amount",
            message: "Enter Your Amount",
            type : "number",
        }
    ]
)
let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let Baseamount = amount/fromAmount
let convertedAmount = Baseamount * toAmount
console.log(Math.round(convertedAmount));















