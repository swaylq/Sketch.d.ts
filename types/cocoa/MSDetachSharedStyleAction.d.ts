/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDetachSharedStyleAction<T0 = void, T1 = void, T2 = void> extends MSBaseSharedObjectAction {
    label<R = unknown>(): R;
    detachSharedStyle<R = void, P0 = unknown>(_detachSharedStyle: P0): R;
  }
  namespace MSDetachSharedStyleAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseSharedObjectAction {
      alloc<R = MSDetachSharedStyleAction>(): R;
      new: <R = MSDetachSharedStyleAction>() => R;
    }
  }
}

declare const MSDetachSharedStyleAction: cocoa.MSDetachSharedStyleAction.CLASS;
