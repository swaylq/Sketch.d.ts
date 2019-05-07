/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPathControlAuxiliary<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    dropOperation<R = number>(): R;
    setDropOperation<R = void, P0 = number>(_v: P0): R;
    dropCell<R = NSPathComponentCell>(): R;
    setDropCell<R = void, P0 = NSPathComponentCell>(_v: P0): R;
  }
  namespace NSPathControlAuxiliary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPathControlAuxiliary>(): R;
      new: <R = NSPathControlAuxiliary>() => R;
    }
  }
}

declare const NSPathControlAuxiliary: cocoa.NSPathControlAuxiliary.CLASS;
