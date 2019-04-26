/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSGlobalEventObserver<T0 = void, T1 = void, T2 = void> extends _NSEventObserver {}
  namespace _NSGlobalEventObserver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSEventObserver {
      alloc<R = _NSGlobalEventObserver>(): R;
      new: <R = _NSGlobalEventObserver>() => R;
    }
  }
}
