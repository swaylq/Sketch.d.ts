/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    tabBar_acceptDrop_index<R = boolean, P0 = NSTabBar, P1 = NSDraggingInfo, P2 = number>(_tabBar: P0, _acceptDrop: P1, _index: P2): R;
    tabBar_validateDrop<R = number, P0 = NSTabBar, P1 = NSDraggingInfo>(_tabBar: P0, _validateDrop: P1): R;
    tabBar_didFinishTransitionAnimationForWindow<R = void, P0 = NSTabBar, P1 = NSWindow>(_tabBar: P0, _didFinishTransitionAnimationForWindow: P1): R;
    tabBar_destinationWindowForDetachedTabBarViewItem<R = NSWindow, P0 = NSTabBar, P1 = NSTabBarItem>(_tabBar: P0, _destinationWindowForDetachedTabBarViewItem: P1): R;
    tabBar_detachedWindowImageForDraggedTabBarViewItem<R = NSImage, P0 = NSTabBar, P1 = NSTabBarItem>(_tabBar: P0, _detachedWindowImageForDraggedTabBarViewItem: P1): R;
    tabBar_acceptTabDrop_index<R = boolean, P0 = NSTabBar, P1 = NSTabDraggingInfo, P2 = number>(_tabBar: P0, _acceptTabDrop: P1, _index: P2): R;
    tabBar_validateTabDrop<R = number, P0 = NSTabBar, P1 = NSTabDraggingInfo>(_tabBar: P0, _validateTabDrop: P1): R;
    tabBar_menuForTabBarViewItem_event<R = NSMenu, P0 = NSTabBar, P1 = NSTabBarItem, P2 = NSEvent>(_tabBar: P0, _menuForTabBarViewItem: P1, _event: P2): R;
    tabBar_didMoveTabBarViewItem_fromIndex_toIndex_isChangingPinnedness<R = void, P0 = NSTabBar, P1 = NSTabBarItem, P2 = number, P3 = number, P4 = boolean>(_tabBar: P0, _didMoveTabBarViewItem: P1, _fromIndex: P2, _toIndex: P3, _isChangingPinnedness: P4): R;
    tabBar_closeTabBarViewItem<R = void, P0 = NSTabBar, P1 = NSTabBarItem>(_tabBar: P0, _closeTabBarViewItem: P1): R;
    selectedTabBarViewItemAfterClosingCurrentTabInTabBar<R = NSTabBarItem, P0 = NSTabBar>(_selectedTabBarViewItemAfterClosingCurrentTabInTabBar: P0): R;
    tabBar_selectTabBarViewItem<R = void, P0 = NSTabBar, P1 = NSTabBarItem>(_tabBar: P0, _selectTabBarViewItem: P1): R;
    createNewTabInTabBar<R = void, P0 = NSTabBar>(_createNewTabInTabBar: P0): R;
    tabBar_showWindowForDraggingItemAtIndex<R = void, P0 = NSTabBar, P1 = number>(_tabBar: P0, _showWindowForDraggingItemAtIndex: P1): R;
    tabBar_hideWindowForDraggingItemAtIndex<R = void, P0 = NSTabBar, P1 = number>(_tabBar: P0, _hideWindowForDraggingItemAtIndex: P1): R;
    tabBar_canCloseTabBarViewItem<R = boolean, P0 = NSTabBar, P1 = NSTabBarItem>(_tabBar: P0, _canCloseTabBarViewItem: P1): R;
    placeholderTextInEmptyUnpinnedRegionOfTabBar<R = NSString, P0 = NSTabBar>(_placeholderTextInEmptyUnpinnedRegionOfTabBar: P0): R;
    tabBar_canDetachTabBarViewItem<R = boolean, P0 = NSTabBar, P1 = NSTabBarItem>(_tabBar: P0, _canDetachTabBarViewItem: P1): R;
    tabBar_canDragToPinTab<R = boolean, P0 = NSTabBar, P1 = NSTabBarItem>(_tabBar: P0, _canDragToPinTab: P1): R;
    tabBar_didBeginDraggingTab<R = void, P0 = NSTabBar, P1 = NSTabBarItem>(_tabBar: P0, _didBeginDraggingTab: P1): R;
    tabBarCanDragItems<R = boolean, P0 = NSTabBar>(_tabBarCanDragItems: P0): R;
    tabBar_droppedWindowTabShouldMoveToSpace<R = boolean, P0 = NSTabBar, P1 = number>(_tabBar: P0, _droppedWindowTabShouldMoveToSpace: P1): R;
  }
  namespace NSTabBarDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
