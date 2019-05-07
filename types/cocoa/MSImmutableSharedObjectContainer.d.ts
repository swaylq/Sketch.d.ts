/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSharedObjectContainer<T0 = void, T1 = void, T2 = void> extends _MSImmutableSharedObjectContainer {}
  namespace MSImmutableSharedObjectContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableSharedObjectContainer {
      alloc<R = MSImmutableSharedObjectContainer>(): R;
      new: <R = MSImmutableSharedObjectContainer>() => R;
    }
  }
}

declare const MSImmutableSharedObjectContainer: cocoa.MSImmutableSharedObjectContainer.CLASS;
