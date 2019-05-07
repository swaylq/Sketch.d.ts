/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSIgnoreClippingMaskAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    ignoreClippingMask<R = void, P0 = unknown>(_ignoreClippingMask: P0): R;
    isActive<R = boolean>(): R;
    validate<R = boolean>(): R;
  }
  namespace MSIgnoreClippingMaskAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSIgnoreClippingMaskAction>(): R;
      new: <R = MSIgnoreClippingMaskAction>() => R;
    }
  }
}

declare const MSIgnoreClippingMaskAction: cocoa.MSIgnoreClippingMaskAction.CLASS;
