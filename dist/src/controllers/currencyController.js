import { generateGBPExchangeData, generateEURExchangeData, generateUSDExchangeData } from "../services/currecnyconvertion.ts";
/**
 * Gets the exchange rate for a currency
 * @param req the request object
 * @param res the response object
 */
export const getExchangeRate = async (req, res) => {
    // We will use a try catch block to catch any errors
    try {
        // Get the city param from the request
        const { currencyname } = req.params;
        console.log(currencyname);
        // We will create a variable with a type of WeatherData
        let finalexchangerate;
        // We will use an if statement to check which city was passed in
        if (currencyname === "gbp") {
            console.log(generateGBPExchangeData());
            finalexchangerate = generateGBPExchangeData();
        }
        else if (currencyname === "eur") {
            finalexchangerate = generateEURExchangeData();
        }
        else if (currencyname === "usd") {
            finalexchangerate = generateUSDExchangeData();
        }
        else {
            // If the currency is not gbp or euro or usd we will throw an error
            res.status(404).send("Currency is not in list");
        }
        res.status(200).json(finalexchangerate);
    }
    catch (error) {
        // If there is an error, we will log it and send a 500 status code
        res.status(500).send("Error in fetching exchange rate");
    }
};
//# sourceMappingURL=currencyController.js.map