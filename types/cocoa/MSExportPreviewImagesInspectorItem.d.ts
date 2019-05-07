/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPreviewImagesInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem, MSLayerChangeObserverProtocol {
    setPreviewsWithViewModels<R = void, P0 = unknown>(_setPreviewsWithViewModels: P0): R;
    reloadPreviewViews<R = void>(): R;
    removeAllPreviewViews<R = void>(): R;
    schedulePreviewViewReload<R = void>(): R;
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    throttleCount<R = number>(): R;
    setThrottleCount<R = void, P0 = number>(_v: P0): R;
    previewViews<R = NSArray>(): R;
    setPreviewViews<R = void, P0 = NSArray>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSExportPreviewImagesInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem, MSLayerChangeObserverProtocol {
      alloc<R = MSExportPreviewImagesInspectorItem>(): R;
      new: <R = MSExportPreviewImagesInspectorItem>() => R;
      setFrameOfViewModels_withInspectorWidth<R = void, P0 = unknown, P1 = number>(_setFrameOfViewModels: P0, _withInspectorWidth: P1): R;
      previewImageSizeForNumColumns<R = CGSize, P0 = number>(_previewImageSizeForNumColumns: P0): R;
      previewViewSizeForNumColumns<R = CGSize, P0 = number>(_previewViewSizeForNumColumns: P0): R;
      reloadPreviewsForLayers_withCompletion<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_reloadPreviewsForLayers: P0, _withCompletion: P1): R;
    }
  }
}

declare const MSExportPreviewImagesInspectorItem: cocoa.MSExportPreviewImagesInspectorItem.CLASS;
