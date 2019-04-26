/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextVerticalAlignmentAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    validate<R = boolean>(): R;
    verticalAlignment<R = number>(): R;
  }
  namespace MSTextVerticalAlignmentAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSTextVerticalAlignmentAction>(): R;
      new: <R = MSTextVerticalAlignmentAction>() => R;
    }
  }
}

declare const MSTextVerticalAlignmentAction: cocoa.MSTextVerticalAlignmentAction.CLASS;
