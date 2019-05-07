/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLevelIndicatorCoreProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    alignmentRectInsetsForState<R = NSEdgeInsets, P0 = unknown>(_alignmentRectInsetsForState: P0): R;
    indicatorSizeForState<R = CGSize, P0 = unknown>(_indicatorSizeForState: P0): R;
    vibrancyBlendModeForState<R = number, P0 = unknown>(_vibrancyBlendModeForState: P0): R;
    drawInRect_inContext_forState<R = void, P0 = CGRect, P1 = NSGraphicsContext, P2 = unknown>(_drawInRect: P0, _inContext: P1, _forState: P2): R;
    drawFocusRingMaskInRect_inContext_forState<R = void, P0 = CGRect, P1 = NSGraphicsContext, P2 = unknown>(_drawFocusRingMaskInRect: P0, _inContext: P1, _forState: P2): R;
    layoutSublayersOfLayer_forState<R = void, P0 = CALayer, P1 = unknown>(_layoutSublayersOfLayer: P0, _forState: P1): R;
    updateLayer_forState<R = void, P0 = CALayer, P1 = unknown>(_updateLayer: P0, _forState: P1): R;
  }
  namespace _NSLevelIndicatorCoreProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
