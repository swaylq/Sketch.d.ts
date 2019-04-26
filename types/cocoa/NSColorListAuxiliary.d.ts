/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorListAuxiliary<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace NSColorListAuxiliary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSColorListAuxiliary>(): R;
      new: <R = NSColorListAuxiliary>() => R;
    }
  }
}

declare const NSColorListAuxiliary: cocoa.NSColorListAuxiliary.CLASS;
