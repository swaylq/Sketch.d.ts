/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewBuffer<T0 = void, T1 = void, T2 = void> extends NSObject {
    restore<R = boolean>(): R;
    cacheRect<R = boolean, P0 = CGRect>(_cacheRect: P0): R;
    validate<R = void>(): R;
    invalidate<R = void>(): R;
    isValid<R = boolean>(): R;
    initWithView<R = unknown, P0 = unknown>(_initWithView: P0): R;
  }
  namespace NSViewBuffer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSViewBuffer>(): R;
      new: <R = NSViewBuffer>() => R;
    }
  }
}

declare const NSViewBuffer: cocoa.NSViewBuffer.CLASS;
