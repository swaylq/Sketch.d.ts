/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMemoryBuffer<T0 = void, T1 = void, T2 = void> extends NSObject {
    zerofill<R = void, P0 = number>(_zerofill: P0): R;
    dealloc<R = void>(): R;
    initWithSize<R = unknown, P0 = number>(_initWithSize: P0): R;
    bytes<R = void>(): R;
    size<R = number>(): R;
  }
  namespace MSMemoryBuffer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSMemoryBuffer>(): R;
      new: <R = MSMemoryBuffer>() => R;
    }
  }
}

declare const MSMemoryBuffer: cocoa.MSMemoryBuffer.CLASS;
