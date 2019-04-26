/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSArrayDiff<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithPreviousObjects_currentObjects<R = unknown, P0 = unknown, P1 = unknown>(_initWithPreviousObjects: P0, _currentObjects: P1): R;
    movedObjectIndexes<R = NSSet>(): R;
    insertedObjectIndexes<R = NSIndexSet>(): R;
    removedObjectIndexes<R = NSIndexSet>(): R;
    empty<R = boolean>(): R;
  }
  namespace NSArrayDiff {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSArrayDiff>(): R;
      new: <R = NSArrayDiff>() => R;
    }
  }
}

declare const NSArrayDiff: cocoa.NSArrayDiff.CLASS;
