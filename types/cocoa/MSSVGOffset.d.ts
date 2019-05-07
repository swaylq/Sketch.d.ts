/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGOffset<T0 = void, T1 = void, T2 = void> extends MSSVGfeFilterPrimitive {
    dx<R = number>(): R;
    setDx<R = void, P0 = number>(_v: P0): R;
    dy<R = number>(): R;
    setDy<R = void, P0 = number>(_v: P0): R;
    in<R = NSString>(): R;
    setIn<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace MSSVGOffset {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSVGfeFilterPrimitive {
      alloc<R = MSSVGOffset>(): R;
      new: <R = MSSVGOffset>() => R;
    }
  }
}

declare const MSSVGOffset: cocoa.MSSVGOffset.CLASS;
