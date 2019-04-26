/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSurface<T0 = void, T1 = void, T2 = void> extends NSObject {
    displayIfNeeded<R = void>(): R;
    setNeedsDisplay<R = void>(): R;
    needsDisplay<R = boolean>(): R;
    flushWithOptions<R = void, P0 = number>(_flushWithOptions: P0): R;
    flush<R = void>(): R;
    unlockFocus<R = void>(): R;
    lockFocus<R = void>(): R;
    lockFocusIfCanDraw<R = boolean>(): R;
    isFocused<R = boolean>(): R;
    saveWeighting<R = number>(): R;
    setSaveWeighting<R = void, P0 = number>(_setSaveWeighting: P0): R;
    isVisible<R = boolean>(): R;
    isOrderedIn<R = boolean>(): R;
    alphaValue<R = number>(): R;
    setAlphaValue<R = void, P0 = number>(_setAlphaValue: P0): R;
    setOrdersOutWhileAlphaValueIsZero<R = void, P0 = boolean>(_setOrdersOutWhileAlphaValueIsZero: P0): R;
    ordersOutWhileAlphaValueIsZero<R = boolean>(): R;
    updateOrderingForAlphaValue<R = void>(): R;
    isOpaque<R = boolean>(): R;
    setOpaque<R = void, P0 = boolean>(_setOpaque: P0): R;
    deferSync<R = boolean>(): R;
    setDeferSync<R = void, P0 = boolean>(_setDeferSync: P0): R;
    clearBackingStore<R = void>(): R;
    hasBackingStore<R = boolean>(): R;
    view<R = unknown>(): R;
    setView<R = void, P0 = unknown>(_setView: P0): R;
    window<R = unknown>(): R;
    _windowDidMove<R = void, P0 = unknown>(__windowDidMove: P0): R;
    _surfaceDidChangeScreen<R = void>(): R;
    _windowDidChangeWindowNumber<R = void, P0 = unknown>(__windowDidChangeWindowNumber: P0): R;
    _windowDidChangeScreens<R = void, P0 = unknown>(__windowDidChangeScreens: P0): R;
    _windowDidComeBack<R = void, P0 = unknown>(__windowDidComeBack: P0): R;
    _windowWillGoAway<R = void, P0 = unknown>(__windowWillGoAway: P0): R;
    _windowWillClose<R = void, P0 = unknown>(__windowWillClose: P0): R;
    screen<R = unknown>(): R;
    setWindow<R = void, P0 = unknown>(_setWindow: P0): R;
    frame<R = CGRect>(): R;
    setFrame<R = void, P0 = CGRect>(_setFrame: P0): R;
    _cgScaleFactor<R = number>(): R;
    surfaceID<R = number>(): R;
    orderSurface_relativeTo<R = void, P0 = number, P1 = unknown>(_orderSurface: P0, _relativeTo: P1): R;
    orderOut<R = void>(): R;
    orderBack<R = void>(): R;
    orderFront<R = void>(): R;
    updateColorSpace<R = void>(): R;
    syncToView<R = void, P0 = boolean>(_syncToView: P0): R;
    syncToViewUnconditionally<R = void>(): R;
    _currentSurfaceFrame<R = CGRect>(): R;
    syncSurfaceWantsExtendedDynamicRange<R = void>(): R;
    syncSurfaceResolution<R = void>(): R;
    syncBackingStoreResolution<R = void>(): R;
    dealloc<R = void>(): R;
    _disposeSurface<R = void>(): R;
    _createSurface<R = void>(): R;
    _createRoundedBottomRegionForRect<R = CGSRegionObject, P0 = CGRect>(__createRoundedBottomRegionForRect: P0): R;
    _disposeBackingStore<R = void>(): R;
    _createBackingStore<R = void>(): R;
    _updateLastScreenNumber<R = void>(): R;
    initWithFrame_inWindow<R = unknown, P0 = CGRect, P1 = unknown>(_initWithFrame: P0, _inWindow: P1): R;
    initWithView<R = unknown, P0 = unknown>(_initWithView: P0): R;
    description<R = unknown>(): R;
  }
  namespace NSSurface {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSurface>(): R;
      new: <R = NSSurface>() => R;
    }
  }
}

declare const NSSurface: cocoa.NSSurface.CLASS;
