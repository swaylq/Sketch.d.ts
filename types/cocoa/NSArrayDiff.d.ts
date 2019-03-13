/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSArrayDiff<T = any> extends NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithPreviousObjects_currentObjects<R = unknown, P0 = unknown, P1 = unknown>(_initWithPreviousObjects: P0, _currentObjects: P1): R;
    movedObjectIndexes<R = NSSet>(): R;
    insertedObjectIndexes<R = NSIndexSet>(): R;
    removedObjectIndexes<R = NSIndexSet>(): R;
    empty<R = boolean>(): R;
  }
  namespace classes {
    export interface NSArrayDiff<T = any> extends NSObject {
      alloc<R = NSArrayDiff>(): R;
      new: <R = NSArrayDiff>() => R;
    }
  }
}

declare const NSArrayDiff: cocoa.classes.NSArrayDiff;
