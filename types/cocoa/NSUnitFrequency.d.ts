/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitFrequency<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitFrequency {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitFrequency>(): R;
      new: <R = NSUnitFrequency>() => R;
      nanohertz<R = unknown>(): R;
      microhertz<R = unknown>(): R;
      millihertz<R = unknown>(): R;
      hertz<R = unknown>(): R;
      kilohertz<R = unknown>(): R;
      megahertz<R = unknown>(): R;
      gigahertz<R = unknown>(): R;
      terahertz<R = unknown>(): R;
    }
  }
}

declare const NSUnitFrequency: cocoa.NSUnitFrequency.CLASS;
