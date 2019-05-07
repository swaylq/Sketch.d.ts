/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsStyleFormatterNicknameVariant<T0 = void, T1 = void, T2 = void> extends _NSPersonNameComponentsStyleFormatter {
    abbreviatedKeys<R = unknown>(): R;
    orderedTemplate<R = unknown>(): R;
    keysOfInterest<R = unknown>(): R;
  }
  namespace _NSPersonNameComponentsStyleFormatterNicknameVariant {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSPersonNameComponentsStyleFormatter {
      alloc<R = _NSPersonNameComponentsStyleFormatterNicknameVariant>(): R;
      new: <R = _NSPersonNameComponentsStyleFormatterNicknameVariant>() => R;
    }
  }
}
