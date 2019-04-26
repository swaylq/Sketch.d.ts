/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextLayer<T0 = void, T1 = void, T2 = void> extends _NSBackingLayer, CALinearMaskLayerDelegateProtocol {
    setSublayerTransform<R = void, P0 = CATransform3D>(_setSublayerTransform: P0): R;
    _renderForegroundInContext<R = void, P0 = CGContext>(__renderForegroundInContext: P0): R;
    renderInContext<R = void, P0 = CGContext>(_renderInContext: P0): R;
    _appkitViewBackingLayerUniqueMethod<R = void>(): R;
    _NS_invalidateSuggestedContentsScale<R = void>(): R;
    NS_didChangeDefaultContentsScale<R = void, P0 = number>(_NS_didChangeDefaultContentsScale: P0): R;
    drawInContext<R = void, P0 = CGContext>(_drawInContext: P0): R;
    dealloc<R = void>(): R;
    drawingContext<R = NSGraphicsContext>(): R;
    bezelLayer<R = CALayer>(): R;
    setBezelLayer<R = void, P0 = CALayer>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTextLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSBackingLayer, CALinearMaskLayerDelegateProtocol {}
  }
}

declare const NSTextLayer: cocoa.NSTextLayer.CLASS;
