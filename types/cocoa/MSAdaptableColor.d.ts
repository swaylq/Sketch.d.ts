/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAdaptableColor<T0 = void, T1 = void, T2 = void> extends NSColor {}
  namespace MSAdaptableColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColor {
      alloc<R = MSAdaptableColor>(): R;
      new: <R = MSAdaptableColor>() => R;
    }
  }
}

declare const MSAdaptableColor: cocoa.MSAdaptableColor.CLASS;
