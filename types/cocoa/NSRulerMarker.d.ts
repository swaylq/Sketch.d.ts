/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRulerMarker<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {}
  namespace NSRulerMarker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
      alloc<R = NSRulerMarker>(): R;
      new: <R = NSRulerMarker>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSRulerMarker: cocoa.NSRulerMarker.CLASS;
