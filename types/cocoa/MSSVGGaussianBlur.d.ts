/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGGaussianBlur<T0 = void, T1 = void, T2 = void> extends MSSVGfeFilterPrimitive {
    in<R = NSString>(): R;
    setIn<R = void, P0 = NSString>(_v: P0): R;
    stdDeviation<R = NSString>(): R;
    setStdDeviation<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace MSSVGGaussianBlur {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSVGfeFilterPrimitive {
      alloc<R = MSSVGGaussianBlur>(): R;
      new: <R = MSSVGGaussianBlur>() => R;
    }
  }
}

declare const MSSVGGaussianBlur: cocoa.MSSVGGaussianBlur.CLASS;
