/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDecimalNumberBehaviorsProtocol<T0 = void, T1 = void, T2 = void> {
    exceptionDuringOperation_error_leftOperand_rightOperand<R = NSDecimalNumber, P0 = string, P1 = number, P2 = NSDecimalNumber, P3 = NSDecimalNumber>(_exceptionDuringOperation: P0, _error: P1, _leftOperand: P2, _rightOperand: P3): R;
    scale<R = number>(): R;
    roundingMode<R = number>(): R;
  }
  namespace NSDecimalNumberBehaviorsProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
