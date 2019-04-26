/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedTextStyleContainer<T0 = void, T1 = void, T2 = void> extends _MSSharedTextStyleContainer {}
  namespace MSSharedTextStyleContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSSharedTextStyleContainer {
      alloc<R = MSSharedTextStyleContainer>(): R;
      new: <R = MSSharedTextStyleContainer>() => R;
    }
  }
}

declare const MSSharedTextStyleContainer: cocoa.MSSharedTextStyleContainer.CLASS;
