/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSResetSharedStyleAction<T0 = void, T1 = void, T2 = void> extends MSBaseSharedObjectAction {
    label<R = unknown>(): R;
    resetSharedStyle<R = void, P0 = unknown>(_resetSharedStyle: P0): R;
  }
  namespace MSResetSharedStyleAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseSharedObjectAction {
      alloc<R = MSResetSharedStyleAction>(): R;
      new: <R = MSResetSharedStyleAction>() => R;
    }
  }
}

declare const MSResetSharedStyleAction: cocoa.MSResetSharedStyleAction.CLASS;
