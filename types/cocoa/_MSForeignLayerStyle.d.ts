/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSForeignLayerStyle<T0 = void, T1 = void, T2 = void> extends MSForeignStyle {}
  namespace _MSForeignLayerStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSForeignStyle {
      alloc<R = _MSForeignLayerStyle>(): R;
      new: <R = _MSForeignLayerStyle>() => R;
    }
  }
}
