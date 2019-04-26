/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDecimalNumber<T0 = void, T1 = void, T2 = void> extends NSNumber {}
  namespace NSDecimalNumber {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSNumber {
      alloc<R = NSDecimalNumber>(): R;
      new: <R = NSDecimalNumber>() => R;
      defaultBehavior<R = unknown>(): R;
    }
  }
}

declare const NSDecimalNumber: cocoa.NSDecimalNumber.CLASS;
