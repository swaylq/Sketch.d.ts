/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcretePipe<T0 = void, T1 = void, T2 = void> extends NSPipe {
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    dealloc<R = void>(): R;
    fileHandleForWriting<R = unknown>(): R;
    fileHandleForReading<R = unknown>(): R;
  }
  namespace NSConcretePipe {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPipe {
      alloc<R = NSConcretePipe>(): R;
      new: <R = NSConcretePipe>() => R;
    }
  }
}

declare const NSConcretePipe: cocoa.NSConcretePipe.CLASS;
