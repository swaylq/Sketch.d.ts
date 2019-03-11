/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLQueue<T = any> extends cocoa.NSObject {
    setWaitOnTake<R = void, P0 = boolean>(_setWaitOnTake: P0): R;
    waitOnTake<R = boolean>(): R;
    count<R = number>(): R;
    isEmpty<R = boolean>(): R;
    indexOf<R = number, P0 = unknown>(_indexOf: P0): R;
    clear<R = void>(): R;
    remove<R = boolean, P0 = unknown>(_remove: P0): R;
    peekAt<R = unknown, P0 = number>(_peekAt: P0): R;
    peek<R = unknown>(): R;
    take<R = unknown>(): R;
    put<R = void, P0 = unknown>(_put: P0): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSURLQueue<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSURLQueue>(): R;
      new: <R = NSURLQueue>() => R;
      newNode<R = unknown>(): R;
    }
  }
}

declare const NSURLQueue: cocoa.classes.NSURLQueue;
