/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableOvalShape<T0 = void, T1 = void, T2 = void> extends _MSImmutableOvalShape {
    // + MSImmutableOvalShape(SVGExport): 
    simplifyPathElement_exporter_inset<R = void, P0 = unknown, P1 = unknown, P2 = number>(_simplifyPathElement: P0, _exporter: P1, _inset: P2): R;
  }
  namespace MSImmutableOvalShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableOvalShape {
      alloc<R = MSImmutableOvalShape>(): R;
      new: <R = MSImmutableOvalShape>() => R;
  
  }
  }
}

declare const MSImmutableOvalShape: cocoa.MSImmutableOvalShape.CLASS;
