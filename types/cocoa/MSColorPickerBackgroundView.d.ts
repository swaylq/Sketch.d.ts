/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorPickerBackgroundView<T0 = void, T1 = void, T2 = void> extends NSView {
    subViewsForResponderFixer<R = unknown>(): R;
  }
  namespace MSColorPickerBackgroundView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSColorPickerBackgroundView>(): R;
      new: <R = MSColorPickerBackgroundView>() => R;
    }
  }
}

declare const MSColorPickerBackgroundView: cocoa.MSColorPickerBackgroundView.CLASS;
