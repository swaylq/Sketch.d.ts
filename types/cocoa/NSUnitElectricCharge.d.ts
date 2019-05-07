/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitElectricCharge<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitElectricCharge {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitElectricCharge>(): R;
      new: <R = NSUnitElectricCharge>() => R;
      microampereHours<R = unknown>(): R;
      milliampereHours<R = unknown>(): R;
      ampereHours<R = unknown>(): R;
      kiloampereHours<R = unknown>(): R;
      megaampereHours<R = unknown>(): R;
      coulombs<R = unknown>(): R;
    }
  }
}

declare const NSUnitElectricCharge: cocoa.NSUnitElectricCharge.CLASS;
