/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsStyleFormatterAbbreviated<T0 = void, T1 = void, T2 = void> extends _NSPersonNameComponentsStyleFormatter {
    fallbackStyleFormatter<R = unknown>(): R;
    shouldIgnoreComponentsContainingSpecialCharacters<R = boolean>(): R;
    keysOfInterest<R = unknown>(): R;
    abbreviatedKeys<R = unknown>(): R;
  }
  namespace _NSPersonNameComponentsStyleFormatterAbbreviated {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSPersonNameComponentsStyleFormatter {
      alloc<R = _NSPersonNameComponentsStyleFormatterAbbreviated>(): R;
      new: <R = _NSPersonNameComponentsStyleFormatterAbbreviated>() => R;
    }
  }
}
