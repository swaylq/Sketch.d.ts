/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertSymbolEventHandler<T0 = void, T1 = void, T2 = void> extends MSEventHandler {
    generatePreviewAndRefreshWhenDone<R = void>(): R;
    pasteboardContainsSymbolInfo<R = boolean, P0 = unknown>(_pasteboardContainsSymbolInfo: P0): R;
    previewImage<R = unknown>(): R;
    rectAroundMouseFromBoundsCoordinates<R = CGRect, P0 = CGRect>(_rectAroundMouseFromBoundsCoordinates: P0): R;
    originForInserting<R = CGPoint>(): R;
    previewRectForInserting<R = CGRect>(): R;
    refresh<R = void>(): R;
    insertSymbolAtCurrentMouseLocation<R = boolean>(): R;
    snapperData<R = MSSnapperData>(): R;
    setSnapperData<R = void, P0 = MSSnapperData>(_v: P0): R;
    renderQueue<R = NSOperationQueue>(): R;
    setRenderQueue<R = void, P0 = NSOperationQueue>(_v: P0): R;
    previewImages<R = NSMutableDictionary>(): R;
    setPreviewImages<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    isMakingPreview<R = boolean>(): R;
    setIsMakingPreview<R = void, P0 = boolean>(_v: P0): R;
    mouseLocation<R = CGPoint>(): R;
    setMouseLocation<R = void, P0 = CGPoint>(_v: P0): R;
    symbolReference<R = MSSymbolMasterReference>(): R;
    setSymbolReference<R = void, P0 = MSSymbolMasterReference>(_v: P0): R;
  }
  namespace MSInsertSymbolEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSEventHandler {
      alloc<R = MSInsertSymbolEventHandler>(): R;
      new: <R = MSInsertSymbolEventHandler>() => R;
    }
  }
}

declare const MSInsertSymbolEventHandler: cocoa.MSInsertSymbolEventHandler.CLASS;
