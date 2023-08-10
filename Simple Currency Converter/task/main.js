const usdToOthers = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GPB: 0.75,
    fromString(name) {
        switch (name) {
            case "USD":
                return this.USD;
            case "JPY":
                return this.JPY;
            case "EUR":
                return this.EUR;
            case "RUB":
                return this.RUB;
            case "GBP":
                return this.GPB;
            default:
                return 0;
        }
    }
};

console.log("Welcome to Currency Converter!");
console.log(`1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

const input = require('sync-input');

while (true) {
    console.log(`What do you want to do?
1-Convert currencies 2-Exit program`);
    const choice = input();

    if (!choice.match("[12]")) {
        console.log("Unknown input");
        continue;
    } else if (choice === "2") {
        console.log("Have a nice day!");
        process.exit();
    }

    let from = "";

    while (true) {
        console.log("What do you want to convert?");
        from = input("From: ").toUpperCase();

        if (usdToOthers.fromString(from) === 0) {
            console.log("Unknown currency");
            continue;
        }

        break;
    }

    let to = "";

    while (true) {
        to = input("To: ").toUpperCase();

        if (usdToOthers.fromString(to) === 0) {
            console.log("Unknown currency");
            continue;
        }

        break;
    }

    let amount = "";

    while (true) {
        amount = input(`Amount: `);

        if (amount < 1) {
            console.log("The amount cannot be less than 1");
            continue;
        } else if (!amount.match("\\d+")) {
            console.log("The amount has to be a number");
            continue;
        }

        break;
    }

    const usdEquivalent = amount / usdToOthers.fromString(from);
    const convertedAmount = (usdToOthers.fromString(to) * usdEquivalent).toFixed(4);

    console.log(`Result: ${amount} ${from} equals ${convertedAmount} ${to}`);
}