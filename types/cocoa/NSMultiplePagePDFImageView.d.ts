/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMultiplePagePDFImageView<T0 = void, T1 = void, T2 = void> extends NSView {
    setImageRep<R = void, P0 = unknown>(_setImageRep: P0): R;
    imageRep<R = unknown>(): R;
    numberOfPages<R = number>(): R;
    isOpaque<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
  }
  namespace NSMultiplePagePDFImageView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSMultiplePagePDFImageView>(): R;
      new: <R = NSMultiplePagePDFImageView>() => R;
    }
  }
}

declare const NSMultiplePagePDFImageView: cocoa.NSMultiplePagePDFImageView.CLASS;
