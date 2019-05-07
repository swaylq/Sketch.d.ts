/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTileLayer<T0 = void, T1 = void, T2 = void> extends CALayer {
    NS_hasPrefetchedContents<R = boolean>(): R;
    setNeedsDisplayInRect<R = void, P0 = CGRect>(_setNeedsDisplayInRect: P0): R;
    setBounds<R = void, P0 = CGRect>(_setBounds: P0): R;
    drawInContext<R = void, P0 = CGContext>(_drawInContext: P0): R;
    display<R = void>(): R;
    NS_contentsAligningEnabled<R = boolean>(): R;
    setNeedsLayout<R = void>(): R;
    NS_setVisibleTile<R = void, P0 = boolean>(_NS_setVisibleTile: P0): R;
    NS_setPurged<R = void, P0 = boolean>(_NS_setPurged: P0): R;
    NS_isPurged<R = boolean>(): R;
    visibleTileStateChanged<R = void>(): R;
    NS_isVisibleTile<R = boolean>(): R;
    init<R = unknown>(): R;
  }
  namespace NSTileLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CALayer {}
  }
}

declare const NSTileLayer: cocoa.NSTileLayer.CLASS;
