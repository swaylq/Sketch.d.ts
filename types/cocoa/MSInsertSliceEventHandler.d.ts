/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertSliceEventHandler<T0 = void, T1 = void, T2 = void> extends MSInsertLayerEventHandler {
    cursorForInsertingFromExisting<R = unknown>(): R;
    layerSelectionOptionsForInsertingFromExistingLayer<R = number>(): R;
    allowsInsertLayerFromExistingLayer<R = boolean>(): R;
    allSlices<R = NSArray>(): R;
    setAllSlices<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace MSInsertSliceEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInsertLayerEventHandler {
      alloc<R = MSInsertSliceEventHandler>(): R;
      new: <R = MSInsertSliceEventHandler>() => R;
    }
  }
}

declare const MSInsertSliceEventHandler: cocoa.MSInsertSliceEventHandler.CLASS;
