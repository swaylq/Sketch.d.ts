/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableForeignLayerStyle<T = any> extends _MSImmutableForeignLayerStyle {}
  namespace classes {
    export interface MSImmutableForeignLayerStyle<T = any> extends _MSImmutableForeignLayerStyle {
      alloc<R = MSImmutableForeignLayerStyle>(): R;
      new: <R = MSImmutableForeignLayerStyle>() => R;
    }
  }
}

declare const MSImmutableForeignLayerStyle: cocoa.classes.MSImmutableForeignLayerStyle;