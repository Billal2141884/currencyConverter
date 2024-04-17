import { faker } from "@faker-js/faker";
export const generateGBPExchangeData = () => {
    // Generate random currency rate 
    const generatedCurrencyRate = {
        BDT: faker.number.float({ min: 142, max: 155, fractionDigits: 3 }),
        IRS: faker.number.float({ min: 95, max: 103, fractionDigits: 3 }),
        PKR: faker.number.float({ min: 345.000, max: 351.560, fractionDigits: 3 }),
        CAD: faker.number.float({ min: 1.700, max: 1.800, fractionDigits: 3 }),
    };
    // Return GBP exchange rate
    return generatedCurrencyRate;
};
export const generateEURExchangeData = () => {
    // Generate random currency rate
    const generatedCurrencyRate = {
        BDT: faker.number.float({ min: 122, max: 135, fractionDigits: 3 }),
        IRS: faker.number.float({ min: 85, max: 95, fractionDigits: 3 }),
        PKR: faker.number.float({ min: 300, max: 320, fractionDigits: 3 }),
        CAD: faker.number.float({ min: 1, max: 1.2, fractionDigits: 3 }),
    };
    // Return EUR exchange rate
    return generatedCurrencyRate;
};
export const generateUSDExchangeData = () => {
    // Generate random currency rate
    const generatedCurrencyRate = {
        BDT: faker.number.float({ min: 122, max: 135, fractionDigits: 3 }),
        IRS: faker.number.float({ min: 85, max: 95, fractionDigits: 3 }),
        PKR: faker.number.float({ min: 300, max: 320, fractionDigits: 3 }),
        CAD: faker.number.float({ min: 1, max: 1.2, fractionDigits: 3 }),
    };
    // Return USD exchange rate
    return generatedCurrencyRate;
};
//# sourceMappingURL=currecnyconvertion.js.map