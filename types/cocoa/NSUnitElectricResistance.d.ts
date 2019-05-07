/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitElectricResistance<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitElectricResistance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitElectricResistance>(): R;
      new: <R = NSUnitElectricResistance>() => R;
      microohms<R = unknown>(): R;
      milliohms<R = unknown>(): R;
      ohms<R = unknown>(): R;
      kiloohms<R = unknown>(): R;
      megaohms<R = unknown>(): R;
    }
  }
}

declare const NSUnitElectricResistance: cocoa.NSUnitElectricResistance.CLASS;
