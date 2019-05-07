/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTrailingLayersMover<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSTrailingLayersMover {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSTrailingLayersMover>(): R;
      new: <R = MSTrailingLayersMover>() => R;
      sortIncomingLayersByDirection<R = unknown, P0 = unknown>(_sortIncomingLayersByDirection: P0): R;
      spaceBetweenRect_andPreviousRect_inDirection<R = number, P0 = CGRect, P1 = CGRect, P2 = number>(_spaceBetweenRect: P0, _andPreviousRect: P1, _inDirection: P2): R;
      unboundedLayersTrailingLayer_inDirection<R = unknown, P0 = unknown, P1 = number>(_unboundedLayersTrailingLayer: P0, _inDirection: P1): R;
      sortLayers_inDirection<R = unknown, P0 = unknown, P1 = number>(_sortLayers: P0, _inDirection: P1): R;
      layersTrailingLayer_inDirection<R = unknown, P0 = unknown, P1 = number>(_layersTrailingLayer: P0, _inDirection: P1): R;
      applyTrailingLayerInfo_toLayer<R = void, P0 = unknown, P1 = unknown>(_applyTrailingLayerInfo: P0, _toLayer: P1): R;
      trailingLayerInfoForLayer<R = unknown, P0 = unknown>(_trailingLayerInfoForLayer: P0): R;
      changeFrameForLayers_inBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_changeFrameForLayers: P0, _inBlock: P1): R;
    }
  }
}

declare const MSTrailingLayersMover: cocoa.MSTrailingLayersMover.CLASS;
