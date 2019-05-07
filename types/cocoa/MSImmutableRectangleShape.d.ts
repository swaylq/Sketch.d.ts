/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableRectangleShape<T0 = void, T1 = void, T2 = void> extends _MSImmutableRectangleShape {
    isSVGRectangle<R = boolean>(): R;
    // + MSImmutableRectangleShape(SVGExport): 
    isSVGRectangle<R = boolean>(): R;
    simplifyPathElement_exporter_inset<R = void, P0 = unknown, P1 = unknown, P2 = number>(_simplifyPathElement: P0, _exporter: P1, _inset: P2): R;
  }
  namespace MSImmutableRectangleShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableRectangleShape {
      alloc<R = MSImmutableRectangleShape>(): R;
      new: <R = MSImmutableRectangleShape>() => R;
  
  }
  }
}

declare const MSImmutableRectangleShape: cocoa.MSImmutableRectangleShape.CLASS;
