/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCorrectionTypedTextHighlightView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace NSCorrectionTypedTextHighlightView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSCorrectionTypedTextHighlightView>(): R;
      new: <R = NSCorrectionTypedTextHighlightView>() => R;
    }
  }
}

declare const NSCorrectionTypedTextHighlightView: cocoa.NSCorrectionTypedTextHighlightView.CLASS;
