/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNullFileHandle<T0 = void, T1 = void, T2 = void> extends NSFileHandle {
    offsetInFile<R = number>(): R;
    availableData<R = unknown>(): R;
  }
  namespace NSNullFileHandle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFileHandle {
      alloc<R = NSNullFileHandle>(): R;
      new: <R = NSNullFileHandle>() => R;
    }
  }
}

declare const NSNullFileHandle: cocoa.NSNullFileHandle.CLASS;
