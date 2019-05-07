/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCColorPickerSliderView<T0 = void, T1 = void, T2 = void> extends BCColorPickerBaseView {
    valueForEvent<R = number, P0 = unknown>(_valueForEvent: P0): R;
    valueForXPosition<R = number, P0 = number>(_valueForXPosition: P0): R;
    xPositionForValue<R = number, P0 = number>(_xPositionForValue: P0): R;
    activeBounds<R = CGRect>(): R;
    drawSelectionMarkerAtPosition<R = void, P0 = number>(_drawSelectionMarkerAtPosition: P0): R;
    markerRectAtPosition<R = CGRect, P0 = number>(_markerRectAtPosition: P0): R;
    markerRectForValue<R = CGRect, P0 = number>(_markerRectForValue: P0): R;
    drawForeground<R = void>(): R;
    groupingUndo<R = boolean>(): R;
    setGroupingUndo<R = void, P0 = boolean>(_v: P0): R;
    handlingHistoryCoalescing<R = boolean>(): R;
    setHandlingHistoryCoalescing<R = void, P0 = boolean>(_v: P0): R;
    value<R = number>(): R;
    setValue<R = void, P0 = number>(_v: P0): R;
  }
  namespace BCColorPickerSliderView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCColorPickerBaseView {
      alloc<R = BCColorPickerSliderView>(): R;
      new: <R = BCColorPickerSliderView>() => R;
    }
  }
}

declare const BCColorPickerSliderView: cocoa.BCColorPickerSliderView.CLASS;
