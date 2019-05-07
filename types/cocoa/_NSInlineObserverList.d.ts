/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInlineObserverList<T0 = void, T1 = void, T2 = void> extends _NSObserverList {
    dealloc<R = void>(): R;
  }
  namespace _NSInlineObserverList {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSObserverList {
      alloc<R = _NSInlineObserverList>(): R;
      new: <R = _NSInlineObserverList>() => R;
    }
  }
}
