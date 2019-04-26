/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsStyleFormatterFamilyOnlyVariant<T0 = void, T1 = void, T2 = void> extends _NSPersonNameComponentsStyleFormatterShortVariantGeneral {
    abbreviatedKeys<R = unknown>(): R;
    keysOfInterest<R = unknown>(): R;
    shortNameFormat<R = number>(): R;
  }
  namespace _NSPersonNameComponentsStyleFormatterFamilyOnlyVariant {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSPersonNameComponentsStyleFormatterShortVariantGeneral {
      alloc<R = _NSPersonNameComponentsStyleFormatterFamilyOnlyVariant>(): R;
      new: <R = _NSPersonNameComponentsStyleFormatterFamilyOnlyVariant>() => R;
    }
  }
}
