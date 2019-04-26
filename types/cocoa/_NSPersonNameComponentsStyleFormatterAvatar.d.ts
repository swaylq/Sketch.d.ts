/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsStyleFormatterAvatar<T0 = void, T1 = void, T2 = void> extends _NSPersonNameComponentsStyleFormatterShort {
    shouldFallBack<R = boolean>(): R;
  }
  namespace _NSPersonNameComponentsStyleFormatterAvatar {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSPersonNameComponentsStyleFormatterShort {
      alloc<R = _NSPersonNameComponentsStyleFormatterAvatar>(): R;
      new: <R = _NSPersonNameComponentsStyleFormatterAvatar>() => R;
    }
  }
}
