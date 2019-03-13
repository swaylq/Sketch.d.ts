/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerFlattener<T = any> extends NSObject {
    exportRequestFromLayers_immutablePage_immutableDoc_includeArtboardBackground<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(_exportRequestFromLayers: P0, _immutablePage: P1, _immutableDoc: P2, _includeArtboardBackground: P3): R;
    trimRectFromLayers_immutablePage_immutableDoc_includeArtboardBackground<R = CGRect, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(_trimRectFromLayers: P0, _immutablePage: P1, _immutableDoc: P2, _includeArtboardBackground: P3): R;
    rectFromLayers<R = CGRect, P0 = unknown>(_rectFromLayers: P0): R;
    bitmapFromRect_fromLayers_withImage<R = unknown, P0 = CGRect, P1 = unknown, P2 = unknown>(_bitmapFromRect: P0, _fromLayers: P1, _withImage: P2): R;
    trimmedRectFromLayers_immutablePage_immutableDoc_includeArtboardBackground<R = CGRect, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(_trimmedRectFromLayers: P0, _immutablePage: P1, _immutableDoc: P2, _includeArtboardBackground: P3): R;
    trimmedRectFromLayers_immutablePage_immutableDoc<R = CGRect, P0 = unknown, P1 = unknown, P2 = unknown>(_trimmedRectFromLayers: P0, _immutablePage: P1, _immutableDoc: P2): R;
    imageFromLayers_immutablePage_immutableDoc_includeArtboardBackground<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(_imageFromLayers: P0, _immutablePage: P1, _immutableDoc: P2, _includeArtboardBackground: P3): R;
    imageFromLayers_immutablePage_immutableDoc<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_imageFromLayers: P0, _immutablePage: P1, _immutableDoc: P2): R;
    flattenLayers<R = void, P0 = unknown>(_flattenLayers: P0): R;
  }
  namespace classes {
    export interface MSLayerFlattener<T = any> extends NSObject {
      alloc<R = MSLayerFlattener>(): R;
      new: <R = MSLayerFlattener>() => R;
    }
  }
}

declare const MSLayerFlattener: cocoa.classes.MSLayerFlattener;