/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMultipleColorsPlaceholder<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSMultipleColorsPlaceholder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSMultipleColorsPlaceholder>(): R;
      new: <R = MSMultipleColorsPlaceholder>() => R;
      placeholderColor<R = unknown>(): R;
    }
  }
}

declare const MSMultipleColorsPlaceholder: cocoa.MSMultipleColorsPlaceholder.CLASS;
