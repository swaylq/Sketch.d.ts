/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerClipViewLayer<T0 = void, T1 = void, T2 = void> extends _NSSafariTransformLayer {
    anchorPoint<R = CGPoint>(): R;
    setAnchorPoint<R = void, P0 = CGPoint>(_setAnchorPoint: P0): R;
  }
  namespace NSVisualTabPickerClipViewLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSSafariTransformLayer {}
  }
}

declare const NSVisualTabPickerClipViewLayer: cocoa.NSVisualTabPickerClipViewLayer.CLASS;
