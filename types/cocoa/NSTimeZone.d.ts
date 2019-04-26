/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTimeZone<T0 = void, T1 = void, T2 = void> {
    // + NSTimeZone(NSTimeZone): 
    classForCoder<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    // + NSTimeZone(NSTimeZonePortCoding): 
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
  }
  namespace NSTimeZone {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSTimeZone(NSTimeZone): 
      supportsSecureCoding<R = boolean>(): R;
    }
  }
}

declare const NSTimeZone: cocoa.NSTimeZone.CLASS;
