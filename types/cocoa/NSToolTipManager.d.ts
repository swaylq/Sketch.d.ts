/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolTipManager<T0 = void, T1 = void, T2 = void> extends NSObject {
    orderOutOnlyExpansionToolTip<R = void>(): R;
    isRegularToolTipVisible<R = boolean>(): R;
    isExpansionToolTipVisible<R = boolean>(): R;
    _toolTipTimerFiredWithToolTip<R = void, P0 = unknown>(__toolTipTimerFiredWithToolTip: P0): R;
    mouseExited<R = void, P0 = unknown>(_mouseExited: P0): R;
    mouseEntered<R = void, P0 = unknown>(_mouseEntered: P0): R;
    _isToolTipAlive<R = boolean, P0 = unknown>(__isToolTipAlive: P0): R;
    mouseEnteredToolTip_inWindow_withEvent<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_mouseEnteredToolTip: P0, _inWindow: P1, _withEvent: P2): R;
    _inQuickDisplayModeForWindow<R = boolean, P0 = unknown>(__inQuickDisplayModeForWindow: P0): R;
    abortToolTip<R = void>(): R;
    orderOutToolTipImmediately<R = void, P0 = boolean>(_orderOutToolTipImmediately: P0): R;
    fadeToolTip<R = void, P0 = unknown>(_fadeToolTip: P0): R;
    _stopFadeTimer<R = void>(): R;
    orderOutToolTip<R = void>(): R;
    displayToolTip<R = void, P0 = unknown>(_displayToolTip: P0): R;
    drawToolTip_attributedString_inView<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_drawToolTip: P0, _attributedString: P1, _inView: P2): R;
    _drawToolTipBackgroundInView<R = void, P0 = unknown>(__drawToolTipBackgroundInView: P0): R;
    installContentView_forToolTip_toolTipWindow_isNew<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(_installContentView: P0, _forToolTip: P1, _toolTipWindow: P2, _isNew: P3): R;
    onScreenToolTipWindowFrameOriginForToolTip_windowFrame_where_location<R = CGPoint, P0 = unknown, P1 = CGRect, P2 = CGPoint, P3 = CGPoint>(_onScreenToolTipWindowFrameOriginForToolTip: P0, _windowFrame: P1, _where: P2, _location: P3): R;
    toolTipContentViewWithAttributedString_location_where_windowFrame_toolTip<R = unknown, P0 = unknown, P1 = CGPoint, P2 = CGPoint, P3 = CGRect, P4 = unknown>(_toolTipContentViewWithAttributedString: P0, _location: P1, _where: P2, _windowFrame: P3, _toolTip: P4): R;
    toolTipAttributes<R = unknown>(): R;
    toolTipYOffset<R = number>(): R;
    toolTipContentMargin<R = CGSize>(): R;
    toolTipBackgroundColor<R = unknown>(): R;
    toolTipTextColor<R = unknown>(): R;
    _newToolTipWindow<R = unknown>(): R;
    _stopTimerIfRunningForToolTip<R = void, P0 = unknown>(__stopTimerIfRunningForToolTip: P0): R;
    stopTimer<R = void>(): R;
    startTimer_userInfo<R = void, P0 = number, P1 = unknown>(_startTimer: P0, _userInfo: P1): R;
    recomputeToolTipsForView_remove_add<R = void, P0 = unknown, P1 = boolean, P2 = boolean>(_recomputeToolTipsForView: P0, _remove: P1, _add: P2): R;
    orderOutToolTipForView<R = void, P0 = unknown>(_orderOutToolTipForView: P0): R;
    viewDidChangeGeometryInWindow<R = void, P0 = unknown>(_viewDidChangeGeometryInWindow: P0): R;
    toolTipForView_cell<R = unknown, P0 = unknown, P1 = unknown>(_toolTipForView: P0, _cell: P1): R;
    _findToolTipForView_passingTest<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(__findToolTipForView: P0, _passingTest: P1): R;
    removeAllToolTipsForView_withDisplayDelegate<R = void, P0 = unknown, P1 = unknown>(_removeAllToolTipsForView: P0, _withDisplayDelegate: P1): R;
    removeAllToolTipsForView_withOwner<R = void, P0 = unknown, P1 = unknown>(_removeAllToolTipsForView: P0, _withOwner: P1): R;
    removeAllToolTipsForView<R = void, P0 = unknown>(_removeAllToolTipsForView: P0): R;
    viewHasToolTips<R = boolean, P0 = unknown>(_viewHasToolTips: P0): R;
    removeToolTipForView_tag<R = void, P0 = unknown, P1 = number>(_removeToolTipForView: P0, _tag: P1): R;
    setToolTip_forView_cell<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_setToolTip: P0, _forView: P1, _cell: P2): R;
    setToolTipWithOwner_forView_cell<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_setToolTipWithOwner: P0, _forView: P1, _cell: P2): R;
    setToolTipForView_rect_owner_userData<R = number, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = void>(_setToolTipForView: P0, _rect: P1, _owner: P2, _userData: P3): R;
    setToolTipForView_rect_displayDelegate_displayInfo<R = number, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = unknown>(_setToolTipForView: P0, _rect: P1, _displayDelegate: P2, _displayInfo: P3): R;
    _removeTrackingRectForToolTip_stopTimerIfNecessary<R = void, P0 = unknown, P1 = boolean>(__removeTrackingRectForToolTip: P0, _stopTimerIfNecessary: P1): R;
    _removeTrackingRectsForView_stopTimerIfNecessary<R = void, P0 = unknown, P1 = boolean>(__removeTrackingRectsForView: P0, _stopTimerIfNecessary: P1): R;
    _setToolTip_forView_cell_rect_owner_ownerIsDisplayDelegate_userData<R = number, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CGRect, P4 = unknown, P5 = boolean, P6 = void>(__setToolTip: P0, _forView: P1, _cell: P2, _rect: P3, _owner: P4, _ownerIsDisplayDelegate: P5, _userData: P6): R;
    _removeToolTipsForView_passingTest<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__removeToolTipsForView: P0, _passingTest: P1): R;
    _addTrackingRectsForView<R = void, P0 = unknown>(__addTrackingRectsForView: P0): R;
    addTrackingRectForToolTip_reuseExistingTrackingNum<R = void, P0 = unknown, P1 = boolean>(_addTrackingRectForToolTip: P0, _reuseExistingTrackingNum: P1): R;
    _addTrackingRect_andStartToolTipIfNecessary_view_owner_toolTip_reuseExistingTrackingNum<R = number, P0 = CGRect, P1 = boolean, P2 = unknown, P3 = unknown, P4 = unknown, P5 = boolean>(__addTrackingRect: P0, _andStartToolTipIfNecessary: P1, _view: P2, _owner: P3, _toolTip: P4, _reuseExistingTrackingNum: P5): R;
    _checkDisplayDelegate<R = boolean, P0 = unknown>(__checkDisplayDelegate: P0): R;
    _getIsExpansionToolTip<R = void, P0 = unknown>(__getIsExpansionToolTip: P0): R;
    _getDisplayDelegateFadesOutWhenInactive<R = void, P0 = unknown>(__getDisplayDelegateFadesOutWhenInactive: P0): R;
    _shouldInstallToolTip<R = boolean, P0 = void>(__shouldInstallToolTip: P0): R;
    windowDidBecomeKeyNotification<R = void, P0 = unknown>(_windowDidBecomeKeyNotification: P0): R;
    setInitialToolTipDelay<R = void, P0 = number>(_setInitialToolTipDelay: P0): R;
    _menuDidBeginTracking<R = void, P0 = unknown>(__menuDidBeginTracking: P0): R;
    dealloc<R = void>(): R;
    _orderOutAllToolTipsImmediately<R = void, P0 = boolean>(__orderOutAllToolTipsImmediately: P0): R;
    _getDisplayDelay_inQuickMode_forView<R = void, P0 = number, P1 = string, P2 = unknown>(__getDisplayDelay: P0, _inQuickMode: P1, _forView: P2): R;
    _displayTemporaryToolTipForView_withDisplayDelegate_displayInfo<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__displayTemporaryToolTipForView: P0, _withDisplayDelegate: P1, _displayInfo: P2): R;
    _displayTemporaryToolTipForView_withString<R = void, P0 = unknown, P1 = unknown>(__displayTemporaryToolTipForView: P0, _withString: P1): R;
  }
  namespace NSToolTipManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSToolTipManager>(): R;
      new: <R = NSToolTipManager>() => R;
      isCurrentMouseLocationAboveWindow<R = boolean, P0 = unknown>(_isCurrentMouseLocationAboveWindow: P0): R;
      sharedToolTipManager<R = unknown>(): R;
    }
  }
}

declare const NSToolTipManager: cocoa.NSToolTipManager.CLASS;
