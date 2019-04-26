/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSOperationQueueInternal<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace __NSOperationQueueInternal {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = __NSOperationQueueInternal>(): R;
      new: <R = __NSOperationQueueInternal>() => R;
    }
  }
}
