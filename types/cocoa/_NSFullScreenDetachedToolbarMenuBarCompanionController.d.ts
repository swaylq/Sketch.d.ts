/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenDetachedToolbarMenuBarCompanionController<T0 = void, T1 = void, T2 = void> extends _NSFullScreenMenuBarCompanionController {
    windowDidChangeSheetNotification<R = void, P0 = unknown>(_windowDidChangeSheetNotification: P0): R;
    updateWindowCorners<R = void>(): R;
    updateForTabbedWindowOrderFront<R = void>(): R;
    tile<R = void>(): R;
    updateWindowVisibility<R = void>(): R;
    windowDidChangeFullScreenStatus<R = void, P0 = unknown>(_windowDidChangeFullScreenStatus: P0): R;
    autohideHeightChanged<R = void>(): R;
    _enableFullScreenForceVisibleForToolbar<R = void, P0 = unknown>(__enableFullScreenForceVisibleForToolbar: P0): R;
    _disableFullScreenForceVisibleForToolbar<R = void, P0 = unknown>(__disableFullScreenForceVisibleForToolbar: P0): R;
    _disableFullScreenAutohidingForToolbar<R = void, P0 = unknown>(__disableFullScreenAutohidingForToolbar: P0): R;
    _enableFullScreenAutohidingForToolbar<R = void, P0 = unknown>(__enableFullScreenAutohidingForToolbar: P0): R;
    updateTitlebarViewBlendingMode<R = void>(): R;
    reshapeToolbarForSpaceShapeChange<R = void>(): R;
    layout<R = void>(): R;
    toolbarDidChangeAttachesToMenuBar<R = void, P0 = unknown>(_toolbarDidChangeAttachesToMenuBar: P0): R;
    resizeContentWindow<R = void>(): R;
    autohideDisabled<R = boolean>(): R;
    removeAsChildOfContentWindow<R = void>(): R;
    addAsChildOfContentWindow<R = void>(): R;
    registerForWindowNotifications<R = void, P0 = boolean>(_registerForWindowNotifications: P0): R;
    updateWindowAndContentView<R = void>(): R;
    didChangeAuxiliaryViewControllers<R = void>(): R;
    _addViewControllerToWindow<R = void>(): R;
    _calcWindowTopLeft<R = CGPoint>(): R;
    _forceUpdateSpaceAndMenubarCompanionWindowAutohideHeight<R = void>(): R;
    _updateSpaceAndMenubarCompanionWindowAutohideHeight<R = void>(): R;
    _updateMenubarCompanionWindowAutohideHeight<R = void>(): R;
    _updateSpaceIfNecessary<R = void>(): R;
    updateWindowLayout<R = void>(): R;
    updateWindowHeight<R = void>(): R;
    topCenterForSheet<R = CGPoint, P0 = unknown>(_topCenterForSheet: P0): R;
    updateWindowAlpha<R = void>(): R;
    getMenuBarTransitionDuration<R = number>(): R;
    updateMenuBarScreenRevealHeight<R = void>(): R;
    finishAnimationIfSynchronous<R = void>(): R;
    animateWindowToCorrectPositionIfNecessary<R = void>(): R;
    updateWindowPositionAnimation_startTop<R = void, P0 = number, P1 = number>(_updateWindowPositionAnimation: P0, _startTop: P1): R;
    correctWindowTopTarget<R = number>(): R;
    _makeWindowIfNecessary<R = void>(): R;
    _isTiledUnderMenuBar<R = boolean>(): R;
    _currentChildWindowOrderingPriority<R = number>(): R;
    _shouldToolbarFloatAboveSiblings<R = boolean>(): R;
    _shouldRoundCorners<R = boolean>(): R;
    toolbarWindowSize<R = CGSize>(): R;
    _visibleWindowHeight<R = number>(): R;
    effectiveClampedAutohideHeight<R = number>(): R;
    effectiveAutohideHeight<R = number>(): R;
    desiredWindowHeight<R = number>(): R;
    windowStyleMask<R = number>(): R;
    setMenuBarReveal<R = void, P0 = number>(_setMenuBarReveal: P0): R;
    _synchronizeMenuBarReveal<R = void>(): R;
    _shouldDrawBaselineForEffectiveReveal<R = boolean, P0 = number>(__shouldDrawBaselineForEffectiveReveal: P0): R;
    toolbar_didChangeFrameSizeFromOldSize<R = void, P0 = unknown, P1 = CGSize>(_toolbar: P0, _didChangeFrameSizeFromOldSize: P1): R;
    _doDidEnterFullScreen<R = void>(): R;
    _relinquishTitlebar<R = void>(): R;
    mainLayoutView<R = unknown>(): R;
    _calcAttachesToMenuBar<R = boolean>(): R;
    toolbarWindow<R = unknown>(): R;
    getToolbarLayout<R = NSToolbarFullScreenContentViewLayout_t>(): R;
    windowAnimationDuration<R = number>(): R;
    dealloc<R = void>(): R;
    _originalWindowShouldAutomaticallyAutohide<R = boolean>(): R;
    _originalWindowHasAutohideToolbarSet<R = boolean>(): R;
    titlebarView<R = NSTitlebarView>(): R;
    setTitlebarView<R = void, P0 = NSTitlebarView>(_v: P0): R;
    titlebarContainerView<R = NSTitlebarContainerView>(): R;
    setTitlebarContainerView<R = void, P0 = NSTitlebarContainerView>(_v: P0): R;
    isHandlingHotKeyEvent<R = boolean>(): R;
    setIsHandlingHotKeyEvent<R = void, P0 = boolean>(_v: P0): R;
    auxiliaryViewController<R = NSTitlebarAccessoryViewController>(): R;
    setAuxiliaryViewController<R = void, P0 = NSTitlebarAccessoryViewController>(_v: P0): R;
    toolbar<R = NSToolbar>(): R;
    setToolbar<R = void, P0 = NSToolbar>(_v: P0): R;
  }
  namespace _NSFullScreenDetachedToolbarMenuBarCompanionController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSFullScreenMenuBarCompanionController {
      alloc<R = _NSFullScreenDetachedToolbarMenuBarCompanionController>(): R;
      new: <R = _NSFullScreenDetachedToolbarMenuBarCompanionController>() => R;
    }
  }
}
