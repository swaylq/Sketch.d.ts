/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSUndoInvocation<T0 = void, T1 = void, T2 = void> extends _NSUndoObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithTarget_invocation<R = unknown, P0 = unknown, P1 = unknown>(_initWithTarget: P0, _invocation: P1): R;
  }
  namespace _NSUndoInvocation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSUndoObject {
      alloc<R = _NSUndoInvocation>(): R;
      new: <R = _NSUndoInvocation>() => R;
    }
  }
}
