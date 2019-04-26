/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentBackgroundView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace MSAlignmentBackgroundView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSAlignmentBackgroundView>(): R;
      new: <R = MSAlignmentBackgroundView>() => R;
    }
  }
}

declare const MSAlignmentBackgroundView: cocoa.MSAlignmentBackgroundView.CLASS;
