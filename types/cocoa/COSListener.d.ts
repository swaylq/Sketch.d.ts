/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface COSListener<T0 = void, T1 = void, T2 = void> extends NSObject {
    rootObject<R = unknown>(): R;
    setRootObject<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace COSListener {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = COSListener>(): R;
      new: <R = COSListener>() => R;
      sharedListener<R = COSListener>(): R;
      listen<R = void>(): R;
      listenWithRootObject<R = void, P0 = unknown>(_listenWithRootObject: P0): R;
    }
  }
}

declare const COSListener: cocoa.COSListener.CLASS;
