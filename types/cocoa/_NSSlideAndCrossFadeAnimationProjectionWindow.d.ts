/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSlideAndCrossFadeAnimationProjectionWindow<T0 = void, T1 = void, T2 = void> extends _NSBorderlessLayerTreeProjectionWindow {
    startAnimationWithDuration_completionHandler<R = void, P0 = number, P1 = CDUnknownBlockType>(_startAnimationWithDuration: P0, _completionHandler: P1): R;
    initWithBeforeLayer_initialScreenRect_finalScreenRect_afterLayer_initialScreenRect_finalScreenRect<R = unknown, P0 = unknown, P1 = CGRect, P2 = CGRect, P3 = unknown, P4 = CGRect, P5 = CGRect>(_initWithBeforeLayer: P0, _initialScreenRect: P1, _finalScreenRect: P2, _afterLayer: P3, _initialScreenRect1: P4, _finalScreenRect1: P5): R;
    layerFrameFromScreenRect<R = CGRect, P0 = CGRect>(_layerFrameFromScreenRect: P0): R;
  }
  namespace _NSSlideAndCrossFadeAnimationProjectionWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSBorderlessLayerTreeProjectionWindow {
      alloc<R = _NSSlideAndCrossFadeAnimationProjectionWindow>(): R;
      new: <R = _NSSlideAndCrossFadeAnimationProjectionWindow>() => R;
    }
  }
}
