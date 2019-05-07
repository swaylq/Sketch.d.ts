/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSControlStripTouchBarItem<T0 = void, T1 = void, T2 = void> extends NSCustomTouchBarItem {
    maxSize<R = CGSize>(): R;
    setMaxSize<R = void, P0 = CGSize>(_v: P0): R;
    preferredSize<R = CGSize>(): R;
    setPreferredSize<R = void, P0 = CGSize>(_v: P0): R;
    minSize<R = CGSize>(): R;
    setMinSize<R = void, P0 = CGSize>(_v: P0): R;
  }
  namespace _NSControlStripTouchBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCustomTouchBarItem {
      alloc<R = _NSControlStripTouchBarItem>(): R;
      new: <R = _NSControlStripTouchBarItem>() => R;
    }
  }
}
