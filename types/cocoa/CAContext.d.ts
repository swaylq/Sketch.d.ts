/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CAContext<T0 = void, T1 = void, T2 = void> {
    // + CAContext(NSSuggestedContentsScale): 
    _NS_accumulateSuggestedScaleBelow<R = void, P0 = number>(__NS_accumulateSuggestedScaleBelow: P0): R;
    // + CAContext(NSDefaultContentsScale):
    NS_defaultContentsScale<R = number>(): R;
    setNS_defaultContentsScale<R = void, P0 = number>(_v: P0): R;
    // + CAContext(NSVisibleRect):
    NS_visibleRect<R = CGRect>(): R;
    setNS_visibleRect<R = void, P0 = CGRect>(_v: P0): R;
  }
  namespace CAContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + CAContext(NSFunctionRow): 
      functionRowContext<R = unknown>(): R;
      // + CAContext(NSVisibleRect): 
      automaticallyNotifiesObserversOfNS_visibleRect<R = boolean>(): R;
      // + CAContext(_NSTiledLayer): 
      keyPathsForValuesAffectingNS_tiledLayerVisibleRect<R = unknown>(): R;
    }
  }
}

declare const CAContext: cocoa.CAContext.CLASS;
