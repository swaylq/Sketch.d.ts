/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitFuelEfficiency<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitFuelEfficiency {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitFuelEfficiency>(): R;
      new: <R = NSUnitFuelEfficiency>() => R;
      litersPer100Kilometers<R = unknown>(): R;
      milesPerGallon<R = unknown>(): R;
      milesPerImperialGallon<R = unknown>(): R;
    }
  }
}

declare const NSUnitFuelEfficiency: cocoa.NSUnitFuelEfficiency.CLASS;
