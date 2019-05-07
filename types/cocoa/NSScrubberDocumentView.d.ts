/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberDocumentView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace NSScrubberDocumentView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSScrubberDocumentView>(): R;
      new: <R = NSScrubberDocumentView>() => R;
    }
  }
}

declare const NSScrubberDocumentView: cocoa.NSScrubberDocumentView.CLASS;
