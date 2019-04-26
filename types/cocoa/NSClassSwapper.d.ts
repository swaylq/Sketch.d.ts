/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSClassSwapper<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    setClassName<R = void, P0 = unknown>(_setClassName: P0): R;
    className<R = unknown>(): R;
    setTemplate<R = void, P0 = unknown>(_setTemplate: P0): R;
    template<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSClassSwapper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSClassSwapper>(): R;
      new: <R = NSClassSwapper>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSClassSwapper: cocoa.NSClassSwapper.CLASS;
