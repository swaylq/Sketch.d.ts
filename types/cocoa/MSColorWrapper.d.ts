/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorWrapper<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    color<R = MSFlexibleColor>(): R;
    setColor<R = void, P0 = MSFlexibleColor>(_v: P0): R;
  }
  namespace MSColorWrapper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSColorWrapper>(): R;
      new: <R = MSColorWrapper>() => R;
      wrapperWithColor<R = unknown, P0 = unknown>(_wrapperWithColor: P0): R;
    }
  }
}

declare const MSColorWrapper: cocoa.MSColorWrapper.CLASS;
