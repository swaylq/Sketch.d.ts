/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationControlStripState<T0 = void, T1 = void, T2 = void> extends NSObject {
    invalidate<R = void>(): R;
    _updateIfNeeded<R = void>(): R;
    _updateExpandedControlStripTouchBarIfNeededFrom_to<R = void, P0 = unknown, P1 = unknown>(__updateExpandedControlStripTouchBarIfNeededFrom: P0, _to: P1): R;
    _updateMiniControlStripTouchBarIfNeededFrom_to<R = void, P0 = unknown, P1 = unknown>(__updateMiniControlStripTouchBarIfNeededFrom: P0, _to: P1): R;
    dealloc<R = void>(): R;
    expandedTouchBar<R = NSTouchBar>(): R;
    miniTouchBar<R = NSTouchBar>(): R;
    expandedControlStripRect<R = CGRect>(): R;
    miniControlStripRect<R = CGRect>(): R;
    applicationRect<R = CGRect>(): R;
    escapeKeyRect<R = CGRect>(): R;
    functionVariant<R = number>(): R;
    primaryMode<R = number>(): R;
    miniControlStripCustomizationIsAccessible<R = boolean>(): R;
    applicationCustomizableState<R = number>(): R;
    controlStripCustomizableState<R = number>(): R;
  }
  namespace NSTouchBarCustomizationControlStripState {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTouchBarCustomizationControlStripState>(): R;
      new: <R = NSTouchBarCustomizationControlStripState>() => R;
      sharedControlStrip<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarCustomizationControlStripState: cocoa.NSTouchBarCustomizationControlStripState.CLASS;
