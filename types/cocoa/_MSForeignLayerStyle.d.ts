/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSForeignLayerStyle<T = any> extends cocoa.MSForeignStyle {}
  namespace classes {
    export interface _MSForeignLayerStyle<T = any> extends cocoa.classes.MSForeignStyle {
      alloc<R = _MSForeignLayerStyle>(): R;
      new: <R = _MSForeignLayerStyle>() => R;
    }
  }
}
