/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSegmentItemView<T0 = void, T1 = void, T2 = void> extends NSView {
    compressibleOptions<R = NSUserInterfaceCompressionOptions>(): R;
    setCompressibleOptions<R = void, P0 = NSUserInterfaceCompressionOptions>(_v: P0): R;
  }
  namespace NSSegmentItemView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSSegmentItemView>(): R;
      new: <R = NSSegmentItemView>() => R;
    }
  }
}

declare const NSSegmentItemView: cocoa.NSSegmentItemView.CLASS;
