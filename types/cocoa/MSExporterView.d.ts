/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExporterView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    isFlipped<R = boolean>(): R;
    renderer<R = MSExporter>(): R;
    setRenderer<R = void, P0 = MSExporter>(_v: P0): R;
  }
  namespace MSExporterView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSExporterView>(): R;
      new: <R = MSExporterView>() => R;
      exportViewWithRenderer<R = unknown, P0 = unknown>(_exportViewWithRenderer: P0): R;
    }
  }
}

declare const MSExporterView: cocoa.MSExporterView.CLASS;
