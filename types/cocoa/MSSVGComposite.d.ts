/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGComposite<T0 = void, T1 = void, T2 = void> extends MSSVGfeFilterPrimitive {
    in<R = NSString>(): R;
    setIn<R = void, P0 = NSString>(_v: P0): R;
    in2<R = NSString>(): R;
    setIn2<R = void, P0 = NSString>(_v: P0): R;
    k1<R = number>(): R;
    setK1<R = void, P0 = number>(_v: P0): R;
    k2<R = number>(): R;
    setK2<R = void, P0 = number>(_v: P0): R;
    k3<R = number>(): R;
    setK3<R = void, P0 = number>(_v: P0): R;
    k4<R = number>(): R;
    setK4<R = void, P0 = number>(_v: P0): R;
    operator<R = NSString>(): R;
    setOperator<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace MSSVGComposite {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSVGfeFilterPrimitive {
      alloc<R = MSSVGComposite>(): R;
      new: <R = MSSVGComposite>() => R;
    }
  }
}

declare const MSSVGComposite: cocoa.MSSVGComposite.CLASS;
