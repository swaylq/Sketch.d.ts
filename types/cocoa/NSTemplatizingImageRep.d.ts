/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTemplatizingImageRep<T0 = void, T1 = void, T2 = void> extends NSImageRep {
    initWithSourceImage<R = unknown, P0 = unknown>(_initWithSourceImage: P0): R;
  }
  namespace NSTemplatizingImageRep {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageRep {
      alloc<R = NSTemplatizingImageRep>(): R;
      new: <R = NSTemplatizingImageRep>() => R;
    }
  }
}

declare const NSTemplatizingImageRep: cocoa.NSTemplatizingImageRep.CLASS;
