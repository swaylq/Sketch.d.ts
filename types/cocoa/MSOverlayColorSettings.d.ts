/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverlayColorSettings<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    symbolTitleColor<R = NSColor>(): R;
    setSymbolTitleColor<R = void, P0 = NSColor>(_v: P0): R;
    artboardTitleColor<R = NSColor>(): R;
    setArtboardTitleColor<R = void, P0 = NSColor>(_v: P0): R;
    sliceOutlineColor<R = NSColor>(): R;
    setSliceOutlineColor<R = void, P0 = NSColor>(_v: P0): R;
    pixelGridColor<R = NSColor>(): R;
    setPixelGridColor<R = void, P0 = NSColor>(_v: P0): R;
    pageBackgroundColor<R = NSColor>(): R;
    setPageBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
    canvasBackgroundColor<R = NSColor>(): R;
    setCanvasBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace MSOverlayColorSettings {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSOverlayColorSettings>(): R;
      new: <R = MSOverlayColorSettings>() => R;
      colorSettings<R = unknown>(): R;
    }
  }
}

declare const MSOverlayColorSettings: cocoa.MSOverlayColorSettings.CLASS;
