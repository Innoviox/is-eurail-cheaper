export function increaseDate(date: Date, weeks: number, hour: number) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + weeks * 7);
    newDate.setHours(hour);
    newDate.setMinutes(0);
    newDate.setSeconds(0);
    return newDate.getTime();
}

export const currencies = ["$ (USD)", "€ (EUR)", "£ (GBP)", "¥ (JPY)", "₩ (KRW)", "₹ (INR)", "฿ (THB)"];
export const exchangeRates = new Map(Object.entries({ // from USD
    "(USD)": 1,
    "(EUR)": 0.94,
    "(GBP)": 0.82,
    // "(JPY)": 149.85, // todo make larger currencies stretch the tags somehow
    // "(KRW)": 1349.18,
    // "(INR)": 83.18,
    // "(THB)": 36.46
}));

export const toUSD = (price: number, currency: string) => Math.trunc(price / (exchangeRates.get(currency.split(" ")[1]) ?? 1));
export const fromUSD = (price: number, currency: string) => Math.trunc(price * (exchangeRates.get(currency.split(" ")[1]) ?? 1));