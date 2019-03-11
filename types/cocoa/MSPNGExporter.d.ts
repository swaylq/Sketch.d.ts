/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPNGExporter<T = any> extends cocoa.MSExporter {}
  namespace classes {
    export interface MSPNGExporter<T = any> extends cocoa.classes.MSExporter {
      alloc<R = MSPNGExporter>(): R;
      new: <R = MSPNGExporter>() => R;
    }
  }
}

declare const MSPNGExporter: cocoa.classes.MSPNGExporter;
