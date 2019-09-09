import BuilderError from './builder';
const wrapPrimitiveErrors = require('../utils/wrap-primitive-errors');

export default class NodeSetupError extends BuilderError {
  stack: any;

  constructor(originalError: any, nodeWrapper: any) {
    if (nodeWrapper == null) {
      // Chai calls new NodeSetupError() :(
      // @ts-ignore
      super();
      return;
    }
    originalError = wrapPrimitiveErrors(originalError);
    const message =
      originalError.message +
      '\nat ' +
      nodeWrapper.label +
      nodeWrapper.formatInstantiationStackForTerminal();
    // @ts-ignore
    super(message);
    // The stack will have the original exception name, but that's OK
    this.stack = originalError.stack;
  }
};
