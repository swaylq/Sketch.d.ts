/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSegmentedCellAuxiliary<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    compressibleOptions<R = NSUserInterfaceCompressionOptions>(): R;
    setCompressibleOptions<R = void, P0 = NSUserInterfaceCompressionOptions>(_v: P0): R;
    segmentDistribution<R = number>(): R;
    setSegmentDistribution<R = void, P0 = number>(_v: P0): R;
    inTouchBar<R = boolean>(): R;
    setInTouchBar<R = void, P0 = boolean>(_v: P0): R;
    gasPedalDoubleValue<R = number>(): R;
    setGasPedalDoubleValue<R = void, P0 = number>(_v: P0): R;
    lastGasPedalActionWasHighlighted<R = boolean>(): R;
    setLastGasPedalActionWasHighlighted<R = void, P0 = boolean>(_v: P0): R;
    sendActionOnGasPedal<R = boolean>(): R;
    setSendActionOnGasPedal<R = void, P0 = boolean>(_v: P0): R;
    menuTimer<R = NSTimer>(): R;
    setMenuTimer<R = void, P0 = NSTimer>(_v: P0): R;
    sendSelectionAction<R = boolean>(): R;
    setSendSelectionAction<R = void, P0 = boolean>(_v: P0): R;
    highlightedSegment<R = number>(): R;
    setHighlightedSegment<R = void, P0 = number>(_v: P0): R;
    segmentTrackingRects<R = CGRect>(): R;
    setSegmentTrackingRects<R = void, P0 = CGRect>(_v: P0): R;
    segmentFrameOfTrackedCell<R = CGRect>(): R;
    setSegmentFrameOfTrackedCell<R = void, P0 = CGRect>(_v: P0): R;
    segmentTrackingRectCount<R = number>(): R;
    setSegmentTrackingRectCount<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSSegmentedCellAuxiliary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSSegmentedCellAuxiliary>(): R;
      new: <R = _NSSegmentedCellAuxiliary>() => R;
    }
  }
}
