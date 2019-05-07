/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCReceiptValidationContextWithInfo<T0 = void, T1 = void, T2 = void> extends BCReceiptValidationContext {
    cxx_destruct<R = void>(): R;
    initWithBundleID_minimumVersion<R = unknown, P0 = unknown, P1 = unknown>(_initWithBundleID: P0, _minimumVersion: P1): R;
    minimumVersion<R = NSString>(): R;
    setMinimumVersion<R = void, P0 = NSString>(_v: P0): R;
    expectedBundleID<R = NSString>(): R;
    setExpectedBundleID<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace BCReceiptValidationContextWithInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCReceiptValidationContext {
      alloc<R = BCReceiptValidationContextWithInfo>(): R;
      new: <R = BCReceiptValidationContextWithInfo>() => R;
    }
  }
}

declare const BCReceiptValidationContextWithInfo: cocoa.BCReceiptValidationContextWithInfo.CLASS;
