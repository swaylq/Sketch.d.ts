/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSliderBackgroundView<T0 = void, T1 = void, T2 = void> extends NSView {
    _cui_optionsForCurrentState<R = unknown>(): R;
  }
  namespace _NSSliderBackgroundView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSSliderBackgroundView>(): R;
      new: <R = _NSSliderBackgroundView>() => R;
    }
  }
}
