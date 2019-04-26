/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSUndoBeginMark<T0 = void, T1 = void, T2 = void> extends _NSUndoObject {
    description<R = unknown>(): R;
    setDiscardable<R = void, P0 = boolean>(_setDiscardable: P0): R;
    isDiscardable<R = boolean>(): R;
    groupIdentifier<R = unknown>(): R;
    setGroupIdentifier<R = void, P0 = unknown>(_setGroupIdentifier: P0): R;
    dealloc<R = void>(): R;
  }
  namespace _NSUndoBeginMark {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSUndoObject {
      alloc<R = _NSUndoBeginMark>(): R;
      new: <R = _NSUndoBeginMark>() => R;
    }
  }
}
