/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitDuration<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitDuration {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitDuration>(): R;
      new: <R = NSUnitDuration>() => R;
      hours<R = unknown>(): R;
      minutes<R = unknown>(): R;
      seconds<R = unknown>(): R;
    }
  }
}

declare const NSUnitDuration: cocoa.NSUnitDuration.CLASS;
