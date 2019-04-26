/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPNGExporter<T0 = void, T1 = void, T2 = void> extends MSExporter {}
  namespace MSPNGExporter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSExporter {
      alloc<R = MSPNGExporter>(): R;
      new: <R = MSPNGExporter>() => R;
    }
  }
}

declare const MSPNGExporter: cocoa.MSPNGExporter.CLASS;
