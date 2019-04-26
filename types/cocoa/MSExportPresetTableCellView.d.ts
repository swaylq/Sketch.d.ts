/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPresetTableCellView<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
    cxx_destruct<R = void>(): R;
    defaultPresetButton<R = NSButton>(): R;
    setDefaultPresetButton<R = void, P0 = NSButton>(_v: P0): R;
  }
  namespace MSExportPresetTableCellView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
      alloc<R = MSExportPresetTableCellView>(): R;
      new: <R = MSExportPresetTableCellView>() => R;
    }
  }
}

declare const MSExportPresetTableCellView: cocoa.MSExportPresetTableCellView.CLASS;
