/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSListTypeActionNone<T0 = void, T1 = void, T2 = void> extends MSListTypeAction {
    label<R = unknown>(): R;
    setListTypeNone<R = void, P0 = unknown>(_setListTypeNone: P0): R;
    marker<R = unknown>(): R;
  }
  namespace MSListTypeActionNone {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSListTypeAction {
      alloc<R = MSListTypeActionNone>(): R;
      new: <R = MSListTypeActionNone>() => R;
    }
  }
}

declare const MSListTypeActionNone: cocoa.MSListTypeActionNone.CLASS;
