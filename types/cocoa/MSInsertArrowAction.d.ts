/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertArrowAction<T0 = void, T1 = void, T2 = void> extends MSInsertLineAction {}
  namespace MSInsertArrowAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInsertLineAction {
      alloc<R = MSInsertArrowAction>(): R;
      new: <R = MSInsertArrowAction>() => R;
    }
  }
}

declare const MSInsertArrowAction: cocoa.MSInsertArrowAction.CLASS;
