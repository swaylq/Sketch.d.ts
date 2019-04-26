/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSplitViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSSplitViewDelegateProtocol, NSUserInterfaceValidationsProtocol {
    toggleSidebar<R = void, P0 = unknown>(_toggleSidebar: P0): R;
    _sidebarItemForToggling<R = unknown>(): R;
    _splitView_didStopOverlayingView<R = void, P0 = unknown, P1 = unknown>(__splitView: P0, _didStopOverlayingView: P1): R;
    _splitView_didStartOverlayingView<R = void, P0 = unknown, P1 = unknown>(__splitView: P0, _didStartOverlayingView: P1): R;
    setHidesFirstDivider<R = void, P0 = boolean>(_setHidesFirstDivider: P0): R;
    hidesFirstDivider<R = boolean>(): R;
    setHidesLastDivider<R = void, P0 = boolean>(_setHidesLastDivider: P0): R;
    hidesLastDivider<R = boolean>(): R;
    _setHoldingPriority_forSplitViewItem<R = void, P0 = number, P1 = unknown>(__setHoldingPriority: P0, _forSplitViewItem: P1): R;
    _splitView_holdingPriorityForViewAtIndex<R = number, P0 = unknown, P1 = number>(__splitView: P0, _holdingPriorityForViewAtIndex: P1): R;
    _splitViewItemSizesAfterSplitViewItem_isCollapsed<R = unknown, P0 = unknown, P1 = boolean>(__splitViewItemSizesAfterSplitViewItem: P0, _isCollapsed: P1): R;
    _collapse_splitViewItem_forceOverlay_completionHandler<R = void, P0 = boolean, P1 = unknown, P2 = boolean, P3 = CDUnknownBlockType>(__collapse: P0, _splitViewItem: P1, _forceOverlay: P2, _completionHandler: P3): R;
    _shouldUseConstraintAnimationToCollapseItem_withWindowResize<R = boolean, P0 = unknown, P1 = boolean>(__shouldUseConstraintAnimationToCollapseItem: P0, _withWindowResize: P1): R;
    _shrinkingWindowAnchorEdgeToShowItem_withSize_atIndex<R = number, P0 = unknown, P1 = CGSize, P2 = number>(__shrinkingWindowAnchorEdgeToShowItem: P0, _withSize: P1, _atIndex: P2): R;
    _growingWindowAnchorEdgeToShowItem_withSize_atIndex<R = number, P0 = unknown, P1 = CGSize, P2 = number>(__growingWindowAnchorEdgeToShowItem: P0, _withSize: P1, _atIndex: P2): R;
    _shouldShrinkWindowToShowItem_withSize<R = boolean, P0 = unknown, P1 = CGSize>(__shouldShrinkWindowToShowItem: P0, _withSize: P1): R;
    _shouldGrowWindowToShowItem_withSize<R = boolean, P0 = unknown, P1 = CGSize>(__shouldGrowWindowToShowItem: P0, _withSize: P1): R;
    _canOverlaySplitViewItem<R = boolean, P0 = unknown>(__canOverlaySplitViewItem: P0): R;
    _splitView_appearanceForDividerAtIndex<R = unknown, P0 = unknown, P1 = number>(__splitView: P0, _appearanceForDividerAtIndex: P1): R;
    _splitView_blendingModeForDividerAtIndex<R = number, P0 = unknown, P1 = number>(__splitView: P0, _blendingModeForDividerAtIndex: P1): R;
    _splitView_shouldHaveVibrantDividerAtIndex<R = boolean, P0 = unknown, P1 = number>(__splitView: P0, _shouldHaveVibrantDividerAtIndex: P1): R;
    _splitView_canSpringLoadRevealArrangedSubview<R = boolean, P0 = unknown, P1 = unknown>(__splitView: P0, _canSpringLoadRevealArrangedSubview: P1): R;
    splitView_doubleClickedOnDividerAtIndex<R = boolean, P0 = unknown, P1 = number>(_splitView: P0, _doubleClickedOnDividerAtIndex: P1): R;
    _splitView_canLiveCollapseArrangedSubview<R = boolean, P0 = unknown, P1 = unknown>(__splitView: P0, _canLiveCollapseArrangedSubview: P1): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _indexOfSplitViewItem<R = number, P0 = unknown>(__indexOfSplitViewItem: P0): R;
    _arrangedViewForSplitViewItem<R = unknown, P0 = unknown>(__arrangedViewForSplitViewItem: P0): R;
    _splitViewItemForArrangedView<R = unknown, P0 = unknown>(__splitViewItemForArrangedView: P0): R;
    _splitViewItemForViewAtIndex<R = unknown, P0 = number>(__splitViewItemForViewAtIndex: P0): R;
    _splitViewItemForViewControllerAtIndex<R = unknown, P0 = number>(__splitViewItemForViewControllerAtIndex: P0): R;
    splitViewItemForViewController<R = unknown, P0 = unknown>(_splitViewItemForViewController: P0): R;
    removeSplitViewItem<R = void, P0 = unknown>(_removeSplitViewItem: P0): R;
    _insertArrangedView_atIndex<R = void, P0 = unknown, P1 = number>(__insertArrangedView: P0, _atIndex: P1): R;
    _viewInsertionIndexForSplitViewItem<R = number, P0 = unknown>(__viewInsertionIndexForSplitViewItem: P0): R;
    _insertWrapperViewIntoSplitViewForSplitViewItem_atIndex<R = void, P0 = unknown, P1 = number>(__insertWrapperViewIntoSplitViewForSplitViewItem: P0, _atIndex: P1): R;
    insertSplitViewItem_atIndex<R = void, P0 = unknown, P1 = number>(_insertSplitViewItem: P0, _atIndex: P1): R;
    addSplitViewItem<R = void, P0 = unknown>(_addSplitViewItem: P0): R;
    setMinimumSizeForInlineSidebars<R = void, P0 = number>(_setMinimumSizeForInlineSidebars: P0): R;
    minimumSizeForInlineSidebars<R = number>(): R;
    _updateSplitViewPositioningConstraints<R = void>(): R;
    _tearDownSplitView<R = void>(): R;
    _setupSplitView<R = void>(): R;
    setView<R = void, P0 = unknown>(_setView: P0): R;
    _splitViewFrame<R = CGRect>(): R;
    _defaultFrame<R = CGRect>(): R;
    _makeSplitViewWithFrame<R = unknown, P0 = CGRect>(__makeSplitViewWithFrame: P0): R;
    _splitView<R = unknown>(): R;
    _updateSplitView_withBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__updateSplitView: P0, _withBlock: P1): R;
    splitViewItem_didChangeCollapsed_animated<R = void, P0 = unknown, P1 = boolean, P2 = boolean>(_splitViewItem: P0, _didChangeCollapsed: P1, _animated: P2): R;
    splitViewItem_isChangingCollapsed_animated<R = void, P0 = unknown, P1 = boolean, P2 = boolean>(_splitViewItem: P0, _isChangingCollapsed: P1, _animated: P2): R;
    splitViewItem_willChangeCollapsed_animated<R = void, P0 = unknown, P1 = boolean, P2 = boolean>(_splitViewItem: P0, _willChangeCollapsed: P1, _animated: P2): R;
    _stopObservingEdgeHover<R = void>(): R;
    _uncollapseEdgeRevealItem<R = void, P0 = unknown>(__uncollapseEdgeRevealItem: P0): R;
    _startObservingEdgeHover<R = void>(): R;
    _updateHasItemToRevealOnEdgeHover<R = void>(): R;
    _setHasItemToRevealOnEdgeHover<R = void, P0 = boolean>(__setHasItemToRevealOnEdgeHover: P0): R;
    _hasItemToRevealOnEdgeHover<R = boolean>(): R;
    _didExitFullscreen<R = void, P0 = unknown>(__didExitFullscreen: P0): R;
    _didEnterFullscreen<R = void, P0 = unknown>(__didEnterFullscreen: P0): R;
    _stopObservingFullscreenForWindow<R = void, P0 = unknown>(__stopObservingFullscreenForWindow: P0): R;
    _startObservingFullscreenForWindow<R = void, P0 = unknown>(__startObservingFullscreenForWindow: P0): R;
    splitViewItems<R = NSArray>(): R;
    setSplitViewItems<R = void, P0 = NSArray>(_v: P0): R;
    minimumThicknessForInlineSidebars<R = number>(): R;
    setMinimumThicknessForInlineSidebars<R = void, P0 = number>(_v: P0): R;
    splitView<R = NSSplitView>(): R;
    setSplitView<R = void, P0 = NSSplitView>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSSplitViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSSplitViewDelegateProtocol, NSUserInterfaceValidationsProtocol {
      alloc<R = NSSplitViewController>(): R;
      new: <R = NSSplitViewController>() => R;
    }
  }
}

declare const NSSplitViewController: cocoa.NSSplitViewController.CLASS;
