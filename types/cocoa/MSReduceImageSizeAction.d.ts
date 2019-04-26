/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReduceImageSizeAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    reduceImageSize<R = void, P0 = unknown>(_reduceImageSize: P0): R;
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
  }
  namespace MSReduceImageSizeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSReduceImageSizeAction>(): R;
      new: <R = MSReduceImageSizeAction>() => R;
    }
  }
}

declare const MSReduceImageSizeAction: cocoa.MSReduceImageSizeAction.CLASS;
