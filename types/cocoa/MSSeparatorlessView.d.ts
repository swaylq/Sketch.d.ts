/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSeparatorlessView<T0 = void, T1 = void, T2 = void> extends NSView {
    wantsSeparator<R = boolean>(): R;
  }
  namespace MSSeparatorlessView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSSeparatorlessView>(): R;
      new: <R = MSSeparatorlessView>() => R;
    }
  }
}

declare const MSSeparatorlessView: cocoa.MSSeparatorlessView.CLASS;
