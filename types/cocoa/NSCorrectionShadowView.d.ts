/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCorrectionShadowView<T0 = void, T1 = void, T2 = void> extends NSView {
    dismissButtonLocation<R = number>(): R;
    setDismissButtonLocation<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSCorrectionShadowView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSCorrectionShadowView>(): R;
      new: <R = NSCorrectionShadowView>() => R;
    }
  }
}

declare const NSCorrectionShadowView: cocoa.NSCorrectionShadowView.CLASS;
