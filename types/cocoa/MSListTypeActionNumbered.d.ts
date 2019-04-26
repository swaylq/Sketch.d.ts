/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSListTypeActionNumbered<T0 = void, T1 = void, T2 = void> extends MSListTypeAction {
    label<R = unknown>(): R;
    setListTypeNumbered<R = void, P0 = unknown>(_setListTypeNumbered: P0): R;
    marker<R = unknown>(): R;
  }
  namespace MSListTypeActionNumbered {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSListTypeAction {
      alloc<R = MSListTypeActionNumbered>(): R;
      new: <R = MSListTypeActionNumbered>() => R;
    }
  }
}

declare const MSListTypeActionNumbered: cocoa.MSListTypeActionNumbered.CLASS;
