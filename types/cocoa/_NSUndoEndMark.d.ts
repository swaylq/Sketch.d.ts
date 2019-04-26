/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSUndoEndMark<T0 = void, T1 = void, T2 = void> extends _NSUndoObject {
    description<R = unknown>(): R;
  }
  namespace _NSUndoEndMark {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSUndoObject {
      alloc<R = _NSUndoEndMark>(): R;
      new: <R = _NSUndoEndMark>() => R;
    }
  }
}
