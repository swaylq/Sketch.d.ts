/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLinearMaskBackingLayerContents<T0 = void, T1 = void, T2 = void> extends _NSBackingLayerContents {
    NS_tiledLayer_drawTile_inContext<R = void, P0 = unknown, P1 = unknown, P2 = CGContext>(_NS_tiledLayer: P0, _drawTile: P1, _inContext: P2): R;
  }
  namespace _NSLinearMaskBackingLayerContents {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSBackingLayerContents {
      alloc<R = _NSLinearMaskBackingLayerContents>(): R;
      new: <R = _NSLinearMaskBackingLayerContents>() => R;
    }
  }
}
