/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableForeignLayerStyle<T0 = void, T1 = void, T2 = void> extends _MSImmutableForeignLayerStyle {}
  namespace MSImmutableForeignLayerStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableForeignLayerStyle {
      alloc<R = MSImmutableForeignLayerStyle>(): R;
      new: <R = MSImmutableForeignLayerStyle>() => R;
    }
  }
}

declare const MSImmutableForeignLayerStyle: cocoa.MSImmutableForeignLayerStyle.CLASS;
