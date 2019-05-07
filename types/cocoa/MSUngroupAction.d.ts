/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUngroupAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    historyMomentTitle<R = unknown>(): R;
    ungroup<R = void, P0 = unknown>(_ungroup: P0): R;
    validate<R = boolean>(): R;
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
  }
  namespace MSUngroupAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSUngroupAction>(): R;
      new: <R = MSUngroupAction>() => R;
    }
  }
}

declare const MSUngroupAction: cocoa.MSUngroupAction.CLASS;
