/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapBackedRendering<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSBitmapBackedRendering {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSBitmapBackedRendering>(): R;
      new: <R = MSBitmapBackedRendering>() => R;
      basicImageForLayer_context<R = unknown, P0 = unknown, P1 = unknown>(_basicImageForLayer: P0, _context: P1): R;
      imageToCacheForLayer_context<R = unknown, P0 = unknown, P1 = unknown>(_imageToCacheForLayer: P0, _context: P1): R;
    }
  }
}

declare const MSBitmapBackedRendering: cocoa.MSBitmapBackedRendering.CLASS;
