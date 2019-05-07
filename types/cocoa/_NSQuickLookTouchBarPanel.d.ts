/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickLookTouchBarPanel<T0 = void, T1 = void, T2 = void> extends NSPanel {
    backingScaleFactor<R = number>(): R;
    colorSpace<R = unknown>(): R;
    isVisible<R = boolean>(): R;
    _isEffectivelyVisible<R = boolean>(): R;
    allowsFontSmoothing<R = boolean>(): R;
    hasKeyAppearance<R = boolean>(): R;
    worksWhenModal<R = boolean>(): R;
    _shouldDoLayerPerformanceUpdates<R = boolean>(): R;
  }
  namespace _NSQuickLookTouchBarPanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = _NSQuickLookTouchBarPanel>(): R;
      new: <R = _NSQuickLookTouchBarPanel>() => R;
    }
  }
}
