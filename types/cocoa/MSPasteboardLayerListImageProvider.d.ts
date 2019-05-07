/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardLayerListImageProvider<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSPasteboardLayerListImageProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPasteboardLayerListImageProvider>(): R;
      new: <R = MSPasteboardLayerListImageProvider>() => R;
      addLayer_toPasteboard<R = void, P0 = unknown, P1 = unknown>(_addLayer: P0, _toPasteboard: P1): R;
    }
  }
}

declare const MSPasteboardLayerListImageProvider: cocoa.MSPasteboardLayerListImageProvider.CLASS;
