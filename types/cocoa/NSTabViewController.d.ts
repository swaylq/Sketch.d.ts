/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTabViewDelegateProtocol, NSToolbarDelegateProtocol {
    _associatedTabStyleForUIProvider<R = number, P0 = unknown>(__associatedTabStyleForUIProvider: P0): R;
    _implicitUIProviderForTabStyle<R = unknown, P0 = number>(__implicitUIProviderForTabStyle: P0): R;
    setUIProvider<R = void, P0 = unknown>(_setUIProvider: P0): R;
    UIProvider<R = unknown>(): R;
    tabBar_acceptDrop_index<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(_tabBar: P0, _acceptDrop: P1, _index: P2): R;
    tabBar_validateDrop<R = number, P0 = unknown, P1 = unknown>(_tabBar: P0, _validateDrop: P1): R;
    tabBar_didFinishTransitionAnimationForWindow<R = void, P0 = unknown, P1 = unknown>(_tabBar: P0, _didFinishTransitionAnimationForWindow: P1): R;
    tabBar_destinationWindowForDetachedTabBarViewItem<R = unknown, P0 = unknown, P1 = unknown>(_tabBar: P0, _destinationWindowForDetachedTabBarViewItem: P1): R;
    tabBar_detachedWindowImageForDraggedTabBarViewItem<R = unknown, P0 = unknown, P1 = unknown>(_tabBar: P0, _detachedWindowImageForDraggedTabBarViewItem: P1): R;
    tabBar_acceptTabDrop_index<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(_tabBar: P0, _acceptTabDrop: P1, _index: P2): R;
    tabBar_validateTabDrop<R = number, P0 = unknown, P1 = unknown>(_tabBar: P0, _validateTabDrop: P1): R;
    tabBar_menuForTabBarViewItem_event<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_tabBar: P0, _menuForTabBarViewItem: P1, _event: P2): R;
    tabBar_didMoveTabBarViewItem_fromIndex_toIndex_isChangingPinnedness<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = number, P4 = boolean>(_tabBar: P0, _didMoveTabBarViewItem: P1, _fromIndex: P2, _toIndex: P3, _isChangingPinnedness: P4): R;
    tabBar_closeTabBarViewItem<R = void, P0 = unknown, P1 = unknown>(_tabBar: P0, _closeTabBarViewItem: P1): R;
    selectedTabBarViewItemAfterClosingCurrentTabInTabBar<R = unknown, P0 = unknown>(_selectedTabBarViewItemAfterClosingCurrentTabInTabBar: P0): R;
    tabBar_selectTabBarViewItem<R = void, P0 = unknown, P1 = unknown>(_tabBar: P0, _selectTabBarViewItem: P1): R;
    createNewTabInTabBar<R = void, P0 = unknown>(_createNewTabInTabBar: P0): R;
    _hasPropagatedTitle<R = boolean>(): R;
    title<R = unknown>(): R;
    _updateSelectedTabViewItemIndexInUI<R = void>(): R;
    _tabViewItemWithIdentifier<R = unknown, P0 = unknown>(__tabViewItemWithIdentifier: P0): R;
    _indexOfTabViewItem<R = number, P0 = unknown>(__indexOfTabViewItem: P0): R;
    _tabViewItemForViewControllerAtIndex<R = unknown, P0 = number>(__tabViewItemForViewControllerAtIndex: P0): R;
    tabViewItemForViewController<R = unknown, P0 = unknown>(_tabViewItemForViewController: P0): R;
    removeTabViewItem<R = void, P0 = unknown>(_removeTabViewItem: P0): R;
    moveTabViewItem_toIndex<R = void, P0 = unknown, P1 = number>(_moveTabViewItem: P0, _toIndex: P1): R;
    insertTabViewItem_atIndex<R = void, P0 = unknown, P1 = number>(_insertTabViewItem: P0, _atIndex: P1): R;
    addTabViewItem<R = void, P0 = unknown>(_addTabViewItem: P0): R;
    setWindowTabsDelegate<R = void, P0 = unknown>(_setWindowTabsDelegate: P0): R;
    windowTabsDelegate<R = unknown>(): R;
    _removeTabBar<R = void>(): R;
    _makeTabBar<R = void>(): R;
    _setTabBarAccessoryViewController<R = void, P0 = unknown>(__setTabBarAccessoryViewController: P0): R;
    _tabBarAccessoryViewController<R = unknown>(): R;
    setTabBar<R = void, P0 = unknown>(_setTabBar: P0): R;
    tabBar<R = unknown>(): R;
    _removeAllTabs<R = void>(): R;
    _addAllTabs<R = void>(): R;
    _makeTabViewWithFrame<R = unknown, P0 = CGRect>(__makeTabViewWithFrame: P0): R;
    _defaultFrame<R = CGRect>(): R;
    setView<R = void, P0 = unknown>(_setView: P0): R;
    _goodTabViewContentSize<R = CGSize>(): R;
    canPropagateSelectedChildViewControllerTitle<R = boolean>(): R;
    setCanPropagateSelectedChildViewControllerTitle<R = void, P0 = boolean>(_v: P0): R;
    transitionOptions<R = number>(): R;
    setTransitionOptions<R = void, P0 = number>(_v: P0): R;
    selectedTabViewItemIndex<R = number>(): R;
    setSelectedTabViewItemIndex<R = void, P0 = number>(_v: P0): R;
    tabStyle<R = number>(): R;
    setTabStyle<R = void, P0 = number>(_v: P0): R;
    tabViewItems<R = NSArray>(): R;
    setTabViewItems<R = void, P0 = NSArray>(_v: P0): R;
    tabView<R = NSTabView>(): R;
    setTabView<R = void, P0 = NSTabView>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTabViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTabViewDelegateProtocol, NSToolbarDelegateProtocol {
      alloc<R = NSTabViewController>(): R;
      new: <R = NSTabViewController>() => R;
      _findWindowTabViewControllerInWindow<R = unknown, P0 = unknown>(__findWindowTabViewControllerInWindow: P0): R;
      _recursiveFindWindowTabViewController<R = unknown, P0 = unknown>(__recursiveFindWindowTabViewController: P0): R;
      automaticallyNotifiesObserversOfSelectedTabViewItemIndex<R = boolean>(): R;
    }
  }
}

declare const NSTabViewController: cocoa.NSTabViewController.CLASS;
