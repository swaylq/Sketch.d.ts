/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSegmentItemImageView<T0 = void, T1 = void, T2 = void> extends NSImageView {
    _preferredAppearance<R = unknown>(): R;
    _defaultVibrancyBlendMode<R = number>(): R;
  }
  namespace NSSegmentItemImageView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageView {
      alloc<R = NSSegmentItemImageView>(): R;
      new: <R = NSSegmentItemImageView>() => R;
    }
  }
}

declare const NSSegmentItemImageView: cocoa.NSSegmentItemImageView.CLASS;
