/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTiledImageView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace MSTiledImageView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSTiledImageView>(): R;
      new: <R = MSTiledImageView>() => R;
    }
  }
}

declare const MSTiledImageView: cocoa.MSTiledImageView.CLASS;
