/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGFont<T0 = void, T1 = void, T2 = void> extends _SVGFont {
    representedFont<R = unknown>(): R;
  }
  namespace SVGFont {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGFont {
      alloc<R = SVGFont>(): R;
      new: <R = SVGFont>() => R;
      fontForXML_element_parent<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_fontForXML: P0, _element: P1, _parent: P2): R;
      styleDefaults<R = unknown>(): R;
    }
  }
}

declare const SVGFont: cocoa.SVGFont.CLASS;
