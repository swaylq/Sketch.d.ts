/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCreateSharedStyleAction<T0 = void, T1 = void, T2 = void> extends MSBaseSharedObjectAction {
    label<R = unknown>(): R;
    needsRenameAfterAction<R = boolean>(): R;
    createSharedStyle<R = void, P0 = unknown>(_createSharedStyle: P0): R;
  }
  namespace MSCreateSharedStyleAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseSharedObjectAction {
      alloc<R = MSCreateSharedStyleAction>(): R;
      new: <R = MSCreateSharedStyleAction>() => R;
    }
  }
}

declare const MSCreateSharedStyleAction: cocoa.MSCreateSharedStyleAction.CLASS;
