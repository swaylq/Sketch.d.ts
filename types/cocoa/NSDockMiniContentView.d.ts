/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDockMiniContentView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace NSDockMiniContentView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSDockMiniContentView>(): R;
      new: <R = NSDockMiniContentView>() => R;
    }
  }
}

declare const NSDockMiniContentView: cocoa.NSDockMiniContentView.CLASS;
