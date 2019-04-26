/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageViewWithWritableAlignmentRectInsets<T0 = void, T1 = void, T2 = void> extends NSImageView {
    alignmentRectInsets<R = NSEdgeInsets>(): R;
    setAlignmentRectInsets<R = void, P0 = NSEdgeInsets>(_v: P0): R;
  }
  namespace NSImageViewWithWritableAlignmentRectInsets {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageView {
      alloc<R = NSImageViewWithWritableAlignmentRectInsets>(): R;
      new: <R = NSImageViewWithWritableAlignmentRectInsets>() => R;
    }
  }
}

declare const NSImageViewWithWritableAlignmentRectInsets: cocoa.NSImageViewWithWritableAlignmentRectInsets.CLASS;
