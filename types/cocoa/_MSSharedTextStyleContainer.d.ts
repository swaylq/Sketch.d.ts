/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSharedTextStyleContainer<T0 = void, T1 = void, T2 = void> extends MSSharedStyleContainer {}
  namespace _MSSharedTextStyleContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSharedStyleContainer {
      alloc<R = _MSSharedTextStyleContainer>(): R;
      new: <R = _MSSharedTextStyleContainer>() => R;
    }
  }
}
