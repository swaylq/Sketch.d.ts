/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentWindowContentView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace MSDocumentWindowContentView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSDocumentWindowContentView>(): R;
      new: <R = MSDocumentWindowContentView>() => R;
    }
  }
}

declare const MSDocumentWindowContentView: cocoa.MSDocumentWindowContentView.CLASS;
