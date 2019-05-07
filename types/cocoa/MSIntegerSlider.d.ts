/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSIntegerSlider<T0 = void, T1 = void, T2 = void> extends NSSlider {}
  namespace MSIntegerSlider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSlider {
      alloc<R = MSIntegerSlider>(): R;
      new: <R = MSIntegerSlider>() => R;
    }
  }
}

declare const MSIntegerSlider: cocoa.MSIntegerSlider.CLASS;
