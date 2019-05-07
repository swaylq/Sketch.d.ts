/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMenuImpl<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace _NSMenuImpl {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSMenuImpl>(): R;
      new: <R = _NSMenuImpl>() => R;
    }
  }
}
