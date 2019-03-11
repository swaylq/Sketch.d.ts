/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsStyleFormatterShort<T = any> extends cocoa._NSPersonNameComponentsStyleFormatter {
    isEnabled<R = boolean>(): R;
    fallbackStyleFormatter<R = unknown>(): R;
    orderedKeysOfInterest<R = unknown>(): R;
    keysOfInterest<R = unknown>(): R;
    abbreviatedKeys<R = unknown>(): R;
    subFormatter<R = cocoa._NSPersonNameComponentsStyleFormatter>(): R;
    setSubFormatter<R = void, P0 = cocoa._NSPersonNameComponentsStyleFormatter>(_v: P0): R;
    variantFormatter<R = cocoa._NSPersonNameComponentsStyleFormatterShortVariantGeneral>(): R;
    shortNameFormat<R = number>(): R;
    setShortNameFormat<R = void, P0 = number>(_v: P0): R;
    forceShortNameEnabled<R = boolean>(): R;
    setForceShortNameEnabled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSPersonNameComponentsStyleFormatterShort<T = any> extends cocoa.classes._NSPersonNameComponentsStyleFormatter {
      alloc<R = _NSPersonNameComponentsStyleFormatterShort>(): R;
      new: <R = _NSPersonNameComponentsStyleFormatterShort>() => R;
    }
  }
}
