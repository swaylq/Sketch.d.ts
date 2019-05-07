/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLinearMaskTileLayer<T0 = void, T1 = void, T2 = void> extends _NSLinearMaskLayer {
    drawInContext<R = void, P0 = CGContext>(_drawInContext: P0): R;
  }
  namespace _NSLinearMaskTileLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSLinearMaskLayer {}
  }
}
