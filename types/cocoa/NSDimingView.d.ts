/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDimingView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace NSDimingView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSDimingView>(): R;
      new: <R = NSDimingView>() => R;
    }
  }
}

declare const NSDimingView: cocoa.NSDimingView.CLASS;
