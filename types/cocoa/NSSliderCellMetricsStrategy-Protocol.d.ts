/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderCellMetricsStrategyProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSCopyingProtocol {
    rectOfMaxValueImageFlipped<R = CGRect, P0 = boolean>(_rectOfMaxValueImageFlipped: P0): R;
    rectOfMinValueImageFlipped<R = CGRect, P0 = boolean>(_rectOfMinValueImageFlipped: P0): R;
    rectOfTickMarkForValue_knobRect_barRect<R = CGRect, P0 = number, P1 = CGRect, P2 = CGRect>(_rectOfTickMarkForValue: P0, _knobRect: P1, _barRect: P2): R;
    knobAlignmentRectInsets<R = NSEdgeInsets>(): R;
    knobRectFlipped_value_knobValueRangeRect<R = CGRect, P0 = boolean, P1 = number, P2 = CGRect>(_knobRectFlipped: P0, _value: P1, _knobValueRangeRect: P2): R;
    knobValueRangeRect<R = CGRect, P0 = boolean>(_knobValueRangeRect: P0): R;
    barRectFlipped<R = CGRect, P0 = boolean>(_barRectFlipped: P0): R;
    alignmentRectInsets<R = NSEdgeInsets>(): R;
    cellSizeForBounds<R = CGSize, P0 = CGRect>(_cellSizeForBounds: P0): R;
    state<R = unknown>(): R;
    setState<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSSliderCellMetricsStrategyProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSCopyingProtocol {}
  }
}
