/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCopyStyleAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    copyStyle<R = void, P0 = unknown>(_copyStyle: P0): R;
  }
  namespace MSCopyStyleAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSCopyStyleAction>(): R;
      new: <R = MSCopyStyleAction>() => R;
    }
  }
}

declare const MSCopyStyleAction: cocoa.MSCopyStyleAction.CLASS;
