/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRulerViewPrivateData<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace NSRulerViewPrivateData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSRulerViewPrivateData>(): R;
      new: <R = NSRulerViewPrivateData>() => R;
    }
  }
}

declare const NSRulerViewPrivateData: cocoa.NSRulerViewPrivateData.CLASS;
