/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOpenGLContext<T0 = void, T1 = void, T2 = void> extends NSObject, NSLockingProtocol {}
  namespace NSOpenGLContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSLockingProtocol {
      alloc<R = NSOpenGLContext>(): R;
      new: <R = NSOpenGLContext>() => R;
      clearCurrentContext<R = void>(): R;
    }
  }
}

declare const NSOpenGLContext: cocoa.NSOpenGLContext.CLASS;
