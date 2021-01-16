import { Validator } from "./validator";

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

describe("Validator", () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  describe("getTypeOf function", () => {
    const testCases = [
      { arg: "John Dough", type: "string" },
      { arg: 22101994, type: "number" },
      { arg: [], type: "array" },
      { arg: {}, type: "object" },
      { arg: true, type: "boolean" },
    ];

    for (const item of testCases) {
      it(`should return "${item.type}" as a string for ${item.arg}`, () => {
        const type = validator.getTypeOf(item.arg);

        expect(type).toEqual(item.type);
        expect(typeof type).toEqual("string");
      });
    }
  });

  describe("validateObjectWithSchema", () => {
    it("should return false if no schema available", () => {
      const isValid = validator.validateObjectWithSchema(carObj);

      expect(isValid).toBeFalsy();
    });

    it("should return false if no object available", () => {
      const isValid = validator.validateObjectWithSchema(null, carSchema);

      expect(isValid).toBeFalsy();
    });

    it("should return false if the data does not contain all required schema properties", () => {
      const carObjF = {
        brand: "BMW",
        type: "335",
        milage: "100000",
      };

      const isValid = validator.validateObjectWithSchema(carObjF, carSchema);

      expect(isValid).toBeFalsy();
    });

    it("should return false if the data has a different property", () => {
      const carObjF = {
        brand: "BMW",
        type: "335",
        milage: "100000",
        gearbox: "auto",
      };

      const isValid = validator.validateObjectWithSchema(carObjF, carSchema);

      expect(isValid).toBeFalsy();
    });

    it("should return false if a property's type is not correct", () => {
      const carObjF = {
        brand: "BMW",
        type: "335",
        milage: "100000",
        extras: ["LCI", "KW Coilovers"],
      };

      const isValid = validator.validateObjectWithSchema(carObjF, carSchema);

      expect(isValid).toBeFalsy();
    });

    it("should return true if data properties and types are equal to the schema", () => {
      const isValid = validator.validateObjectWithSchema(carObj, carSchema);

      expect(isValid).toBeTruthy();
    });
  });
});
