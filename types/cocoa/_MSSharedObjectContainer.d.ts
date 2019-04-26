/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSharedObjectContainer<T0 = void, T1 = void, T2 = void> extends MSModelObject {
    moveSharedObjectIndex_toIndex<R = void, P0 = number, P1 = number>(_moveSharedObjectIndex: P0, _toIndex: P1): R;
    removeAllSharedObjects<R = void>(): R;
    removeSharedObjectsAtIndexes<R = void, P0 = unknown>(_removeSharedObjectsAtIndexes: P0): R;
    removeSharedObjectAtIndex<R = void, P0 = number>(_removeSharedObjectAtIndex: P0): R;
    removeSharedObject<R = void, P0 = unknown>(_removeSharedObject: P0): R;
    insertSharedObjects_afterSharedObject<R = void, P0 = unknown, P1 = unknown>(_insertSharedObjects: P0, _afterSharedObject: P1): R;
    insertSharedObject_afterSharedObject<R = void, P0 = unknown, P1 = unknown>(_insertSharedObject: P0, _afterSharedObject: P1): R;
    insertSharedObjects_beforeSharedObject<R = void, P0 = unknown, P1 = unknown>(_insertSharedObjects: P0, _beforeSharedObject: P1): R;
    insertSharedObject_beforeSharedObject<R = void, P0 = unknown, P1 = unknown>(_insertSharedObject: P0, _beforeSharedObject: P1): R;
    insertSharedObject_atIndex<R = void, P0 = unknown, P1 = number>(_insertSharedObject: P0, _atIndex: P1): R;
    addSharedObjects<R = void, P0 = unknown>(_addSharedObjects: P0): R;
    addSharedObject<R = void, P0 = unknown>(_addSharedObject: P0): R;
    hasDefaultValues<R = boolean>(): R;
    objects<R = NSArray>(): R;
    setObjects<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace _MSSharedObjectContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSModelObject {
      alloc<R = _MSSharedObjectContainer>(): R;
      new: <R = _MSSharedObjectContainer>() => R;
    }
  }
}
