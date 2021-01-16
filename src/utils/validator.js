export class Validator {
  /**
   *  This function checks if an object is valid based on a schema provided.
   * @param {Object} data The data object from the API.
   * @param {Object} schema The schema interface to expect.
   * @return {Boolean} Returns true / valse based on the of the validity of the data.
   */
  validateDataWithSchema(data, schema) {
    if (!schema || !data) return false;

    const schemaProps = Object.getOwnPropertyNames(schema);
    const dataProps = Object.getOwnPropertyNames(data);

    // Check if all schema properties exist in the response object
    if (
      schemaProps.length !== dataProps.length &&
      !schemaProps.every(() => Object.hasOwnProperty(data))
    ) {
      return false;
    }

    // Check if the types of the data are equal for every property in the schema
    return schemaProps.every(
      (sProp) => schema[sProp] === this.getTypeOf(data[sProp])
    );
  }

  /**
   * Returns the true type of the given object or argument.
   * @param {*} arg Any object or argument
   * @return {String} Returns the type of the object or argument
   */
  getTypeOf(arg) {
    return Object.prototype.toString.call(arg).slice(8, -1).toLowerCase();
  }
}
