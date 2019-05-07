/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpDownProtocolProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    maximum<R = NSNumber>(): R;
    minimum<R = NSNumber>(): R;
    incrementValue<R = number>(): R;
    minimumIncrementValue<R = number>(): R;
    setMinimumIncrementValue<R = void, P0 = number>(_v: P0): R;
    upDownController<R = MSUpDownController>(): R;
  }
  namespace MSUpDownProtocolProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
