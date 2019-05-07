/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitElectricCurrent<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitElectricCurrent {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitElectricCurrent>(): R;
      new: <R = NSUnitElectricCurrent>() => R;
      microamperes<R = unknown>(): R;
      milliamperes<R = unknown>(): R;
      amperes<R = unknown>(): R;
      kiloamperes<R = unknown>(): R;
      megaamperes<R = unknown>(): R;
    }
  }
}

declare const NSUnitElectricCurrent: cocoa.NSUnitElectricCurrent.CLASS;
