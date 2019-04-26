/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardInspectorSection<T0 = void, T1 = void, T2 = void> extends MSBaseInspectorSection {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    colorEnabled<R = boolean>(): R;
    setColorEnabled<R = void, P0 = boolean>(_v: P0): R;
    layersController<R = NSArrayController>(): R;
    setLayersController<R = void, P0 = NSArrayController>(_v: P0): R;
    paddingItem<R = MSPaddingInspectorItem>(): R;
    setPaddingItem<R = void, P0 = MSPaddingInspectorItem>(_v: P0): R;
    includeInInstancesItem<R = MSIncludeBackgroundColorInInstancesInspectorItem>(): R;
    setIncludeInInstancesItem<R = void, P0 = MSIncludeBackgroundColorInInstancesInspectorItem>(_v: P0): R;
    includeInExportItem<R = MSIncludeBackgroundColorInExportInspectorItem>(): R;
    setIncludeInExportItem<R = void, P0 = MSIncludeBackgroundColorInExportInspectorItem>(_v: P0): R;
    colorItem<R = MSArtboardBackgroundColorInspectorItem>(): R;
    setColorItem<R = void, P0 = MSArtboardBackgroundColorInspectorItem>(_v: P0): R;
    resizeItem<R = MSArtboardContentResizeInspectorItem>(): R;
    setResizeItem<R = void, P0 = MSArtboardContentResizeInspectorItem>(_v: P0): R;
  }
  namespace MSArtboardInspectorSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseInspectorSection {
      alloc<R = MSArtboardInspectorSection>(): R;
      new: <R = MSArtboardInspectorSection>() => R;
    }
  }
}

declare const MSArtboardInspectorSection: cocoa.MSArtboardInspectorSection.CLASS;
