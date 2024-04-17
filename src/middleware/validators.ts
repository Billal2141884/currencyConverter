import { param } from "express-validator";

/**
 * Validates the currency name param
 * @returns {ValidationChain} - Express validator validation chain
 * @example
 * router.get(
 *  "/:currencyName",
 * validateCurrencyName,
 * getcurrencyRate
 * );
 */
export const validateCurrencyName = param("currency")
  // We will use the isString method to check if the currency param is a string
  .isString()
  // We will use the isIn method to check if the currency param is either gbp or eur or usd
  .isIn(["gbp", "eur", "usd"])
  // We will use the withMessage method to set a custom error message
  .withMessage("Currency must be either gbp or eur or usd");
