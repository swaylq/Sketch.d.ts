/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewWindowBackingStoreBuffer<T0 = void, T1 = void, T2 = void> extends NSViewBuffer {
    dealloc<R = void>(): R;
  }
  namespace NSViewWindowBackingStoreBuffer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewBuffer {
      alloc<R = NSViewWindowBackingStoreBuffer>(): R;
      new: <R = NSViewWindowBackingStoreBuffer>() => R;
    }
  }
}

declare const NSViewWindowBackingStoreBuffer: cocoa.NSViewWindowBackingStoreBuffer.CLASS;
