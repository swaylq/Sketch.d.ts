/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertHotspotEventHandler<T0 = void, T1 = void, T2 = void> extends MSInsertLayerEventHandler {
    cursorForInsertingFromExisting<R = unknown>(): R;
    layerSelectionOptionsForInsertingFromExistingLayer<R = number>(): R;
    allowsInsertLayerFromExistingLayer<R = boolean>(): R;
  }
  namespace MSInsertHotspotEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInsertLayerEventHandler {
      alloc<R = MSInsertHotspotEventHandler>(): R;
      new: <R = MSInsertHotspotEventHandler>() => R;
    }
  }
}

declare const MSInsertHotspotEventHandler: cocoa.MSInsertHotspotEventHandler.CLASS;
