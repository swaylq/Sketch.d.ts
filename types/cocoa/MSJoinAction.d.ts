/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJoinAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    joinPath_withPath<R = unknown, P0 = unknown, P1 = unknown>(_joinPath: P0, _withPath: P1): R;
    historyMomentTitle<R = unknown>(): R;
    join<R = void, P0 = unknown>(_join: P0): R;
  }
  namespace MSJoinAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSJoinAction>(): R;
      new: <R = MSJoinAction>() => R;
    }
  }
}

declare const MSJoinAction: cocoa.MSJoinAction.CLASS;
