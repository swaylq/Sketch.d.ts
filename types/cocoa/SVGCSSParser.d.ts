/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGCSSParser<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace SVGCSSParser {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = SVGCSSParser>(): R;
      new: <R = SVGCSSParser>() => R;
      mergeStylesheet_withExisting<R = unknown, P0 = unknown, P1 = unknown>(_mergeStylesheet: P0, _withExisting: P1): R;
      dictionaryByMergingStyles_into_forKey<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_dictionaryByMergingStyles: P0, _into: P1, _forKey: P2): R;
      parseCSSAttributeList<R = unknown, P0 = unknown>(_parseCSSAttributeList: P0): R;
    }
  }
}

declare const SVGCSSParser: cocoa.SVGCSSParser.CLASS;
