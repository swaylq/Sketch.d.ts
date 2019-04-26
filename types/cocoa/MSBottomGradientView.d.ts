/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBottomGradientView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace MSBottomGradientView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSBottomGradientView>(): R;
      new: <R = MSBottomGradientView>() => R;
    }
  }
}

declare const MSBottomGradientView: cocoa.MSBottomGradientView.CLASS;
