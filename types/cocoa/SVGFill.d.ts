/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGFill<T = any> extends cocoa._SVGFill {
    setupFromString_opacity<R = void, P0 = unknown, P1 = unknown>(_setupFromString: P0, _opacity: P1): R;
  }
  namespace classes {
    export interface SVGFill<T = any> extends cocoa.classes._SVGFill {
      alloc<R = SVGFill>(): R;
      new: <R = SVGFill>() => R;
      fillForXML_element_parent<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_fillForXML: P0, _element: P1, _parent: P2): R;
      styleDefaults<R = unknown>(): R;
    }
  }
}

declare const SVGFill: cocoa.classes.SVGFill;
