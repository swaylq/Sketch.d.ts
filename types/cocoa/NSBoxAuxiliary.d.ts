/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBoxAuxiliary<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    fillColor<R = NSColor>(): R;
    setFillColor<R = void, P0 = NSColor>(_v: P0): R;
    borderColor<R = NSColor>(): R;
    setBorderColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace NSBoxAuxiliary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSBoxAuxiliary>(): R;
      new: <R = NSBoxAuxiliary>() => R;
    }
  }
}

declare const NSBoxAuxiliary: cocoa.NSBoxAuxiliary.CLASS;
