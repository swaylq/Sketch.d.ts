/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCReceiptValidationException<T0 = void, T1 = void, T2 = void> extends NSException {
    status<R = number>(): R;
  }
  namespace BCReceiptValidationException {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSException {
      raiseWithStatus_error<R = void, P0 = number, P1 = number>(_raiseWithStatus: P0, _error: P1): R;
      raiseWithStatus<R = void, P0 = number>(_raiseWithStatus: P0): R;
      exceptionWithStatus<R = unknown, P0 = number>(_exceptionWithStatus: P0): R;
    }
  }
}

declare const BCReceiptValidationException: cocoa.BCReceiptValidationException.CLASS;
