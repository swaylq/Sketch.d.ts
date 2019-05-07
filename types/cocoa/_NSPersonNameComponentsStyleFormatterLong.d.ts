/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsStyleFormatterLong<T0 = void, T1 = void, T2 = void> extends _NSPersonNameComponentsStyleFormatter {
    fallbackStyleFormatter<R = unknown>(): R;
    keysOfInterest<R = unknown>(): R;
  }
  namespace _NSPersonNameComponentsStyleFormatterLong {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSPersonNameComponentsStyleFormatter {
      alloc<R = _NSPersonNameComponentsStyleFormatterLong>(): R;
      new: <R = _NSPersonNameComponentsStyleFormatterLong>() => R;
    }
  }
}
