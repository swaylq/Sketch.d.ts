/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitIlluminance<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitIlluminance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitIlluminance>(): R;
      new: <R = NSUnitIlluminance>() => R;
      lux<R = unknown>(): R;
    }
  }
}

declare const NSUnitIlluminance: cocoa.NSUnitIlluminance.CLASS;
