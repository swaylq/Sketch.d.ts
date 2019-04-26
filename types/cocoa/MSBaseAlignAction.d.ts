/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseAlignAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    textAlignment<R = number>(): R;
    validate<R = boolean>(): R;
  }
  namespace MSBaseAlignAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSBaseAlignAction>(): R;
      new: <R = MSBaseAlignAction>() => R;
    }
  }
}

declare const MSBaseAlignAction: cocoa.MSBaseAlignAction.CLASS;
