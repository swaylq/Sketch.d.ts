/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationControlStripState<T = any> extends cocoa.NSObject {
    invalidate<R = void>(): R;
    _updateIfNeeded<R = void>(): R;
    _updateExpandedControlStripTouchBarIfNeededFrom_to<R = void, P0 = unknown, P1 = unknown>(__updateExpandedControlStripTouchBarIfNeededFrom: P0, _to: P1): R;
    _updateMiniControlStripTouchBarIfNeededFrom_to<R = void, P0 = unknown, P1 = unknown>(__updateMiniControlStripTouchBarIfNeededFrom: P0, _to: P1): R;
    dealloc<R = void>(): R;
    expandedTouchBar<R = cocoa.NSTouchBar>(): R;
    miniTouchBar<R = cocoa.NSTouchBar>(): R;
    expandedControlStripRect<R = cocoa.CGRect>(): R;
    miniControlStripRect<R = cocoa.CGRect>(): R;
    applicationRect<R = cocoa.CGRect>(): R;
    escapeKeyRect<R = cocoa.CGRect>(): R;
    functionVariant<R = number>(): R;
    primaryMode<R = number>(): R;
    miniControlStripCustomizationIsAccessible<R = boolean>(): R;
    applicationCustomizableState<R = number>(): R;
    controlStripCustomizableState<R = number>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationControlStripState<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSTouchBarCustomizationControlStripState>(): R;
      new: <R = NSTouchBarCustomizationControlStripState>() => R;
      sharedControlStrip<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarCustomizationControlStripState: cocoa.classes.NSTouchBarCustomizationControlStripState;
