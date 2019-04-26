/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCReceiptValidationContext<T0 = void, T1 = void, T2 = void> extends NSObject {
    valid<R = boolean>(): R;
    setValid<R = void, P0 = boolean>(_v: P0): R;
    quickValidated<R = boolean>(): R;
    setQuickValidated<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace BCReceiptValidationContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = BCReceiptValidationContext>(): R;
      new: <R = BCReceiptValidationContext>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const BCReceiptValidationContext: cocoa.BCReceiptValidationContext.CLASS;
