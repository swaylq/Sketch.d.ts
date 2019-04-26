/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardFileDataProvider<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    pasteboard_provideDataForType<R = void, P0 = unknown, P1 = unknown>(_pasteboard: P0, _provideDataForType: P1): R;
    layers<R = NSArray>(): R;
    setLayers<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace MSPasteboardFileDataProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPasteboardFileDataProvider>(): R;
      new: <R = MSPasteboardFileDataProvider>() => R;
      buildExportRequestsForLayers_inFolder<R = unknown, P0 = unknown, P1 = unknown>(_buildExportRequestsForLayers: P0, _inFolder: P1): R;
      uniqueExportURLForLayer_inFolder_comparingTo<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_uniqueExportURLForLayer: P0, _inFolder: P1, _comparingTo: P2): R;
      extensionForExportingLayer<R = unknown, P0 = unknown>(_extensionForExportingLayer: P0): R;
      exportLayers_toFolder<R = unknown, P0 = unknown, P1 = unknown>(_exportLayers: P0, _toFolder: P1): R;
      addLayers_toPasteboard<R = void, P0 = unknown, P1 = unknown>(_addLayers: P0, _toPasteboard: P1): R;
    }
  }
}

declare const MSPasteboardFileDataProvider: cocoa.MSPasteboardFileDataProvider.CLASS;
