/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMeasurementDrawing<T0 = void, T1 = void, T2 = void> extends MSSmartGuideDrawing {
    cxx_destruct<R = void>(): R;
    frameForMeasuringSizeOfRect_zoomScale<R = CGRect, P0 = CGRect, P1 = number>(_frameForMeasuringSizeOfRect: P0, _zoomScale: P1): R;
    performLabelTransformInRect_block<R = void, P0 = CGRect, P1 = CDUnknownBlockType>(_performLabelTransformInRect: P0, _block: P1): R;
    drawLabel_withFrame_zoomScale<R = void, P0 = unknown, P1 = CGRect, P2 = number>(_drawLabel: P0, _withFrame: P1, _zoomScale: P2): R;
    textAttributesForZoomScale<R = unknown, P0 = number>(_textAttributesForZoomScale: P0): R;
    drawVerticalGuideWithFrame_zoomScale<R = void, P0 = CGRect, P1 = number>(_drawVerticalGuideWithFrame: P0, _zoomScale: P1): R;
    drawHorizontalGuideWithFrame_zoomScale<R = void, P0 = CGRect, P1 = number>(_drawHorizontalGuideWithFrame: P0, _zoomScale: P1): R;
    drawWithFrame_zoomScale<R = void, P0 = CGRect, P1 = number>(_drawWithFrame: P0, _zoomScale: P1): R;
    color<R = NSColor>(): R;
    setColor<R = void, P0 = NSColor>(_v: P0): R;
    labelTransform<R = CGAffineTransform>(): R;
    setLabelTransform<R = void, P0 = CGAffineTransform>(_v: P0): R;
    labelText<R = NSString>(): R;
    setLabelText<R = void, P0 = NSString>(_v: P0): R;
    orientation<R = number>(): R;
    setOrientation<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSMeasurementDrawing {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSmartGuideDrawing {
      alloc<R = MSMeasurementDrawing>(): R;
      new: <R = MSMeasurementDrawing>() => R;
      minFrameSizeAtZoomScale<R = number, P0 = number>(_minFrameSizeAtZoomScale: P0): R;
    }
  }
}

declare const MSMeasurementDrawing: cocoa.MSMeasurementDrawing.CLASS;
