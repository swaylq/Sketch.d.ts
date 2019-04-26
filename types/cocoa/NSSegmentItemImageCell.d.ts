/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSegmentItemImageCell<T0 = void, T1 = void, T2 = void> extends NSImageCell {
    backgroundStyle<R = number>(): R;
    setBackgroundStyle<R = void, P0 = number>(_v: P0): R;
    imageState<R = number>(): R;
    setImageState<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSSegmentItemImageCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageCell {
      alloc<R = NSSegmentItemImageCell>(): R;
      new: <R = NSSegmentItemImageCell>() => R;
    }
  }
}

declare const NSSegmentItemImageCell: cocoa.NSSegmentItemImageCell.CLASS;
