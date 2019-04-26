/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertArtboardAction<T0 = void, T1 = void, T2 = void> extends MSBaseInsertAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    preferredMenuAction<R = string>(): R;
    insertArtboard<R = void, P0 = unknown>(_insertArtboard: P0): R;
  }
  namespace MSInsertArtboardAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseInsertAction {
      alloc<R = MSInsertArtboardAction>(): R;
      new: <R = MSInsertArtboardAction>() => R;
    }
  }
}

declare const MSInsertArtboardAction: cocoa.MSInsertArtboardAction.CLASS;
