/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableForeignStyle<T0 = void, T1 = void, T2 = void> extends _MSImmutableForeignStyle {}
  namespace MSImmutableForeignStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableForeignStyle {
      alloc<R = MSImmutableForeignStyle>(): R;
      new: <R = MSImmutableForeignStyle>() => R;
    }
  }
}

declare const MSImmutableForeignStyle: cocoa.MSImmutableForeignStyle.CLASS;
