/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSharedStyleContainer<T0 = void, T1 = void, T2 = void> extends _MSImmutableSharedStyleContainer {}
  namespace MSImmutableSharedStyleContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableSharedStyleContainer {
      alloc<R = MSImmutableSharedStyleContainer>(): R;
      new: <R = MSImmutableSharedStyleContainer>() => R;
    }
  }
}

declare const MSImmutableSharedStyleContainer: cocoa.MSImmutableSharedStyleContainer.CLASS;
