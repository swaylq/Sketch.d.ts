/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSForeignTextStyle<T0 = void, T1 = void, T2 = void> extends MSForeignStyle {}
  namespace _MSForeignTextStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSForeignStyle {
      alloc<R = _MSForeignTextStyle>(): R;
      new: <R = _MSForeignTextStyle>() => R;
    }
  }
}
