/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarFullScreenWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    _enableFullScreenMenubarAutohiding<R = void>(): R;
    _disableFullScreenMenubarAutohiding<R = void>(): R;
    appearance<R = unknown>(): R;
    setAppearance<R = void, P0 = unknown>(_setAppearance: P0): R;
    _backdropBleedAmount<R = number>(): R;
    accessibilityParameterizedAttributeNames<R = unknown>(): R;
    accessibilityActionNames<R = unknown>(): R;
    accessibilityAttributeValue<R = unknown, P0 = unknown>(_accessibilityAttributeValue: P0): R;
    accessibilityAttributeNames<R = unknown>(): R;
    performWindowDragWithEvent<R = void, P0 = unknown>(_performWindowDragWithEvent: P0): R;
    _shouldStartWindowDragForEvent<R = boolean, P0 = unknown>(__shouldStartWindowDragForEvent: P0): R;
    _setCursorForMouseLocation<R = void, P0 = CGPoint>(__setCursorForMouseLocation: P0): R;
    _cursorForResizeDirection<R = unknown, P0 = number>(__cursorForResizeDirection: P0): R;
    _getResizeEdgeAndCornerThicknesses<R = void, P0 = number>(__getResizeEdgeAndCornerThicknesses: P0): R;
    _currentDividerResizeDirections<R = unknown>(): R;
    _performDividerDragWithEvent_forResizeDirection<R = boolean, P0 = unknown, P1 = number>(__performDividerDragWithEvent: P0, _forResizeDirection: P1): R;
    startRectForSheet<R = CGRect, P0 = unknown>(_startRectForSheet: P0): R;
    constrainFrameRect_toScreen<R = CGRect, P0 = CGRect, P1 = unknown>(_constrainFrameRect: P0, _toScreen: P1): R;
    _tileFrameForFullScreen<R = CGRect>(): R;
    _stopClientSideMove<R = void>(): R;
    _startClientSideMove<R = void>(): R;
    _adjustWindowToScreen<R = void>(): R;
    _findKeyLoopGroupingViewFollowingKeyLoopGroupingView_direction<R = unknown, P0 = unknown, P1 = number>(__findKeyLoopGroupingViewFollowingKeyLoopGroupingView: P0, _direction: P1): R;
    _orderedDrawerAndWindowKeyLoopGroupingViews<R = unknown>(): R;
    _parentWindowForAddingToMovementGroupWithProposedParent<R = unknown, P0 = unknown>(__parentWindowForAddingToMovementGroupWithProposedParent: P0): R;
    _setFirstResponder<R = void, P0 = unknown>(__setFirstResponder: P0): R;
    _newFirstResponderIsInToolbar<R = boolean, P0 = unknown>(__newFirstResponderIsInToolbar: P0): R;
    canHide<R = boolean>(): R;
    resignKeyWindow<R = void>(): R;
    becomeKeyWindow<R = void>(): R;
    updateForceToolbarVisible<R = void>(): R;
    _windowForToolbar<R = unknown>(): R;
    description<R = unknown>(): R;
    _originalWindow<R = unknown>(): R;
    _shouldUseTexturedAppearanceForSegmentedCellInView<R = boolean, P0 = unknown>(__shouldUseTexturedAppearanceForSegmentedCellInView: P0): R;
    _ignoreForFullScreenTransition<R = boolean>(): R;
    isMainWindow<R = boolean>(): R;
    hasKeyAppearanceIncludingSheets<R = boolean, P0 = boolean>(_hasKeyAppearanceIncludingSheets: P0): R;
    _setChildWindowOrderingPriority<R = void, P0 = number>(__setChildWindowOrderingPriority: P0): R;
    _childWindowOrderingPriority<R = number>(): R;
    _setWindowTag<R = void>(): R;
    _isRunningADocModalAttachedSheet<R = boolean>(): R;
    _keyViewLoopsMayCrossWindows<R = boolean>(): R;
    _hasActiveAppearanceIgnoringKeyFocus<R = boolean>(): R;
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    _shouldDoLayerPerformanceUpdates<R = boolean>(): R;
    _canMiniaturize<R = boolean>(): R;
    isMovable<R = boolean>(): R;
    _hostsLayersInWindowServer<R = boolean>(): R;
    _allowsExteriorResizing<R = boolean>(): R;
    _updateManagedDisplay<R = void>(): R;
    _wantsFullScreenTileDropTargets<R = boolean>(): R;
    _canBeSnappingTarget<R = boolean>(): R;
    _allowsSnapping<R = boolean>(): R;
    _shouldSnapWindowsClientSide<R = boolean>(): R;
  }
  namespace NSToolbarFullScreenWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = NSToolbarFullScreenWindow>(): R;
      new: <R = NSToolbarFullScreenWindow>() => R;
    }
  }
}

declare const NSToolbarFullScreenWindow: cocoa.NSToolbarFullScreenWindow.CLASS;
