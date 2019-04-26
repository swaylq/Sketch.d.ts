/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLinearMaskBackingLayer<T0 = void, T1 = void, T2 = void> extends _NSLinearMaskLayer {
    NS_backingLayerContentsClass<R = unknown>(): R;
    NS_makeContentsLayer<R = unknown>(): R;
    setContents<R = void, P0 = unknown>(_setContents: P0): R;
    display<R = void>(): R;
    displayIfNeeded<R = void>(): R;
    setNeedsDisplayInRect<R = void, P0 = CGRect>(_setNeedsDisplayInRect: P0): R;
    layoutSublayers<R = void>(): R;
    didChangeValueForKey<R = void, P0 = unknown>(_didChangeValueForKey: P0): R;
  }
  namespace _NSLinearMaskBackingLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSLinearMaskLayer {
      initialize<R = void>(): R;
    }
  }
}
