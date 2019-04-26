/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSharedStyle<T0 = void, T1 = void, T2 = void> extends _MSImmutableSharedStyle {}
  namespace MSImmutableSharedStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableSharedStyle {
      alloc<R = MSImmutableSharedStyle>(): R;
      new: <R = MSImmutableSharedStyle>() => R;
    }
  }
}

declare const MSImmutableSharedStyle: cocoa.MSImmutableSharedStyle.CLASS;
