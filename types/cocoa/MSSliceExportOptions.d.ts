/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSliceExportOptions<T0 = void, T1 = void, T2 = void> extends NSViewController {
    cxx_destruct<R = void>(): R;
    setExtensions<R = void, P0 = unknown>(_setExtensions: P0): R;
    optionsViewPNG<R = NSView>(): R;
    setOptionsViewPNG<R = void, P0 = NSView>(_v: P0): R;
    optionsViewWebP<R = NSView>(): R;
    setOptionsViewWebP<R = void, P0 = NSView>(_v: P0): R;
    optionsViewSaveForWeb<R = NSView>(): R;
    setOptionsViewSaveForWeb<R = void, P0 = NSView>(_v: P0): R;
    optionsViewJPG<R = NSView>(): R;
    setOptionsViewJPG<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace MSSliceExportOptions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = MSSliceExportOptions>(): R;
      new: <R = MSSliceExportOptions>() => R;
      exportOptionsForRequests<R = unknown, P0 = unknown>(_exportOptionsForRequests: P0): R;
    }
  }
}

declare const MSSliceExportOptions: cocoa.MSSliceExportOptions.CLASS;
