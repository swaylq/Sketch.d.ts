/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSException<T0 = void, T1 = void, T2 = void> {
    // + NSException(NSException): 
    debugDescription<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    // + NSException(NSExceptionPortCoding): 
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    // + NSException(NSUnpublishedEOF): 
    exceptionRememberingObject_key<R = unknown, P0 = unknown, P1 = unknown>(_exceptionRememberingObject: P0, _key: P1): R;
    exceptionAddingEntriesToUserInfo<R = unknown, P0 = unknown>(_exceptionAddingEntriesToUserInfo: P0): R;
  }
  namespace NSException {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSException(NSUnpublishedEOF): 
      validationExceptionWithFormat<R = unknown, P0 = unknown>(_validationExceptionWithFormat: P0): R;
      aggregateExceptionWithExceptions<R = unknown, P0 = unknown>(_aggregateExceptionWithExceptions: P0): R;
    }
  }
}

declare const NSException: cocoa.NSException.CLASS;
