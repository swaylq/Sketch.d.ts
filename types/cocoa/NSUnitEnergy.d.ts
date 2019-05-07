/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitEnergy<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitEnergy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitEnergy>(): R;
      new: <R = NSUnitEnergy>() => R;
      kilowattHours<R = unknown>(): R;
      calories<R = unknown>(): R;
      kilocalories<R = unknown>(): R;
      joules<R = unknown>(): R;
      kilojoules<R = unknown>(): R;
    }
  }
}

declare const NSUnitEnergy: cocoa.NSUnitEnergy.CLASS;
