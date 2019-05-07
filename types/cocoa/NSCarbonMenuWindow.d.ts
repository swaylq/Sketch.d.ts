/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCarbonMenuWindow<T0 = void, T1 = void, T2 = void> extends NSCarbonWindow {
    disableScreenUpdatesUntilFlush<R = void>(): R;
    makeFirstResponder<R = boolean, P0 = unknown>(_makeFirstResponder: P0): R;
    accessibilityIsChildOfApp<R = boolean>(): R;
    _enableFlushWindowWithoutPerformingFlush<R = void>(): R;
    enableFlushWindow<R = void>(): R;
    displayIfNeeded<R = void>(): R;
    _recursivelyPropagateCocoaDirtyRectsToCarbonForHIView<R = void, P0 = OpaqueControlRef>(__recursivelyPropagateCocoaDirtyRectsToCarbonForHIView: P0): R;
    _recursivelyPropagateCocoaDirtyRectsForView_toCarbonView<R = void, P0 = unknown, P1 = OpaqueControlRef>(__recursivelyPropagateCocoaDirtyRectsForView: P0, _toCarbonView: P1): R;
    _propagateCocoaDirtyRectsForView_toCarbonView<R = void, P0 = unknown, P1 = OpaqueControlRef>(__propagateCocoaDirtyRectsForView: P0, _toCarbonView: P1): R;
    _carbonWindowRefDidDraw<R = void>(): R;
    _carbonWindowRefWillDraw<R = void>(): R;
    _carbonWindowRefChangedVisibilityTo<R = void, P0 = boolean>(__carbonWindowRefChangedVisibilityTo: P0): R;
    _restorePreviousKeyWindowFromSavedProperties<R = void>(): R;
    _substituteKeyWindowForAction<R = unknown, P0 = string>(__substituteKeyWindowForAction: P0): R;
    _findKeyWindowToRestoreFromSavedProperties<R = unknown>(): R;
    _setVisible<R = void, P0 = boolean>(__setVisible: P0): R;
    _updateMouseMovedState<R = void>(): R;
    _discardCursorRect<R = void, P0 = number>(__discardCursorRect: P0): R;
    _setCursorRect_index<R = void, P0 = CGRect, P1 = number>(__setCursorRect: P0, _index: P1): R;
    _removeTrackingRects_count<R = void, P0 = number, P1 = number>(__removeTrackingRects: P0, _count: P1): R;
    _removeTrackingRect<R = void, P0 = number>(__removeTrackingRect: P0): R;
    _trackingAreaInfoForTrackingRectTag<R = void, P0 = number>(__trackingAreaInfoForTrackingRectTag: P0): R;
    _synchronizeConfigurationForTrackingArea<R = void, P0 = unknown>(__synchronizeConfigurationForTrackingArea: P0): R;
    _moveTrackingArea_toRect<R = void, P0 = unknown, P1 = CGRect>(__moveTrackingArea: P0, _toRect: P1): R;
    _didInstallTrackingRect_assumeInside_userData_trackingNum<R = boolean, P0 = CGRect, P1 = boolean, P2 = void, P3 = number>(__didInstallTrackingRect: P0, _assumeInside: P1, _userData: P2, _trackingNum: P3): R;
    _trackingAreaIDForTrackingArea<R = number, P0 = unknown>(__trackingAreaIDForTrackingArea: P0): R;
    _setLastHitView<R = void, P0 = unknown>(__setLastHitView: P0): R;
    _hasActiveControls<R = boolean>(): R;
    makeKeyWindow<R = void>(): R;
    _clearPreviousKeyWindowProperties<R = void>(): R;
    _recordPreviousKeyWindowProperties<R = void>(): R;
    _sendManufacturedCursorUpdateEventForTrackingRectEvent<R = boolean, P0 = unknown>(__sendManufacturedCursorUpdateEventForTrackingRectEvent: P0): R;
    _sendManufacturedTrackingAreaEventsForMouseDraggedEvent_forceExit<R = void, P0 = unknown, P1 = boolean>(__sendManufacturedTrackingAreaEventsForMouseDraggedEvent: P0, _forceExit: P1): R;
    _allowsActiveInputContextDuringMenuTracking<R = boolean>(): R;
    _cgsPlaceWindow<R = void, P0 = CGRect>(__cgsPlaceWindow: P0): R;
    _handleKeyEvent<R = boolean, P0 = unknown>(__handleKeyEvent: P0): R;
    setAlphaValue<R = void, P0 = number>(_setAlphaValue: P0): R;
  }
  namespace NSCarbonMenuWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCarbonWindow {
      alloc<R = NSCarbonMenuWindow>(): R;
      new: <R = NSCarbonMenuWindow>() => R;
      _allowedRunLoopModesForToolTips<R = unknown>(): R;
    }
  }
}

declare const NSCarbonMenuWindow: cocoa.NSCarbonMenuWindow.CLASS;
