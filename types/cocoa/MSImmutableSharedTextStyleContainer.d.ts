/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSharedTextStyleContainer<T0 = void, T1 = void, T2 = void> extends _MSImmutableSharedTextStyleContainer {}
  namespace MSImmutableSharedTextStyleContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableSharedTextStyleContainer {
      alloc<R = MSImmutableSharedTextStyleContainer>(): R;
      new: <R = MSImmutableSharedTextStyleContainer>() => R;
    }
  }
}

declare const MSImmutableSharedTextStyleContainer: cocoa.MSImmutableSharedTextStyleContainer.CLASS;
