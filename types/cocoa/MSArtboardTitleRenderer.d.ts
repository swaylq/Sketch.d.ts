/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardTitleRenderer<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    drawTitlesForArtboards_titleColor_symbolTitleColor_zoom_backingScaleFactor_baseOrigin<R = void, P0 = unknown, P1 = CGColor, P2 = CGColor, P3 = number, P4 = number, P5 = CGPoint>(_drawTitlesForArtboards: P0, _titleColor: P1, _symbolTitleColor: P2, _zoom: P3, _backingScaleFactor: P4, _baseOrigin: P5): R;
    ms_needsToRecreateTitlesForArtboards_zoom_backingScaleFactor<R = boolean, P0 = unknown, P1 = number, P2 = number>(_ms_needsToRecreateTitlesForArtboards: P0, _zoom: P1, _backingScaleFactor: P2): R;
    ms_drawTitles_zoom_backingScaleFactor_baseOrigin<R = void, P0 = unknown, P1 = number, P2 = number, P3 = CGPoint>(_ms_drawTitles: P0, _zoom: P1, _backingScaleFactor: P2, _baseOrigin: P3): R;
    ms_findExistingItemForArtboard<R = unknown, P0 = unknown>(_ms_findExistingItemForArtboard: P0): R;
    ms_drawTitlesToTexture_backingScaleFactor<R = void, P0 = unknown, P1 = number>(_ms_drawTitlesToTexture: P0, _backingScaleFactor: P1): R;
    ms_recreateTextureForWidth_height<R = void, P0 = number, P1 = number>(_ms_recreateTextureForWidth: P0, _height: P1): R;
    ms_createTextureForArtboards_zoom_backingScaleFactor_titleColor_symbolTitleColor<R = void, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = unknown>(_ms_createTextureForArtboards: P0, _zoom: P1, _backingScaleFactor: P2, _titleColor: P3, _symbolTitleColor: P4): R;
    ms_insertTitleItem_name<R = void, P0 = unknown, P1 = unknown>(_ms_insertTitleItem: P0, _name: P1): R;
    ms_collectArtboardsForTitleRendering_zoom_backingScaleFactor<R = unknown, P0 = unknown, P1 = number, P2 = number>(_ms_collectArtboardsForTitleRendering: P0, _zoom: P1, _backingScaleFactor: P2): R;
    ms_uploadTextureData<R = void>(): R;
    dealloc<R = void>(): R;
    initWithGPURenderer<R = unknown, P0 = unknown>(_initWithGPURenderer: P0): R;
    titleFont<R = NSFont>(): R;
    titleMap<R = NSMutableDictionary>(): R;
    textureBytes<R = void>(): R;
    setTextureBytes<R = void, P0 = void>(_v: P0): R;
    context<R = CGContext>(): R;
    setContext<R = void, P0 = CGContext>(_v: P0): R;
    backingScaleFactor<R = number>(): R;
    setBackingScaleFactor<R = void, P0 = number>(_v: P0): R;
    texture<R = MSGPUTexture>(): R;
    setTexture<R = void, P0 = MSGPUTexture>(_v: P0): R;
    renderer<R = MSGPURenderer>(): R;
  }
  namespace MSArtboardTitleRenderer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSArtboardTitleRenderer>(): R;
      new: <R = MSArtboardTitleRenderer>() => R;
    }
  }
}

declare const MSArtboardTitleRenderer: cocoa.MSArtboardTitleRenderer.CLASS;
