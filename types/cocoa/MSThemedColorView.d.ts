/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSThemedColorView<T0 = void, T1 = void, T2 = void> extends MSColorView {
    color<R = unknown>(): R;
    colorName<R = NSString>(): R;
    setColorName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace MSThemedColorView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorView {
      alloc<R = MSThemedColorView>(): R;
      new: <R = MSThemedColorView>() => R;
    }
  }
}

declare const MSThemedColorView: cocoa.MSThemedColorView.CLASS;
