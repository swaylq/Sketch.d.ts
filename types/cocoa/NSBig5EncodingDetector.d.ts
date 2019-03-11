/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBig5EncodingDetector<T = any> extends cocoa.NSEncodingDetector {}
  namespace classes {
    export interface NSBig5EncodingDetector<T = any> extends cocoa.classes.NSEncodingDetector {
      alloc<R = NSBig5EncodingDetector>(): R;
      new: <R = NSBig5EncodingDetector>() => R;
    }
  }
}

declare const NSBig5EncodingDetector: cocoa.classes.NSBig5EncodingDetector;
