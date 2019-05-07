/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSharedStyleContainer<T0 = void, T1 = void, T2 = void> extends MSImmutableSharedObjectContainer {}
  namespace _MSImmutableSharedStyleContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableSharedObjectContainer {
      alloc<R = _MSImmutableSharedStyleContainer>(): R;
      new: <R = _MSImmutableSharedStyleContainer>() => R;
    }
  }
}
