/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitAcceleration<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitAcceleration {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitAcceleration>(): R;
      new: <R = NSUnitAcceleration>() => R;
      metersPerSecondSquared<R = unknown>(): R;
      gravity<R = unknown>(): R;
    }
  }
}

declare const NSUnitAcceleration: cocoa.NSUnitAcceleration.CLASS;
