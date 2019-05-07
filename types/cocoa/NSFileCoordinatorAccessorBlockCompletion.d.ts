/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileCoordinatorAccessorBlockCompletion<T0 = void, T1 = void, T2 = void> extends NSObject {
    decrement<R = void>(): R;
    increment<R = void>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSFileCoordinatorAccessorBlockCompletion {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFileCoordinatorAccessorBlockCompletion>(): R;
      new: <R = NSFileCoordinatorAccessorBlockCompletion>() => R;
      completionWithBlock<R = unknown, P0 = CDUnknownBlockType>(_completionWithBlock: P0): R;
    }
  }
}

declare const NSFileCoordinatorAccessorBlockCompletion: cocoa.NSFileCoordinatorAccessorBlockCompletion.CLASS;
