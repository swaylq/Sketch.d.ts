/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowStackController<T = any> extends NSWindowTabGroup, NSTabBarDelegateProtocol, NSTabPickerDelegateProtocol {
    reattachFullScreenModalTabBar<R = void>(): R;
    detachedFullScreenModalTabBar<R = unknown>(): R;
    setOverviewVisible<R = void, P0 = boolean>(_setOverviewVisible: P0): R;
    isOverviewVisible<R = boolean>(): R;
    _closeTabPickerAnimated<R = void, P0 = boolean>(__closeTabPickerAnimated: P0): R;
    _openTabPickerAnimated<R = void, P0 = boolean>(__openTabPickerAnimated: P0): R;
    _syncInactiveTabWindowSizesForSnapshot<R = void>(): R;
    _moveTabPickerToWindow<R = void, P0 = unknown>(__moveTabPickerToWindow: P0): R;
    _addTabPickerView_toWindow<R = void, P0 = unknown, P1 = unknown>(__addTabPickerView: P0, _toWindow: P1): R;
    _removeTabPickerFromWindow<R = void, P0 = unknown>(__removeTabPickerFromWindow: P0): R;
    _ensureTabPickerViewController<R = void>(): R;
    _sendTabOverviewIsVisibleDidChange<R = void>(): R;
    _checkIfWindowWasClosedByTabPicker<R = void, P0 = unknown>(__checkIfWindowWasClosedByTabPicker: P0): R;
    _tabBar<R = unknown>(): R;
    setTabBarEnabled<R = void, P0 = boolean>(_setTabBarEnabled: P0): R;
    isTabBarEnabled<R = boolean>(): R;
    didExitFullScreenForWindow<R = void, P0 = unknown>(_didExitFullScreenForWindow: P0): R;
    willEnterFullScreenForWindow<R = void, P0 = unknown>(_willEnterFullScreenForWindow: P0): R;
    didEnterFullScreenForWindow<R = void, P0 = unknown>(_didEnterFullScreenForWindow: P0): R;
    setTALTabIndex_forWindow<R = void, P0 = number, P1 = unknown>(_setTALTabIndex: P0, _forWindow: P1): R;
    tabRectForWindow<R = CGRect, P0 = unknown>(_tabRectForWindow: P0): R;
    tabIndexForWindow<R = number, P0 = unknown>(_tabIndexForWindow: P0): R;
    moveTabToNewWindow<R = void, P0 = unknown>(_moveTabToNewWindow: P0): R;
    unpinTabForWindow<R = void, P0 = unknown>(_unpinTabForWindow: P0): R;
    pinTabForWindow<R = void, P0 = unknown>(_pinTabForWindow: P0): R;
    _onePastLastPinnedTab<R = number>(): R;
    _animateTabMergeOfWindowsFromTargetWindow<R = boolean, P0 = unknown>(__animateTabMergeOfWindowsFromTargetWindow: P0): R;
    _regularTabMergeOfWindowsFromTargetWindow<R = boolean, P0 = unknown>(__regularTabMergeOfWindowsFromTargetWindow: P0): R;
    _enumerateTabMergableWindows_targetWindow<R = void, P0 = CDUnknownBlockType, P1 = unknown>(__enumerateTabMergableWindows: P0, _targetWindow: P1): R;
    _doDockWindowMinimizeOfSelectedWindow<R = void>(): R;
    handleDeminimizingWindow<R = boolean, P0 = unknown>(_handleDeminimizingWindow: P0): R;
    didFinishDeminiaturizeWindow<R = void, P0 = unknown>(_didFinishDeminiaturizeWindow: P0): R;
    handleMinimizingWindow<R = boolean, P0 = unknown>(_handleMinimizingWindow: P0): R;
    beginNextSheetAfterWindow<R = void, P0 = unknown>(_beginNextSheetAfterWindow: P0): R;
    moveWindow_toWindowStackController_atIndex<R = void, P0 = unknown, P1 = unknown, P2 = number>(_moveWindow: P0, _toWindowStackController: P1, _atIndex: P2): R;
    _insertDraggedItemAtIndex_fromController_sourceIndex<R = boolean, P0 = number, P1 = unknown, P2 = number>(__insertDraggedItemAtIndex: P0, _fromController: P1, _sourceIndex: P2): R;
    _currentTabMenuTargetedForWindow<R = unknown, P0 = unknown>(__currentTabMenuTargetedForWindow: P0): R;
    _moveItemAtIndex_toIndex<R = void, P0 = number, P1 = number>(__moveItemAtIndex: P0, _toIndex: P1): R;
    performCloseAllWindowsExcept<R = void, P0 = unknown>(_performCloseAllWindowsExcept: P0): R;
    _closeAllWindowsExceptItemAtIndex<R = void, P0 = number>(__closeAllWindowsExceptItemAtIndex: P0): R;
    _doCloseButtonCloseOnWindow_withHighlight<R = void, P0 = unknown, P1 = boolean>(__doCloseButtonCloseOnWindow: P0, _withHighlight: P1): R;
    _closeWindowAtIndex<R = void, P0 = number>(__closeWindowAtIndex: P0): R;
    attemptToCloseEntireStack<R = boolean, P0 = unknown>(_attemptToCloseEntireStack: P0): R;
    _selectWindowWithoutOrderingFront<R = void, P0 = unknown>(__selectWindowWithoutOrderingFront: P0): R;
    _doTabSelectionAndWindowOrderingAtIndex_makeKeyAndOrderFront_justOrderFront<R = void, P0 = number, P1 = boolean, P2 = boolean>(__doTabSelectionAndWindowOrderingAtIndex: P0, _makeKeyAndOrderFront: P1, _justOrderFront: P2): R;
    _doWindowOrderingToSwapPriorWindow_withNewWindow<R = void, P0 = unknown, P1 = unknown>(__doWindowOrderingToSwapPriorWindow: P0, _withNewWindow: P1): R;
    _ensureWindowHasTabBar<R = void, P0 = unknown>(__ensureWindowHasTabBar: P0): R;
    _exitWindowFromFullScreenIfNeeded_basedOnWindow<R = void, P0 = unknown, P1 = unknown>(__exitWindowFromFullScreenIfNeeded: P0, _basedOnWindow: P1): R;
    _enterWindow_intoFullScreenWithWindow<R = void, P0 = unknown, P1 = unknown>(__enterWindow: P0, _intoFullScreenWithWindow: P1): R;
    _doTabSelectionAndWindowOrderingAtIndex<R = void, P0 = number>(__doTabSelectionAndWindowOrderingAtIndex: P0): R;
    selectPreviousTab<R = void>(): R;
    selectNextTab<R = void>(): R;
    setSelectedTabButtonIndex<R = void, P0 = number>(_setSelectedTabButtonIndex: P0): R;
    selectedTabButtonIndex<R = number>(): R;
    _windowYankedOutIntoNewControllerFromIndex<R = unknown, P0 = number>(__windowYankedOutIntoNewControllerFromIndex: P0): R;
    _yankWindowFromIndex<R = void, P0 = number>(__yankWindowFromIndex: P0): R;
    _removeSyncedItemAtIndex<R = void, P0 = number>(__removeSyncedItemAtIndex: P0): R;
    _selectNextTabWhenRemovingTabAtIndex<R = void, P0 = number>(__selectNextTabWhenRemovingTabAtIndex: P0): R;
    _nextSelectedIndexAfterRemovingIndex<R = number, P0 = number>(__nextSelectedIndexAfterRemovingIndex: P0): R;
    nextWindowToSelectAfterClosingWindow<R = unknown, P0 = unknown>(_nextWindowToSelectAfterClosingWindow: P0): R;
    _removeSyncedTabBarItem<R = void, P0 = unknown>(__removeSyncedTabBarItem: P0): R;
    _wrapperForTabBarItem<R = unknown, P0 = unknown>(__wrapperForTabBarItem: P0): R;
    _indexOfWrapperForTabBarItem<R = number, P0 = unknown>(__indexOfWrapperForTabBarItem: P0): R;
    _syncedWrapperForTabBarItem<R = unknown, P0 = unknown>(__syncedWrapperForTabBarItem: P0): R;
    _noteTabbingChangedForWindow<R = void, P0 = unknown>(__noteTabbingChangedForWindow: P0): R;
    _addSyncedTabBarItemForWindow_atIndex<R = void, P0 = unknown, P1 = number>(__addSyncedTabBarItemForWindow: P0, _atIndex: P1): R;
    _shouldAnimateTabInsertion<R = boolean>(): R;
    _tabPickerIsVisible<R = boolean>(): R;
    _tabBarShouldBeVisible<R = boolean>(): R;
    _setTabBarIsVisible_force<R = void, P0 = boolean, P1 = boolean>(__setTabBarIsVisible: P0, _force: P1): R;
    _shouldShowTabBarKey<R = unknown>(): R;
    _selectedWindow<R = unknown>(): R;
    windowCount<R = number>(): R;
    windows<R = unknown>(): R;
    makeActiveStack<R = void>(): R;
    _windowForTabViewItem<R = unknown, P0 = unknown>(__windowForTabViewItem: P0): R;
    syncToolbarsBasedOnWindow<R = void, P0 = unknown>(_syncToolbarsBasedOnWindow: P0): R;
    _syncToolbarOfWindow_withPropertiesOfWindow<R = void, P0 = unknown, P1 = unknown>(__syncToolbarOfWindow: P0, _withPropertiesOfWindow: P1): R;
    _removeTabBarAccessoryViewControllerForWindow<R = void, P0 = unknown>(__removeTabBarAccessoryViewControllerForWindow: P0): R;
    _ensureAccessoryViewControllerExistsForWindow<R = void, P0 = unknown>(__ensureAccessoryViewControllerExistsForWindow: P0): R;
    _ensureTabBarBasedOnWindow<R = void, P0 = unknown>(__ensureTabBarBasedOnWindow: P0): R;
    windowDidGainToolbar<R = void, P0 = unknown>(_windowDidGainToolbar: P0): R;
    _makeTabBarForWindow_visible<R = void, P0 = unknown, P1 = boolean>(__makeTabBarForWindow: P0, _visible: P1): R;
    windowBeingDragged<R = NSWindow>(): R;
    stateIdentifier<R = NSString>(): R;
    setStateIdentifier<R = void, P0 = NSString>(_v: P0): R;
    fullScreenModalStackController<R = _NSFullScreenModalStackController>(): R;
    setFullScreenModalStackController<R = void, P0 = _NSFullScreenModalStackController>(_v: P0): R;
    shouldAnimate<R = boolean>(): R;
    setShouldAnimate<R = void, P0 = boolean>(_v: P0): R;
    tabBarVisible<R = boolean>(): R;
    setTabBarVisible<R = void, P0 = boolean>(_v: P0): R;
    shouldShowTabBarWithOneItem<R = boolean>(): R;
    setShouldShowTabBarWithOneItem<R = void, P0 = boolean>(_v: P0): R;
    numberOfTabs<R = number>(): R;
    selectedWindow<R = NSWindow>(): R;
    setSelectedWindow<R = void, P0 = NSWindow>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSWindowStackController<T = any> extends NSWindowTabGroup, NSTabBarDelegateProtocol, NSTabPickerDelegateProtocol {
      alloc<R = NSWindowStackController>(): R;
      new: <R = NSWindowStackController>() => R;
      enableTabBar<R = void>(): R;
      disableTabBar<R = void>(): R;
      setTabPlusButtonWasClicked<R = void, P0 = boolean>(_setTabPlusButtonWasClicked: P0): R;
      tabPlusButtonWasClicked<R = boolean>(): R;
      didFinishRestoring<R = void>(): R;
      mergeAllWindowsWithWindow<R = boolean, P0 = unknown>(_mergeAllWindowsWithWindow: P0): R;
      moveWindow_toModalStackController<R = void, P0 = unknown, P1 = unknown>(_moveWindow: P0, _toModalStackController: P1): R;
      _tabBarIsVisibleForIdentifier<R = boolean, P0 = unknown>(__tabBarIsVisibleForIdentifier: P0): R;
      topStackController<R = unknown>(): R;
      findStackControllerForIdentifier_stateIdentifier<R = unknown, P0 = unknown, P1 = unknown>(_findStackControllerForIdentifier: P0, _stateIdentifier: P1): R;
      setupStackControllerForWindow_attemptToJoinExistingStack_makeIfNeeded<R = void, P0 = unknown, P1 = boolean, P2 = boolean>(_setupStackControllerForWindow: P0, _attemptToJoinExistingStack: P1, _makeIfNeeded: P2): R;
      setupStackControllerIfTabBarShownForWindow<R = void, P0 = unknown>(_setupStackControllerIfTabBarShownForWindow: P0): R;
      canJoinExistingStackForWindow<R = boolean, P0 = unknown>(_canJoinExistingStackForWindow: P0): R;
    }
  }
}

declare const NSWindowStackController: cocoa.classes.NSWindowStackController;