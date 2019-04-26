/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewBackingLayer<T0 = void, T1 = void, T2 = void> extends _NSBackingLayer {
    dealloc<R = void>(): R;
    initWithLayer<R = unknown, P0 = unknown>(_initWithLayer: P0): R;
    NS_contentsAligningEnabled<R = boolean>(): R;
    NS_didChangeDefaultContentsScale<R = void, P0 = number>(_NS_didChangeDefaultContentsScale: P0): R;
    _NS_invalidateSuggestedContentsScale<R = void>(): R;
    setSublayerTransform<R = void, P0 = CATransform3D>(_setSublayerTransform: P0): R;
    setTransform<R = void, P0 = CATransform3D>(_setTransform: P0): R;
    _NS_accumulateSuggestedScaleBelow<R = void, P0 = number>(__NS_accumulateSuggestedScaleBelow: P0): R;
    _NS_accumulateSuggestedScale<R = void, P0 = number>(__NS_accumulateSuggestedScale: P0): R;
    setNeedsLayout<R = void>(): R;
    setLayoutManager<R = void, P0 = unknown>(_setLayoutManager: P0): R;
    _renderForegroundInContext<R = void, P0 = CGContext>(__renderForegroundInContext: P0): R;
    drawInContext<R = void, P0 = CGContext>(_drawInContext: P0): R;
    NS_prepareContentRect<R = void, P0 = CGRect>(_NS_prepareContentRect: P0): R;
    NS_invalidatePreparedContentRect<R = void>(): R;
    NS_canDraw<R = boolean>(): R;
    _appkitViewBackingLayerUniqueMethod<R = void>(): R;
    NS_setView<R = void, P0 = unknown>(_NS_setView: P0): R;
    NS_view<R = unknown>(): R;
  }
  namespace _NSViewBackingLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSBackingLayer {
      defaultValueForKey<R = unknown, P0 = unknown>(_defaultValueForKey: P0): R;
    }
  }
}
