// Base class for builder errors
export default class BuilderError extends Error {
  stack: any;
  message: any;
  isBuilderError: any;

  static isBuilderError(error: any) {
    return error !== null && typeof error === 'object' && error.isBuilderError;
  }

  constructor(a: any, b: any, c: any) {
    // Subclassing Error in ES5 is non-trivial because reasons, so we need this
    // extra constructor logic from http://stackoverflow.com/a/17891099/525872.
    // Note that ES5 subclasses of BuilderError don't in turn need any special
    // code.
    // @ts-ignore
    let temp: any = super(a, b, c);
    // Need to assign temp.name for correct error class in .stack and .message
    temp.name = this.name = this.constructor.name;
    this.stack = temp.stack;
    this.message = temp.message;
    this.isBuilderError = true;
  }
};
