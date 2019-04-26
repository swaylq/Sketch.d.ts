/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewDynamicToolTipManager<T0 = void, T1 = void, T2 = void> extends NSObject {
    _currentLocalMousePoint<R = CGPoint>(): R;
    _restartMovementTracking<R = void>(): R;
    _continueMovementTracking<R = void>(): R;
    _disabledTrackingInNeighborhoodOfMouse<R = void>(): R;
    _cancelMovementTrackingTimer<R = void>(): R;
    _shouldShowRegularToolTipOnExpansionToolTip<R = boolean>(): R;
    _markMovementTrackingInfo<R = void>(): R;
    _shouldRestartMovementTracking<R = boolean>(): R;
    _displayToolTipIfNecessaryIgnoringTime<R = number, P0 = boolean>(__displayToolTipIfNecessaryIgnoringTime: P0): R;
    _shouldTrack<R = boolean>(): R;
    _canShowToolTip<R = boolean>(): R;
    _cancelCurrentToolTipWindowImmediately<R = void, P0 = boolean>(__cancelCurrentToolTipWindowImmediately: P0): R;
    view_customToolTip_fadeOutAllowedForToolTipWithDisplayInfo<R = boolean, P0 = unknown, P1 = number, P2 = unknown>(_view: P0, _customToolTip: P1, _fadeOutAllowedForToolTipWithDisplayInfo: P2): R;
    view_customToolTip_frameForToolTipWithDisplayInfo<R = CGRect, P0 = unknown, P1 = number, P2 = unknown>(_view: P0, _customToolTip: P1, _frameForToolTipWithDisplayInfo: P2): R;
    view_customToolTip_drawInView_displayInfo<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown>(_view: P0, _customToolTip: P1, _drawInView: P2, _displayInfo: P3): R;
    isExpansionToolTipInView_withDisplayInfo<R = boolean, P0 = unknown, P1 = unknown>(_isExpansionToolTipInView: P0, _withDisplayInfo: P1): R;
    dynamicToolTipRevealoverInfoAtPoint_trackingRect<R = unknown, P0 = CGPoint, P1 = CGRect>(_dynamicToolTipRevealoverInfoAtPoint: P0, _trackingRect: P1): R;
    dynamicToolTipStringAtPoint_trackingRect<R = unknown, P0 = CGPoint, P1 = CGRect>(_dynamicToolTipStringAtPoint: P0, _trackingRect: P1): R;
    dynamicToolTipRectAtPoint<R = CGRect, P0 = CGPoint>(_dynamicToolTipRectAtPoint: P0): R;
    windowChangedKeyState<R = void>(): R;
    _windowChangedKeyState<R = void>(): R;
    windowDidEnableToolTipCreationAndDisplay<R = void>(): R;
    _windowDidEnableToolTipCreationAndDisplay<R = void>(): R;
    _appActivationChanged<R = void, P0 = unknown>(__appActivationChanged: P0): R;
    viewDidEndLiveResize<R = void>(): R;
    viewWillResetCursorRects<R = void>(): R;
    windowDidBecomeVisibleNotification<R = void, P0 = unknown>(_windowDidBecomeVisibleNotification: P0): R;
    viewDidMoveToWindow<R = void>(): R;
    _setupForWindow<R = void, P0 = unknown>(__setupForWindow: P0): R;
    _threadsafeViewVisibleBoundsChanged<R = void>(): R;
    _viewVisibleBoundsChanged<R = void>(): R;
    viewWillMoveToWindow<R = void, P0 = unknown>(_viewWillMoveToWindow: P0): R;
    mouseExited<R = void, P0 = unknown>(_mouseExited: P0): R;
    mouseEntered<R = void, P0 = unknown>(_mouseEntered: P0): R;
    dealloc<R = void>(): R;
    detatchFromView<R = void>(): R;
    _removeAllTrackingRects<R = void>(): R;
    initWithView<R = unknown, P0 = unknown>(_initWithView: P0): R;
    abortToolTip<R = void>(): R;
    _abortAndRestartTracking<R = void, P0 = boolean>(__abortAndRestartTracking: P0): R;
    _removeVisibleViewTrackingRectIfNecessary<R = void>(): R;
    _removeToolTipTrackingRectIfNecessary<R = void>(): R;
  }
  namespace NSViewDynamicToolTipManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSViewDynamicToolTipManager>(): R;
      new: <R = NSViewDynamicToolTipManager>() => R;
      abortAllToolTips<R = void>(): R;
      _dynamicToolTipManagerInstances<R = unknown>(): R;
      _unregisterDynamicToolTipManagerInstance<R = void, P0 = unknown>(__unregisterDynamicToolTipManagerInstance: P0): R;
      _registerDynamicToolTipManagerInstance<R = void, P0 = unknown>(__registerDynamicToolTipManagerInstance: P0): R;
    }
  }
}

declare const NSViewDynamicToolTipManager: cocoa.NSViewDynamicToolTipManager.CLASS;
