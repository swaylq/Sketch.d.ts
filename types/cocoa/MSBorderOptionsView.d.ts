/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBorderOptionsView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace MSBorderOptionsView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSBorderOptionsView>(): R;
      new: <R = MSBorderOptionsView>() => R;
    }
  }
}

declare const MSBorderOptionsView: cocoa.MSBorderOptionsView.CLASS;
