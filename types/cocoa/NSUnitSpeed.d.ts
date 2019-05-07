/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitSpeed<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitSpeed {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitSpeed>(): R;
      new: <R = NSUnitSpeed>() => R;
      knots<R = unknown>(): R;
      milesPerHour<R = unknown>(): R;
      kilometersPerHour<R = unknown>(): R;
      metersPerSecond<R = unknown>(): R;
    }
  }
}

declare const NSUnitSpeed: cocoa.NSUnitSpeed.CLASS;
