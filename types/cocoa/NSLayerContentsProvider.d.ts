/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayerContentsProvider<T0 = void, T1 = void, T2 = void> extends NSObject {
    totalCacheSize<R = number>(): R;
    facetForIdentifier_scale_colorSpace_drawingRect_flipped_appearanceIdentifier_drawHandler<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = CGRect, P4 = boolean, P5 = unknown, P6 = CDUnknownBlockType>(_facetForIdentifier: P0, _scale: P1, _colorSpace: P2, _drawingRect: P3, _flipped: P4, _appearanceIdentifier: P5, _drawHandler: P6): R;
    dealloc<R = void>(): R;
  }
  namespace NSLayerContentsProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSLayerContentsProvider>(): R;
      new: <R = NSLayerContentsProvider>() => R;
      resetCache<R = void>(): R;
      sharedContentsProvider<R = unknown>(): R;
    }
  }
}

declare const NSLayerContentsProvider: cocoa.NSLayerContentsProvider.CLASS;
