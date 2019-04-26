/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFocusStackElement<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSFocusStackElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSFocusStackElement>(): R;
      new: <R = _NSFocusStackElement>() => R;
    }
  }
}
