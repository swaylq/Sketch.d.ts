/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTiffExporter<T0 = void, T1 = void, T2 = void> extends MSExporter {}
  namespace MSTiffExporter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSExporter {
      alloc<R = MSTiffExporter>(): R;
      new: <R = MSTiffExporter>() => R;
    }
  }
}

declare const MSTiffExporter: cocoa.MSTiffExporter.CLASS;
