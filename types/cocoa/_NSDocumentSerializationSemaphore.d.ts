/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentSerializationSemaphore<T0 = void, T1 = void, T2 = void> extends NSObject {
    signal<R = void>(): R;
    wait<R = void>(): R;
    dealloc<R = void>(): R;
    initWithTimeout_handler<R = unknown, P0 = number, P1 = CDUnknownBlockType>(_initWithTimeout: P0, _handler: P1): R;
  }
  namespace _NSDocumentSerializationSemaphore {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSDocumentSerializationSemaphore>(): R;
      new: <R = _NSDocumentSerializationSemaphore>() => R;
    }
  }
}
