/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPipe<T0 = void, T1 = void, T2 = void> extends NSObject {
    _closeOnDealloc<R = void>(): R;
    fileHandleForWriting<R = NSFileHandle>(): R;
    fileHandleForReading<R = NSFileHandle>(): R;
  }
  namespace NSPipe {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPipe>(): R;
      new: <R = NSPipe>() => R;
      pipe<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSPipe: cocoa.NSPipe.CLASS;
