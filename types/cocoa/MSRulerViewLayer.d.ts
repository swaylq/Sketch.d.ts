/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRulerViewLayer<T0 = void, T1 = void, T2 = void> extends CALayer {
    cxx_destruct<R = void>(): R;
    isFlipped<R = boolean>(): R;
    rulerHeight<R = number>(): R;
    rulerLength<R = number>(): R;
    drawAlignmentGuidesWithColor<R = void, P0 = unknown>(_drawAlignmentGuidesWithColor: P0): R;
    drawSeparatorForOccupiedRegion<R = void>(): R;
    drawOccupiedRegion<R = void>(): R;
    drawBackgroundForLabel_atPoint<R = void, P0 = unknown, P1 = CGPoint>(_drawBackgroundForLabel: P0, _atPoint: P1): R;
    drawMetric_atPoint_drawBackground<R = void, P0 = unknown, P1 = CGPoint, P2 = boolean>(_drawMetric: P0, _atPoint: P1, _drawBackground: P2): R;
    drawMetric_atPoint<R = void, P0 = unknown, P1 = CGPoint>(_drawMetric: P0, _atPoint: P1): R;
    drawLineAtPosition_withOptions_color<R = void, P0 = number, P1 = number, P2 = unknown>(_drawLineAtPosition: P0, _withOptions: P1, _color: P2): R;
    drawTickmarksWithOptions_color_inRect<R = void, P0 = number, P1 = unknown, P2 = CGRect>(_drawTickmarksWithOptions: P0, _color: P1, _inRect: P2): R;
    drawTickmarksWithColor_inRect<R = void, P0 = unknown, P1 = CGRect>(_drawTickmarksWithColor: P0, _inRect: P1): R;
    drawMetricsWithOptions<R = void, P0 = number>(_drawMetricsWithOptions: P0): R;
    _shouldDrawTickmarkAtPosition_options<R = boolean, P0 = number, P1 = number>(__shouldDrawTickmarkAtPosition: P0, _options: P1): R;
    smallStep<R = number>(): R;
    adjustedBase<R = number>(): R;
    drawMetrics<R = void>(): R;
    drawBackground<R = void>(): R;
    drawInContext<R = void, P0 = CGContext>(_drawInContext: P0): R;
    init<R = unknown>(): R;
    parentView<R = NSView>(): R;
    setParentView<R = void, P0 = NSView>(_v: P0): R;
    shouldDrawGuides<R = boolean>(): R;
    setShouldDrawGuides<R = void, P0 = boolean>(_v: P0): R;
    guides<R = NSArray>(): R;
    setGuides<R = void, P0 = NSArray>(_v: P0): R;
    occupiedRegion<R = CGRect>(): R;
    setOccupiedRegion<R = void, P0 = CGRect>(_v: P0): R;
    baseLine<R = number>(): R;
    setBaseLine<R = void, P0 = number>(_v: P0): R;
    zoomValue<R = number>(): R;
    setZoomValue<R = void, P0 = number>(_v: P0): R;
    snapColor<R = NSColor>(): R;
    setSnapColor<R = void, P0 = NSColor>(_v: P0): R;
    formatter<R = NSNumberFormatter>(): R;
    setFormatter<R = void, P0 = NSNumberFormatter>(_v: P0): R;
    axis<R = number>(): R;
    setAxis<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSRulerViewLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CALayer {}
  }
}

declare const MSRulerViewLayer: cocoa.MSRulerViewLayer.CLASS;
