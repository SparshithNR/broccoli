// Base class for builder errors
export default class Cancelation extends Error {
  stack: any;
  message: any;
  isCancelation: any;
  isSilent: any;

  static isCancelationError(e: any) {
    return typeof e === 'object' && e !== null && e.isCancelation === true;
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

    this.isCancelation = true;
    this.isSilent = true;
  }
};
