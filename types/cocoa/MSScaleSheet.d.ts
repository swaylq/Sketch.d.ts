/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSScaleSheet<T0 = void, T1 = void, T2 = void> extends MSCanvasUpdatingSheet {
    selectScalingOrigin<R = void, P0 = unknown>(_selectScalingOrigin: P0): R;
    refreshScalingOriginButton<R = void, P0 = unknown>(_refreshScalingOriginButton: P0): R;
    refreshScalingOriginControls<R = void>(): R;
    didChangeValues<R = void>(): R;
    willChangeValues<R = void>(): R;
    setNilValueForKey<R = void, P0 = unknown>(_setNilValueForKey: P0): R;
    initWithWindow<R = unknown, P0 = unknown>(_initWithWindow: P0): R;
    originLabel<R = NSTextField>(): R;
    setOriginLabel<R = void, P0 = NSTextField>(_v: P0): R;
    originButtonsContainer<R = NSView>(): R;
    setOriginButtonsContainer<R = void, P0 = NSView>(_v: P0): R;
    scalingOriginCorner<R = number>(): R;
    setScalingOriginCorner<R = void, P0 = number>(_v: P0): R;
    labelField<R = NSTextField>(): R;
    setLabelField<R = void, P0 = NSTextField>(_v: P0): R;
    heightField<R = NSTextField>(): R;
    setHeightField<R = void, P0 = NSTextField>(_v: P0): R;
    widthField<R = NSTextField>(): R;
    setWidthField<R = void, P0 = NSTextField>(_v: P0): R;
    scalingField<R = NSTextField>(): R;
    setScalingField<R = void, P0 = NSTextField>(_v: P0): R;
    originalRect<R = CGRect>(): R;
    scale<R = number>(): R;
    setScale<R = void, P0 = number>(_v: P0): R;
    height<R = number>(): R;
    setHeight<R = void, P0 = number>(_v: P0): R;
    width<R = number>(): R;
    setWidth<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSScaleSheet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCanvasUpdatingSheet {
      alloc<R = MSScaleSheet>(): R;
      new: <R = MSScaleSheet>() => R;
    }
  }
}

declare const MSScaleSheet: cocoa.MSScaleSheet.CLASS;
