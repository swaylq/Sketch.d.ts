/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowAuxiliary<T0 = void, T1 = void, T2 = void> extends NSObject {
    appearanceParent<R = NSAppearanceCustomization>(): R;
    setAppearanceParent<R = void, P0 = NSAppearanceCustomization>(_v: P0): R;
  }
  namespace NSWindowAuxiliary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSWindowAuxiliary>(): R;
      new: <R = NSWindowAuxiliary>() => R;
    }
  }
}

declare const NSWindowAuxiliary: cocoa.NSWindowAuxiliary.CLASS;
