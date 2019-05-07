/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSharedStyle<T0 = void, T1 = void, T2 = void> extends MSImmutableSharedObject {}
  namespace _MSImmutableSharedStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableSharedObject {
      alloc<R = _MSImmutableSharedStyle>(): R;
      new: <R = _MSImmutableSharedStyle>() => R;
    }
  }
}
