/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGroupAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    historyMomentTitle<R = unknown>(): R;
    group<R = void, P0 = unknown>(_group: P0): R;
    validate<R = boolean>(): R;
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
  }
  namespace MSGroupAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSGroupAction>(): R;
      new: <R = MSGroupAction>() => R;
    }
  }
}

declare const MSGroupAction: cocoa.MSGroupAction.CLASS;
