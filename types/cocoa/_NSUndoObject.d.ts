/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSUndoObject<T0 = void, T1 = void, T2 = void> extends NSObject {
    target<R = unknown>(): R;
    invoke<R = void>(): R;
    isEndMark<R = boolean>(): R;
    isBeginMark<R = boolean>(): R;
    initWithTarget<R = unknown, P0 = unknown>(_initWithTarget: P0): R;
  }
  namespace _NSUndoObject {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSUndoObject>(): R;
      new: <R = _NSUndoObject>() => R;
    }
  }
}
