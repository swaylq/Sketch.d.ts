/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTimerBlockTarget<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    fire<R = void, P0 = unknown>(_fire: P0): R;
    initWithBlock<R = unknown, P0 = CDUnknownBlockType>(_initWithBlock: P0): R;
  }
  namespace _NSTimerBlockTarget {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSTimerBlockTarget>(): R;
      new: <R = _NSTimerBlockTarget>() => R;
    }
  }
}
