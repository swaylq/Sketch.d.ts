/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitTemperature<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitTemperature {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitTemperature>(): R;
      new: <R = NSUnitTemperature>() => R;
      kelvin<R = unknown>(): R;
      fahrenheit<R = unknown>(): R;
      celsius<R = unknown>(): R;
    }
  }
}

declare const NSUnitTemperature: cocoa.NSUnitTemperature.CLASS;
