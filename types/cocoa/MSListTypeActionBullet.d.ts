/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSListTypeActionBullet<T0 = void, T1 = void, T2 = void> extends MSListTypeAction {
    label<R = unknown>(): R;
    setListTypeBullet<R = void, P0 = unknown>(_setListTypeBullet: P0): R;
    marker<R = unknown>(): R;
  }
  namespace MSListTypeActionBullet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSListTypeAction {
      alloc<R = MSListTypeActionBullet>(): R;
      new: <R = MSListTypeActionBullet>() => R;
    }
  }
}

declare const MSListTypeActionBullet: cocoa.MSListTypeActionBullet.CLASS;
