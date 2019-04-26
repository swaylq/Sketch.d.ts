/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBlockActionTarget<T0 = void, T1 = void, T2 = void> extends NSObject {
    receiveAction<R = void, P0 = unknown>(_receiveAction: P0): R;
    dealloc<R = void>(): R;
  }
  namespace _NSBlockActionTarget {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSBlockActionTarget>(): R;
      new: <R = _NSBlockActionTarget>() => R;
      blockActionTargetWithHandler<R = unknown, P0 = CDUnknownBlockType>(_blockActionTargetWithHandler: P0): R;
    }
  }
}
