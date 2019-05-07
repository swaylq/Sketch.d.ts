/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStatusBar<T0 = void, T1 = void, T2 = void> extends NSObject {
    _statusItemIsDeallocing<R = void, P0 = unknown>(__statusItemIsDeallocing: P0): R;
    _performKeyEquivalent<R = boolean, P0 = unknown>(__performKeyEquivalent: P0): R;
    _requestStatusBarAdjustmentWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(__requestStatusBarAdjustmentWithCompletionHandler: P0): R;
    _setLengthOfStatusItem_to<R = void, P0 = unknown, P1 = number>(__setLengthOfStatusItem: P0, _to: P1): R;
    _removeStatusItem<R = void, P0 = unknown>(__removeStatusItem: P0): R;
    _insertStatusItem<R = void, P0 = unknown>(__insertStatusItem: P0): R;
    _insertObjectInItemArray<R = void, P0 = unknown>(__insertObjectInItemArray: P0): R;
    _removeObjectFromItemArray<R = void, P0 = unknown>(__removeObjectFromItemArray: P0): R;
    _activeMenuBarDrawingStyleDidChange<R = void, P0 = unknown>(__activeMenuBarDrawingStyleDidChange: P0): R;
    _updateItemsWithAppearanceChange<R = void>(): R;
    _updateItemsWithChangedActiveDisplay<R = void>(): R;
    _menuBarThemeDidChange<R = void, P0 = unknown>(__menuBarThemeDidChange: P0): R;
    _activeDisplayDidChange<R = void, P0 = unknown>(__activeDisplayDidChange: P0): R;
    _setRegisteredForNotifications<R = void, P0 = boolean>(__setRegisteredForNotifications: P0): R;
    _exitFullScreenItemForSpaceID<R = unknown, P0 = number>(__exitFullScreenItemForSpaceID: P0): R;
    _statusItemWithLength_systemInsertOrder<R = unknown, P0 = number, P1 = number>(__statusItemWithLength: P0, _systemInsertOrder: P1): R;
    _statusItemWithLength_withPriority<R = unknown, P0 = number, P1 = number>(__statusItemWithLength: P0, _withPriority: P1): R;
    _name<R = unknown>(): R;
    removeStatusItem<R = void, P0 = unknown>(_removeStatusItem: P0): R;
    statusItemWithLength<R = unknown, P0 = number>(_statusItemWithLength: P0): R;
    dealloc<R = void>(): R;
    _withAdjustmentDeferred<R = void, P0 = CDUnknownBlockType>(__withAdjustmentDeferred: P0): R;
    _replicantKeys<R = unknown>(): R;
    _replicateStatusItemsForScreenParameters<R = void>(): R;
    _statusItems<R = unknown>(): R;
    backgroundStyleForHighlight<R = number, P0 = boolean>(_backgroundStyleForHighlight: P0): R;
    drawBackgroundInRect_inView_highlight<R = void, P0 = CGRect, P1 = unknown, P2 = boolean>(_drawBackgroundInRect: P0, _inView: P1, _highlight: P2): R;
    _lengthForSize<R = number, P0 = CGSize>(__lengthForSize: P0): R;
    _direction<R = number>(): R;
    _placement<R = number>(): R;
    _createStatusItemControlInWindow<R = unknown, P0 = unknown>(__createStatusItemControlInWindow: P0): R;
    _createStatusItemWindow<R = unknown>(): R;
    _userRemoveStatusItem<R = void, P0 = unknown>(__userRemoveStatusItem: P0): R;
    _navigationCtrlF8Pressed<R = void>(): R;
    _CGSstatusBarUsesRTLLayoutForWindow<R = boolean, P0 = unknown>(__CGSstatusBarUsesRTLLayoutForWindow: P0): R;
    _CGSgetWindowFrame<R = CGRect, P0 = unknown>(__CGSgetWindowFrame: P0): R;
    _CGSremoveWindow<R = void, P0 = unknown>(__CGSremoveWindow: P0): R;
    _CGSnavigationChangedRecordGetCurrentOptions<R = number, P0 = void>(__CGSnavigationChangedRecordGetCurrentOptions: P0): R;
    _CGSnavigationChangedRecordGetCurrentWindow<R = unknown, P0 = void>(__CGSnavigationChangedRecordGetCurrentWindow: P0): R;
    _CGSstatusBarWindowIsDraggedOutOfBar<R = boolean, P0 = unknown>(__CGSstatusBarWindowIsDraggedOutOfBar: P0): R;
    _CGSnavigateFromWindow_command_options<R = void, P0 = unknown, P1 = number, P2 = number>(__CGSnavigateFromWindow: P0, _command: P1, _options: P2): R;
    _CGSgetStatusBarCurrentNavigationWindow<R = unknown>(): R;
    _CGSgetStatusBarPreferredPositionForWindow<R = number, P0 = unknown>(__CGSgetStatusBarPreferredPositionForWindow: P0): R;
    _CGSinsertReplicantWindow_ofWindow_withDisplayID_withFlags<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(__CGSinsertReplicantWindow: P0, _ofWindow: P1, _withDisplayID: P2, _withFlags: P3): R;
    _CGSinsertWindow_withPriority_withSpaceID_withDisplayID_withFlags_preferredPosition_systemInsertOrder<R = void, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = number, P5 = number, P6 = number>(__CGSinsertWindow: P0, _withPriority: P1, _withSpaceID: P2, _withDisplayID: P3, _withFlags: P4, _preferredPosition: P5, _systemInsertOrder: P6): R;
    _CGSsupportsStatusItemDragging<R = boolean>(): R;
    thickness<R = number>(): R;
    vertical<R = boolean>(): R;
  }
  namespace NSStatusBar {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSStatusBar>(): R;
      new: <R = NSStatusBar>() => R;
      systemStatusBar<R = unknown>(): R;
    }
  }
}

declare const NSStatusBar: cocoa.NSStatusBar.CLASS;
