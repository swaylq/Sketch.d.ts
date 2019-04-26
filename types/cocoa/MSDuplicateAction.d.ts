/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDuplicateAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    duplicate<R = void, P0 = unknown>(_duplicate: P0): R;
  }
  namespace MSDuplicateAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSDuplicateAction>(): R;
      new: <R = MSDuplicateAction>() => R;
    }
  }
}

declare const MSDuplicateAction: cocoa.MSDuplicateAction.CLASS;
