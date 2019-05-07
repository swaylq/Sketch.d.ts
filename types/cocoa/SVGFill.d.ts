/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGFill<T0 = void, T1 = void, T2 = void> extends _SVGFill {
    setupFromString_opacity<R = void, P0 = unknown, P1 = unknown>(_setupFromString: P0, _opacity: P1): R;
  }
  namespace SVGFill {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGFill {
      alloc<R = SVGFill>(): R;
      new: <R = SVGFill>() => R;
      fillForXML_element_parent<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_fillForXML: P0, _element: P1, _parent: P2): R;
      styleDefaults<R = unknown>(): R;
    }
  }
}

declare const SVGFill: cocoa.SVGFill.CLASS;
