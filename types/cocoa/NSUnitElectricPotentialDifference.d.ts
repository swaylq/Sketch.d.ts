/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitElectricPotentialDifference<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitElectricPotentialDifference {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitElectricPotentialDifference>(): R;
      new: <R = NSUnitElectricPotentialDifference>() => R;
      microvolts<R = unknown>(): R;
      millivolts<R = unknown>(): R;
      volts<R = unknown>(): R;
      kilovolts<R = unknown>(): R;
      megavolts<R = unknown>(): R;
    }
  }
}

declare const NSUnitElectricPotentialDifference: cocoa.NSUnitElectricPotentialDifference.CLASS;
