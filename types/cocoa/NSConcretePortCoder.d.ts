/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcretePortCoder<T0 = void, T1 = void, T2 = void> extends NSPortCoder {
    dealloc<R = void>(): R;
    _classAllowed<R = boolean, P0 = unknown>(__classAllowed: P0): R;
    _setWhitelist<R = void, P0 = unknown>(__setWhitelist: P0): R;
  }
  namespace NSConcretePortCoder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPortCoder {
      alloc<R = NSConcretePortCoder>(): R;
      new: <R = NSConcretePortCoder>() => R;
    }
  }
}

declare const NSConcretePortCoder: cocoa.NSConcretePortCoder.CLASS;
