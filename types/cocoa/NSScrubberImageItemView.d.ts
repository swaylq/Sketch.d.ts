/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberImageItemView<T0 = void, T1 = void, T2 = void> extends NSScrubberItemView {
    imageView<R = NSImageView>(): R;
    imageAlignment<R = number>(): R;
    setImageAlignment<R = void, P0 = number>(_v: P0): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace NSScrubberImageItemView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrubberItemView {
      alloc<R = NSScrubberImageItemView>(): R;
      new: <R = NSScrubberImageItemView>() => R;
    }
  }
}

declare const NSScrubberImageItemView: cocoa.NSScrubberImageItemView.CLASS;
