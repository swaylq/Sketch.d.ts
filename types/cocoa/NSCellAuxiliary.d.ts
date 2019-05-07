/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCellAuxiliary<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSCellAuxiliary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSCellAuxiliary>(): R;
      new: <R = NSCellAuxiliary>() => R;
    }
  }
}

declare const NSCellAuxiliary: cocoa.NSCellAuxiliary.CLASS;
