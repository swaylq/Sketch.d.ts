/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDockFrameView<T0 = void, T1 = void, T2 = void> extends NSView {
    isOpaque<R = boolean>(): R;
  }
  namespace NSDockFrameView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSDockFrameView>(): R;
      new: <R = NSDockFrameView>() => R;
    }
  }
}

declare const NSDockFrameView: cocoa.NSDockFrameView.CLASS;
