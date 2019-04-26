/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertArrowEventHandler<T0 = void, T1 = void, T2 = void> extends MSInsertLineEventHandler {}
  namespace MSInsertArrowEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInsertLineEventHandler {
      alloc<R = MSInsertArrowEventHandler>(): R;
      new: <R = MSInsertArrowEventHandler>() => R;
    }
  }
}

declare const MSInsertArrowEventHandler: cocoa.MSInsertArrowEventHandler.CLASS;
