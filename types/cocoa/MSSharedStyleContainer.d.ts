/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStyleContainer<T0 = void, T1 = void, T2 = void> extends _MSSharedStyleContainer {
    sharedStyles<R = unknown>(): R;
    numberOfSharedStyles<R = number>(): R;
    indexOfSharedStyle<R = number, P0 = unknown>(_indexOfSharedStyle: P0): R;
    sharedStyleAtIndex<R = unknown, P0 = number>(_sharedStyleAtIndex: P0): R;
    sharedStyleWithID<R = unknown, P0 = unknown>(_sharedStyleWithID: P0): R;
    removeSharedStyle<R = void, P0 = unknown>(_removeSharedStyle: P0): R;
    validStyleType<R = number>(): R;
  }
  namespace MSSharedStyleContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSSharedStyleContainer {
      alloc<R = MSSharedStyleContainer>(): R;
      new: <R = MSSharedStyleContainer>() => R;
    }
  }
}

declare const MSSharedStyleContainer: cocoa.MSSharedStyleContainer.CLASS;
