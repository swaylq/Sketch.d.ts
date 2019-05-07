/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStdIOFileHandle<T0 = void, T1 = void, T2 = void> extends NSConcreteFileHandle {}
  namespace _NSStdIOFileHandle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSConcreteFileHandle {
      alloc<R = _NSStdIOFileHandle>(): R;
      new: <R = _NSStdIOFileHandle>() => R;
    }
  }
}
