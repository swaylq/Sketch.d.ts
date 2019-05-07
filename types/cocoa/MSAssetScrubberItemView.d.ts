/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetScrubberItemView<T0 = void, T1 = void, T2 = void> extends NSScrubberItemView {
    cxx_destruct<R = void>(): R;
    patternPreviewImageWithDrawingBounds<R = unknown, P0 = CGRect>(_patternPreviewImageWithDrawingBounds: P0): R;
    gradientPreviewImageWithDrawingBounds<R = unknown, P0 = CGRect>(_gradientPreviewImageWithDrawingBounds: P0): R;
    colorPreviewImageWithDrawingBounds<R = unknown, P0 = CGRect>(_colorPreviewImageWithDrawingBounds: P0): R;
    previewImage<R = unknown>(): R;
    deviceColorPreviewRectForRect_drawingBorder<R = CGRect, P0 = CGRect, P1 = boolean>(_deviceColorPreviewRectForRect: P0, _drawingBorder: P1): R;
    clipPathForRect_cornerRadius<R = unknown, P0 = CGRect, P1 = number>(_clipPathForRect: P0, _cornerRadius: P1): R;
    clipPath<R = unknown>(): R;
    drawingBounds<R = CGRect>(): R;
    shouldDrawBorderForColor<R = boolean, P0 = unknown>(_shouldDrawBorderForColor: P0): R;
    initWithAsset_canvasColorSpace_isFirst_isLast_tailPadding<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean, P3 = boolean, P4 = number>(_initWithAsset: P0, _canvasColorSpace: P1, _isFirst: P2, _isLast: P3, _tailPadding: P4): R;
    cachedPreviewImage<R = NSImage>(): R;
    setCachedPreviewImage<R = void, P0 = NSImage>(_v: P0): R;
    tailPadding<R = number>(): R;
    isLastInCollection<R = boolean>(): R;
    isFirstInCollection<R = boolean>(): R;
    pattern<R = MSImageData>(): R;
    gradient<R = MSGradient>(): R;
    canvasColorSpace<R = NSColorSpace>(): R;
    color<R = MSColor>(): R;
  }
  namespace MSAssetScrubberItemView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrubberItemView {
      alloc<R = MSAssetScrubberItemView>(): R;
      new: <R = MSAssetScrubberItemView>() => R;
    }
  }
}

declare const MSAssetScrubberItemView: cocoa.MSAssetScrubberItemView.CLASS;
