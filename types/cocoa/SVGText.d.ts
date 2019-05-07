/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGText<T0 = void, T1 = void, T2 = void> extends _SVGText {
    doubleValueFromXML_attributeWithName_orParent<R = number, P0 = unknown, P1 = unknown, P2 = unknown>(_doubleValueFromXML: P0, _attributeWithName: P1, _orParent: P2): R;
  }
  namespace SVGText {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGText {
      alloc<R = SVGText>(): R;
      new: <R = SVGText>() => R;
    }
  }
}

declare const SVGText: cocoa.SVGText.CLASS;
