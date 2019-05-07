/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsStyleFormatterShortVariantGeneral<T0 = void, T1 = void, T2 = void> extends _NSPersonNameComponentsStyleFormatter {
    fallbackStyleFormatter<R = unknown>(): R;
    shortNameFormat<R = number>(): R;
  }
  namespace _NSPersonNameComponentsStyleFormatterShortVariantGeneral {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSPersonNameComponentsStyleFormatter {
      alloc<R = _NSPersonNameComponentsStyleFormatterShortVariantGeneral>(): R;
      new: <R = _NSPersonNameComponentsStyleFormatterShortVariantGeneral>() => R;
    }
  }
}
