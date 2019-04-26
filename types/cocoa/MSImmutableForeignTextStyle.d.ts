/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableForeignTextStyle<T0 = void, T1 = void, T2 = void> extends _MSImmutableForeignTextStyle {}
  namespace MSImmutableForeignTextStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableForeignTextStyle {
      alloc<R = MSImmutableForeignTextStyle>(): R;
      new: <R = MSImmutableForeignTextStyle>() => R;
    }
  }
}

declare const MSImmutableForeignTextStyle: cocoa.MSImmutableForeignTextStyle.CLASS;
