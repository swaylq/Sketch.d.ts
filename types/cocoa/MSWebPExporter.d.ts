/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWebPExporter<T0 = void, T1 = void, T2 = void> extends MSExporter {}
  namespace MSWebPExporter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSExporter {
      alloc<R = MSWebPExporter>(): R;
      new: <R = MSWebPExporter>() => R;
    }
  }
}

declare const MSWebPExporter: cocoa.MSWebPExporter.CLASS;
