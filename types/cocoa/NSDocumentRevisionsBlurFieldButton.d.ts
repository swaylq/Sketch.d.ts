/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsBlurFieldButton<T0 = void, T1 = void, T2 = void> extends NSButton {}
  namespace NSDocumentRevisionsBlurFieldButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = NSDocumentRevisionsBlurFieldButton>(): R;
      new: <R = NSDocumentRevisionsBlurFieldButton>() => R;
    }
  }
}

declare const NSDocumentRevisionsBlurFieldButton: cocoa.NSDocumentRevisionsBlurFieldButton.CLASS;
