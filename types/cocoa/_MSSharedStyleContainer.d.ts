/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSharedStyleContainer<T0 = void, T1 = void, T2 = void> extends MSSharedObjectContainer {}
  namespace _MSSharedStyleContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSharedObjectContainer {
      alloc<R = _MSSharedStyleContainer>(): R;
      new: <R = _MSSharedStyleContainer>() => R;
    }
  }
}
