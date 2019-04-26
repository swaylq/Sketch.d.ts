/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSUndoBlockInvocation<T0 = void, T1 = void, T2 = void> extends _NSUndoObject {
    dealloc<R = void>(): R;
    initWithTarget_handler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_initWithTarget: P0, _handler: P1): R;
  }
  namespace _NSUndoBlockInvocation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSUndoObject {
      alloc<R = _NSUndoBlockInvocation>(): R;
      new: <R = _NSUndoBlockInvocation>() => R;
    }
  }
}
