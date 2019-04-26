/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCarbonWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    _focusRelinquished<R = number>(): R;
    _focusAcquired<R = number>(): R;
    _removeReferencesToCarbonWindowRef<R = void>(): R;
    _allowsActiveInputContext<R = boolean>(): R;
    _setForceNotKeyWindowForInputContext<R = void, P0 = boolean>(__setForceNotKeyWindowForInputContext: P0): R;
    handleMouseDownEvent_at_inPart_withMods<R = number, P0 = OpaqueEventRef, P1 = Point, P2 = number, P3 = number>(_handleMouseDownEvent: P0, _at: P1, _inPart: P2, _withMods: P3): R;
    handleCarbonBoundsChange<R = void>(): R;
    undo<R = void, P0 = unknown>(_undo: P0): R;
    selectAll<R = void, P0 = unknown>(_selectAll: P0): R;
    redo<R = void, P0 = unknown>(_redo: P0): R;
    paste<R = void, P0 = unknown>(_paste: P0): R;
    cut<R = void, P0 = unknown>(_cut: P0): R;
    copy<R = void, P0 = unknown>(_copy: P0): R;
    clear<R = void, P0 = unknown>(_clear: P0): R;
    sendCarbonUpdateHICommandStatusEvent_withMenuRef_andMenuItemIndex<R = number, P0 = number, P1 = OpaqueMenuRef, P2 = number>(_sendCarbonUpdateHICommandStatusEvent: P0, _withMenuRef: P1, _andMenuItemIndex: P2): R;
    sendCarbonProcessHICommandEvent<R = void, P0 = number>(_sendCarbonProcessHICommandEvent: P0): R;
    carbonHICommandIDFromActionSelector<R = number, P0 = string>(_carbonHICommandIDFromActionSelector: P0): R;
    _restoreLevelAfterRunningModal<R = void>(): R;
    _clearModalWindowLevel<R = unknown>(): R;
    _setModalWindowLevel<R = void>(): R;
    startRectForSheet<R = CGRect, P0 = unknown>(_startRectForSheet: P0): R;
    worksWhenModal<R = boolean>(): R;
    setHidesOnDeactivate<R = void, P0 = boolean>(_setHidesOnDeactivate: P0): R;
    setHasShadow<R = void, P0 = boolean>(_setHasShadow: P0): R;
    setContentView<R = void, P0 = unknown>(_setContentView: P0): R;
    sendEvent<R = void, P0 = unknown>(_sendEvent: P0): R;
    _handleEventsTheCarbonWay<R = boolean>(): R;
    resignMainWindow<R = void>(): R;
    resignKeyWindow<R = void>(): R;
    setStyleMask<R = void, P0 = number>(_setStyleMask: P0): R;
    _setEventMask<R = void, P0 = number>(__setEventMask: P0): R;
    setLevel<R = void, P0 = number>(_setLevel: P0): R;
    level<R = number>(): R;
    display<R = void>(): R;
    isExcludedFromWindowsMenu<R = boolean>(): R;
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    becomeMainWindow<R = void>(): R;
    becomeKeyWindow<R = void>(): R;
    constrainFrameRect_toScreen<R = CGRect, P0 = CGRect, P1 = unknown>(_constrainFrameRect: P0, _toScreen: P1): R;
    _windowMovedToRect<R = void, P0 = CGRect>(__windowMovedToRect: P0): R;
    _resetDragMargins<R = void>(): R;
    _termWindowIfOwner<R = void>(): R;
    _reallyDoOrderWindow_relativeTo_findKey_forCounter_force_isModal<R = void, P0 = number, P1 = number, P2 = boolean, P3 = boolean, P4 = boolean, P5 = boolean>(__reallyDoOrderWindow: P0, _relativeTo: P1, _findKey: P2, _forCounter: P3, _force: P4, _isModal: P5): R;
    _oldPlaceWindow<R = void, P0 = CGRect>(__oldPlaceWindow: P0): R;
    _destroyRealWindow<R = unknown, P0 = boolean>(__destroyRealWindow: P0): R;
    _commonAwake<R = void>(): R;
    _cancelKey<R = void, P0 = unknown>(__cancelKey: P0): R;
    _postCarbonWindowActivateEvent_makeKeyWindow<R = void, P0 = boolean, P1 = boolean>(__postCarbonWindowActivateEvent: P0, _makeKeyWindow: P1): R;
    sendSuperEvent<R = void, P0 = unknown>(_sendSuperEvent: P0): R;
    reconcileToCarbonWindowBounds<R = boolean>(): R;
    carbonPlatformWindowBounds<R = CGRect>(): R;
    _carbonWindowClass<R = number>(): R;
    _setWindowRef<R = void, P0 = OpaqueWindowPtr>(__setWindowRef: P0): R;
    _removeWindowRef<R = void>(): R;
    _managesWindowRef<R = boolean>(): R;
    _hasWindowRef<R = boolean>(): R;
    windowRef<R = OpaqueWindowPtr>(): R;
    _cleanup<R = void>(): R;
    initWithCarbonWindowRef_takingOwnership<R = unknown, P0 = OpaqueWindowPtr, P1 = boolean>(_initWithCarbonWindowRef: P0, _takingOwnership: P1): R;
    initWithCarbonWindowRef_takingOwnership_disableOrdering<R = unknown, P0 = OpaqueWindowPtr, P1 = boolean, P2 = boolean>(_initWithCarbonWindowRef: P0, _takingOwnership: P1, _disableOrdering: P2): R;
    initWithContentRect_styleMask_backing_defer<R = unknown, P0 = CGRect, P1 = number, P2 = number, P3 = boolean>(_initWithContentRect: P0, _styleMask: P1, _backing: P2, _defer: P3): R;
    cwFlags<R = number>(): R;
    setCwFlags<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSCarbonWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = NSCarbonWindow>(): R;
      new: <R = NSCarbonWindow>() => R;
      setWindowLevelOfWindowGroupForWindowRef_toLevel<R = void, P0 = OpaqueWindowPtr, P1 = number>(_setWindowLevelOfWindowGroupForWindowRef: P0, _toLevel: P1): R;
      frameViewClassForStyleMask<R = unknown, P0 = number>(_frameViewClassForStyleMask: P0): R;
    }
  }
}

declare const NSCarbonWindow: cocoa.NSCarbonWindow.CLASS;
