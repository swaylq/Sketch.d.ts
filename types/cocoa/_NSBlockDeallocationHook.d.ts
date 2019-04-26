/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBlockDeallocationHook<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace _NSBlockDeallocationHook {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSBlockDeallocationHook>(): R;
      new: <R = _NSBlockDeallocationHook>() => R;
      withBlock<R = unknown, P0 = CDUnknownBlockType>(_withBlock: P0): R;
    }
  }
}
