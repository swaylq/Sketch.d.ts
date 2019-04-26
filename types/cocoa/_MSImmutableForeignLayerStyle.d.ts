/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableForeignLayerStyle<T0 = void, T1 = void, T2 = void> extends MSImmutableForeignStyle {}
  namespace _MSImmutableForeignLayerStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableForeignStyle {
      alloc<R = _MSImmutableForeignLayerStyle>(): R;
      new: <R = _MSImmutableForeignLayerStyle>() => R;
    }
  }
}
