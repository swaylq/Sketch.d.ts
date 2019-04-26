/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSymbol<T0 = void, T1 = void, T2 = void> extends MSImmutableSharedObject {}
  namespace _MSImmutableSymbol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableSharedObject {
      alloc<R = _MSImmutableSymbol>(): R;
      new: <R = _MSImmutableSymbol>() => R;
    }
  }
}
