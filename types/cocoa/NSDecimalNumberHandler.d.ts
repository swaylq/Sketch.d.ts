/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDecimalNumberHandler<T0 = void, T1 = void, T2 = void> extends NSObject, NSDecimalNumberBehaviorsProtocol, NSCodingProtocol {
    initWithRoundingMode_scale_raiseOnExactness_raiseOnOverflow_raiseOnUnderflow_raiseOnDivideByZero<R = unknown, P0 = number, P1 = number, P2 = boolean, P3 = boolean, P4 = boolean, P5 = boolean>(_initWithRoundingMode: P0, _scale: P1, _raiseOnExactness: P2, _raiseOnOverflow: P3, _raiseOnUnderflow: P4, _raiseOnDivideByZero: P5): R;
  }
  namespace NSDecimalNumberHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSDecimalNumberBehaviorsProtocol, NSCodingProtocol {
      alloc<R = NSDecimalNumberHandler>(): R;
      new: <R = NSDecimalNumberHandler>() => R;
      decimalNumberHandlerWithRoundingMode_scale_raiseOnExactness_raiseOnOverflow_raiseOnUnderflow_raiseOnDivideByZero<R = unknown, P0 = number, P1 = number, P2 = boolean, P3 = boolean, P4 = boolean, P5 = boolean>(_decimalNumberHandlerWithRoundingMode: P0, _scale: P1, _raiseOnExactness: P2, _raiseOnOverflow: P3, _raiseOnUnderflow: P4, _raiseOnDivideByZero: P5): R;
      defaultDecimalNumberHandler<R = unknown>(): R;
    }
  }
}

declare const NSDecimalNumberHandler: cocoa.NSDecimalNumberHandler.CLASS;
