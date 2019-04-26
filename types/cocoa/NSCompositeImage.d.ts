/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCompositeImage<T0 = void, T1 = void, T2 = void> extends NSImage {
    description<R = unknown>(): R;
  }
  namespace NSCompositeImage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImage {
      alloc<R = NSCompositeImage>(): R;
      new: <R = NSCompositeImage>() => R;
      compositeImageWithConstituentImages<R = unknown, P0 = unknown>(_compositeImageWithConstituentImages: P0): R;
    }
  }
}

declare const NSCompositeImage: cocoa.NSCompositeImage.CLASS;
