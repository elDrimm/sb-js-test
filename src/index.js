import { Validator } from "./utils/validator.js";

/**
 * This is a small example of the validator
 */
const carSchema = {
  brand: "string",
  type: "string",
  milage: "number",
  extras: "array",
};

const carObj = {
  brand: "Mazda",
  type: "MX5 NB 1.8",
  milage: 199999.99,
  extras: ["2001 Special Edition"],
};

const v = new Validator();
console.log(v.validateDataWithSchema(carObj, carSchema));
