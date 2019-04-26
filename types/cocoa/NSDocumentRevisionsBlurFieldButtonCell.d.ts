/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsBlurFieldButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {}
  namespace NSDocumentRevisionsBlurFieldButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = NSDocumentRevisionsBlurFieldButtonCell>(): R;
      new: <R = NSDocumentRevisionsBlurFieldButtonCell>() => R;
    }
  }
}

declare const NSDocumentRevisionsBlurFieldButtonCell: cocoa.NSDocumentRevisionsBlurFieldButtonCell.CLASS;
