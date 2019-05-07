/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMorphingDragImageView<T0 = void, T1 = void, T2 = void> extends NSView {
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace NSMorphingDragImageView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSMorphingDragImageView>(): R;
      new: <R = NSMorphingDragImageView>() => R;
    }
  }
}

declare const NSMorphingDragImageView: cocoa.NSMorphingDragImageView.CLASS;
