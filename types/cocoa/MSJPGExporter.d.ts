/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJPGExporter<T0 = void, T1 = void, T2 = void> extends MSExporter {}
  namespace MSJPGExporter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSExporter {
      alloc<R = MSJPGExporter>(): R;
      new: <R = MSJPGExporter>() => R;
    }
  }
}

declare const MSJPGExporter: cocoa.MSJPGExporter.CLASS;
