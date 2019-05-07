/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSUndoStack<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    removeObject<R = void, P0 = unknown>(_removeObject: P0): R;
    removeAllObjectsWithTarget<R = void, P0 = unknown>(_removeAllObjectsWithTarget: P0): R;
    removeAllObjects<R = void>(): R;
    nestingLevel<R = number>(): R;
    popAndInvoke<R = boolean>(): R;
    setDiscardable<R = void, P0 = boolean>(_setDiscardable: P0): R;
    isDiscardable<R = boolean>(): R;
    markEnd<R = void>(): R;
    markBegin<R = void>(): R;
    topUndoObject<R = unknown>(): R;
    groupIdentifier<R = unknown>(): R;
    setGroupIdentifier<R = void, P0 = unknown>(_setGroupIdentifier: P0): R;
    _beginMark<R = unknown>(): R;
    popUndoObject<R = unknown>(): R;
    push<R = void, P0 = unknown>(_push: P0): R;
    setMax<R = void, P0 = number>(_setMax: P0): R;
    count<R = number>(): R;
    max<R = number>(): R;
    dealloc<R = void>(): R;
    _removeBottom<R = void>(): R;
  }
  namespace _NSUndoStack {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSUndoStack>(): R;
      new: <R = _NSUndoStack>() => R;
    }
  }
}
