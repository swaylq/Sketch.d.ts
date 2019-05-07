/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOneLevelViewBuffer<T0 = void, T1 = void, T2 = void> extends NSViewBuffer {
    dealloc<R = void>(): R;
  }
  namespace NSOneLevelViewBuffer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewBuffer {
      alloc<R = NSOneLevelViewBuffer>(): R;
      new: <R = NSOneLevelViewBuffer>() => R;
    }
  }
}

declare const NSOneLevelViewBuffer: cocoa.NSOneLevelViewBuffer.CLASS;
