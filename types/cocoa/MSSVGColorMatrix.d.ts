/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGColorMatrix<T0 = void, T1 = void, T2 = void> extends MSSVGfeFilterPrimitive {
    in<R = NSString>(): R;
    setIn<R = void, P0 = NSString>(_v: P0): R;
    type<R = NSString>(): R;
    setType<R = void, P0 = NSString>(_v: P0): R;
    values<R = NSString>(): R;
    setValues<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace MSSVGColorMatrix {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSVGfeFilterPrimitive {
      alloc<R = MSSVGColorMatrix>(): R;
      new: <R = MSSVGColorMatrix>() => R;
      colorMatrixForColor<R = unknown, P0 = unknown>(_colorMatrixForColor: P0): R;
    }
  }
}

declare const MSSVGColorMatrix: cocoa.MSSVGColorMatrix.CLASS;
