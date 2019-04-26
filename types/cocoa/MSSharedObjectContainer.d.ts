/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedObjectContainer<T0 = void, T1 = void, T2 = void> extends _MSSharedObjectContainer {
    objectsSortedByName<R = unknown>(): R;
    numberOfSharedObjects<R = number>(): R;
    indexOfSharedObject<R = number, P0 = unknown>(_indexOfSharedObject: P0): R;
    sharedObjectAtIndex<R = unknown, P0 = number>(_sharedObjectAtIndex: P0): R;
    sharedObjectWithID<R = unknown, P0 = unknown>(_sharedObjectWithID: P0): R;
    objectsReferencing_inContainer<R = unknown, P0 = unknown, P1 = unknown>(_objectsReferencing: P0, _inContainer: P1): R;
    removeSharedObjects<R = void, P0 = unknown>(_removeSharedObjects: P0): R;
    sharedObjectClass<R = unknown>(): R;
  }
  namespace MSSharedObjectContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSSharedObjectContainer {
      alloc<R = MSSharedObjectContainer>(): R;
      new: <R = MSSharedObjectContainer>() => R;
    }
  }
}

declare const MSSharedObjectContainer: cocoa.MSSharedObjectContainer.CLASS;
