/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSClippingMaskAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    clippingMask<R = void, P0 = unknown>(_clippingMask: P0): R;
    validate<R = boolean>(): R;
    isActive<R = boolean>(): R;
  }
  namespace MSClippingMaskAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSClippingMaskAction>(): R;
      new: <R = MSClippingMaskAction>() => R;
    }
  }
}

declare const MSClippingMaskAction: cocoa.MSClippingMaskAction.CLASS;
