/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAutomaticFocusRing<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSAutomaticFocusRing {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSAutomaticFocusRing>(): R;
      new: <R = _NSAutomaticFocusRing>() => R;
      setActiveFirstResponderChanged<R = void>(): R;
      translateFocusRingRegionBy_forWindow<R = void, P0 = CGPoint, P1 = unknown>(_translateFocusRingRegionBy: P0, _forWindow: P1): R;
      focusRingRegionForWindow<R = unknown, P0 = unknown>(_focusRingRegionForWindow: P0): R;
      compositeIfShownInWindow<R = void, P0 = unknown>(_compositeIfShownInWindow: P0): R;
      focusRingViewForWindow<R = unknown, P0 = unknown>(_focusRingViewForWindow: P0): R;
      hideForView<R = void, P0 = unknown>(_hideForView: P0): R;
      setNeedsUpdateForView<R = void, P0 = unknown>(_setNeedsUpdateForView: P0): R;
      updateForView<R = void, P0 = unknown>(_updateForView: P0): R;
      updateIfNeeded<R = void>(): R;
      showForView<R = void, P0 = unknown>(_showForView: P0): R;
      _invalidateAnimatedRingWithTimer<R = void, P0 = unknown>(__invalidateAnimatedRingWithTimer: P0): R;
      _focusRingViewDidChangeGeometryInWindow<R = void, P0 = unknown>(__focusRingViewDidChangeGeometryInWindow: P0): R;
      _clearOldFocusRing<R = void>(): R;
      _setFocusRingView<R = void, P0 = unknown>(__setFocusRingView: P0): R;
      _state<R = unknown>(): R;
    }
  }
}
