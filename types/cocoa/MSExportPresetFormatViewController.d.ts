/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPresetFormatViewController<T0 = void, T1 = void, T2 = void> extends MSExportFormatViewController {}
  namespace MSExportPresetFormatViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSExportFormatViewController {
      alloc<R = MSExportPresetFormatViewController>(): R;
      new: <R = MSExportPresetFormatViewController>() => R;
    }
  }
}

declare const MSExportPresetFormatViewController: cocoa.MSExportPresetFormatViewController.CLASS;
