/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSliceExportGroupContentsOnlyInspectorItem<T = any> extends MSInspectorItem, MSLayerChangeObserverProtocol {
    groupContentsOnlyAction<R = void, P0 = unknown>(_groupContentsOnlyAction: P0): R;
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    groupContentsOnlyButton<R = NSButton>(): R;
    setGroupContentsOnlyButton<R = void, P0 = NSButton>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSliceExportGroupContentsOnlyInspectorItem<T = any> extends MSInspectorItem, MSLayerChangeObserverProtocol {
      alloc<R = MSSliceExportGroupContentsOnlyInspectorItem>(): R;
      new: <R = MSSliceExportGroupContentsOnlyInspectorItem>() => R;
    }
  }
}

declare const MSSliceExportGroupContentsOnlyInspectorItem: cocoa.classes.MSSliceExportGroupContentsOnlyInspectorItem;
