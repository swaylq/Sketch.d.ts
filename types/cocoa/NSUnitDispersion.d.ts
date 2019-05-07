/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitDispersion<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitDispersion {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitDispersion>(): R;
      new: <R = NSUnitDispersion>() => R;
      partsPerMillion<R = unknown>(): R;
    }
  }
}

declare const NSUnitDispersion: cocoa.NSUnitDispersion.CLASS;
