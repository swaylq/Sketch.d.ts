/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceImageAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    openPanel<R = unknown>(): R;
    applyImage_tolayer<R = void, P0 = unknown, P1 = unknown>(_applyImage: P0, _tolayer: P1): R;
    replaceImage<R = void, P0 = unknown>(_replaceImage: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSReplaceImageAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSReplaceImageAction>(): R;
      new: <R = MSReplaceImageAction>() => R;
    }
  }
}

declare const MSReplaceImageAction: cocoa.MSReplaceImageAction.CLASS;
