/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGMorphology<T0 = void, T1 = void, T2 = void> extends MSSVGfeFilterPrimitive {
    in<R = NSString>(): R;
    setIn<R = void, P0 = NSString>(_v: P0): R;
    operator<R = NSString>(): R;
    setOperator<R = void, P0 = NSString>(_v: P0): R;
    radius<R = number>(): R;
    setRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSSVGMorphology {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSVGfeFilterPrimitive {
      alloc<R = MSSVGMorphology>(): R;
      new: <R = MSSVGMorphology>() => R;
    }
  }
}

declare const MSSVGMorphology: cocoa.MSSVGMorphology.CLASS;
