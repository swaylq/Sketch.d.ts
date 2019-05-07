/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEPSExporter<T0 = void, T1 = void, T2 = void> extends MSExporter {}
  namespace MSEPSExporter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSExporter {
      alloc<R = MSEPSExporter>(): R;
      new: <R = MSEPSExporter>() => R;
    }
  }
}

declare const MSEPSExporter: cocoa.MSEPSExporter.CLASS;
