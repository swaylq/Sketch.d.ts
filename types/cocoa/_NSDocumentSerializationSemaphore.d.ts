/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentSerializationSemaphore<T = any> extends cocoa.NSObject {
    signal<R = void>(): R;
    wait<R = void>(): R;
    dealloc<R = void>(): R;
    initWithTimeout_handler<R = unknown, P0 = number, P1 = cocoa.CDUnknownBlockType>(_initWithTimeout: P0, _handler: P1): R;
  }
  namespace classes {
    export interface _NSDocumentSerializationSemaphore<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSDocumentSerializationSemaphore>(): R;
      new: <R = _NSDocumentSerializationSemaphore>() => R;
    }
  }
}
