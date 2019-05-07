/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSClippingMaskModeAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    shapesWithClippingMask<R = unknown>(): R;
    clippingMaskMode<R = void, P0 = unknown>(_clippingMaskMode: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSClippingMaskModeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSClippingMaskModeAction>(): R;
      new: <R = MSClippingMaskModeAction>() => R;
    }
  }
}

declare const MSClippingMaskModeAction: cocoa.MSClippingMaskModeAction.CLASS;
