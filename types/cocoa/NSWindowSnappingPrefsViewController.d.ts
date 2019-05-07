/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowSnappingPrefsViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    propertiesAsDictionary<R = unknown>(): R;
    _reloadProperties<R = void>(): R;
    _prefsChanged<R = void, P0 = unknown>(__prefsChanged: P0): R;
    resetToDefaults<R = void, P0 = unknown>(_resetToDefaults: P0): R;
    snapToObscuredWindowEdges<R = boolean>(): R;
    setSnapToObscuredWindowEdges<R = void, P0 = boolean>(_v: P0): R;
    onlySmoothAnimateWhenNotInTheWindow<R = boolean>(): R;
    setOnlySmoothAnimateWhenNotInTheWindow<R = void, P0 = boolean>(_v: P0): R;
    gapBetweenWindows<R = number>(): R;
    setGapBetweenWindows<R = void, P0 = number>(_v: P0): R;
    smoothWindowWithAnimation<R = boolean>(): R;
    setSmoothWindowWithAnimation<R = void, P0 = boolean>(_v: P0): R;
    onlySnapWhenApproaching<R = boolean>(): R;
    setOnlySnapWhenApproaching<R = void, P0 = boolean>(_v: P0): R;
    instantUnsnap<R = boolean>(): R;
    setInstantUnsnap<R = void, P0 = boolean>(_v: P0): R;
    smoothWindowMovement<R = boolean>(): R;
    setSmoothWindowMovement<R = void, P0 = boolean>(_v: P0): R;
    allowWindowDocking<R = boolean>(): R;
    setAllowWindowDocking<R = void, P0 = boolean>(_v: P0): R;
    flashSnappedToWindow<R = boolean>(): R;
    setFlashSnappedToWindow<R = void, P0 = boolean>(_v: P0): R;
    showSnapTargets<R = boolean>(): R;
    setShowSnapTargets<R = void, P0 = boolean>(_v: P0): R;
    enableSnapping<R = boolean>(): R;
    setEnableSnapping<R = void, P0 = boolean>(_v: P0): R;
    shouldProvideVisualFeedback<R = boolean>(): R;
    setShouldProvideVisualFeedback<R = void, P0 = boolean>(_v: P0): R;
    shouldProvideSoundFeedback<R = boolean>(): R;
    setShouldProvideSoundFeedback<R = void, P0 = boolean>(_v: P0): R;
    shouldProvideHapticFeedback<R = boolean>(): R;
    setShouldProvideHapticFeedback<R = void, P0 = boolean>(_v: P0): R;
    unsnapDistanceMaxAnglePoint<R = number>(): R;
    setUnsnapDistanceMaxAnglePoint<R = void, P0 = number>(_v: P0): R;
    resnapDistance<R = number>(): R;
    setResnapDistance<R = void, P0 = number>(_v: P0): R;
    unsnapDistanceMax<R = number>(): R;
    setUnsnapDistanceMax<R = void, P0 = number>(_v: P0): R;
    unsnapDistanceMin<R = number>(): R;
    setUnsnapDistanceMin<R = void, P0 = number>(_v: P0): R;
    unsnapDistance<R = number>(): R;
    setUnsnapDistance<R = void, P0 = number>(_v: P0): R;
    unsnapVelocity<R = number>(): R;
    setUnsnapVelocity<R = void, P0 = number>(_v: P0): R;
    snapVelocity<R = number>(): R;
    setSnapVelocity<R = void, P0 = number>(_v: P0): R;
    magneticSnapDistance<R = number>(): R;
    setMagneticSnapDistance<R = void, P0 = number>(_v: P0): R;
    snapDistance<R = number>(): R;
    setSnapDistance<R = void, P0 = number>(_v: P0): R;
    shouldLogSnapVelocity<R = boolean>(): R;
    setShouldLogSnapVelocity<R = void, P0 = boolean>(_v: P0): R;
    shouldLogSnapping<R = boolean>(): R;
    setShouldLogSnapping<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSWindowSnappingPrefsViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = NSWindowSnappingPrefsViewController>(): R;
      new: <R = NSWindowSnappingPrefsViewController>() => R;
    }
  }
}

declare const NSWindowSnappingPrefsViewController: cocoa.NSWindowSnappingPrefsViewController.CLASS;
