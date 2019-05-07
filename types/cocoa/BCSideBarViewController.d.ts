/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSideBarViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSSplitViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    pageListToggleButtonTooltip<R = unknown>(): R;
    onTogglePageList<R = void, P0 = unknown>(_onTogglePageList: P0): R;
    showPagePopUpButton<R = void>(): R;
    showPageView<R = void>(): R;
    hidePagePopUpButton<R = void>(): R;
    hidePageView<R = void>(): R;
    flagsChangedNotification<R = void>(): R;
    renamePage<R = void>(): R;
    renameLayerAfterNextLayerListRefresh<R = void>(): R;
    renameLayer<R = void>(): R;
    checkPageListHeight<R = void>(): R;
    refreshWithMask<R = void, P0 = number>(_refreshWithMask: P0): R;
    refreshPagePopup<R = void>(): R;
    pagePopUpButtonDidChange<R = void, P0 = unknown>(_pagePopUpButtonDidChange: P0): R;
    updatePopupWithBlock<R = void, P0 = CDUnknownBlockType>(_updatePopupWithBlock: P0): R;
    applyAppearance<R = void>(): R;
    refreshAfterAppearanceChange<R = void>(): R;
    awakeFromNib<R = void>(): R;
    embedView_inView<R = void, P0 = unknown, P1 = unknown>(_embedView: P0, _inView: P1): R;
    initWithPageListDataSource_delegate_layerListDataSource_delegate<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithPageListDataSource: P0, _delegate: P1, _layerListDataSource: P2, _delegate1: P3): R;
    userUpdatedPageHeight<R = boolean>(): R;
    setUserUpdatedPageHeight<R = void, P0 = boolean>(_v: P0): R;
    splitView<R = NSSplitView>(): R;
    setSplitView<R = void, P0 = NSSplitView>(_v: P0): R;
    togglePageListButton<R = NSButton>(): R;
    setTogglePageListButton<R = void, P0 = NSButton>(_v: P0): R;
    addPageButton<R = NSButton>(): R;
    setAddPageButton<R = void, P0 = NSButton>(_v: P0): R;
    layerListViewController<R = BCOutlineViewController>(): R;
    setLayerListViewController<R = void, P0 = BCOutlineViewController>(_v: P0): R;
    layerListContainer<R = NSView>(): R;
    setLayerListContainer<R = void, P0 = NSView>(_v: P0): R;
    layerListDataController<R = BCOutlineViewDataController>(): R;
    setLayerListDataController<R = void, P0 = BCOutlineViewDataController>(_v: P0): R;
    pagePopUpButton<R = NSPopUpButton>(): R;
    setPagePopUpButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
    pageCount<R = number>(): R;
    setPageCount<R = void, P0 = number>(_v: P0): R;
    pageListContainer<R = NSView>(): R;
    setPageListContainer<R = void, P0 = NSView>(_v: P0): R;
    pageListViewController<R = BCPageListViewController>(): R;
    setPageListViewController<R = void, P0 = BCPageListViewController>(_v: P0): R;
    pageListDataController<R = BCOutlineViewDataController>(): R;
    setPageListDataController<R = void, P0 = BCOutlineViewDataController>(_v: P0): R;
    pageTabButton<R = NSButton>(): R;
    setPageTabButton<R = void, P0 = NSButton>(_v: P0): R;
    filterViewController<R = BCLayerListFilterViewController>(): R;
    setFilterViewController<R = void, P0 = BCLayerListFilterViewController>(_v: P0): R;
    delegate<R = BCSideBarViewControllerDelegate>(): R;
    setDelegate<R = void, P0 = BCSideBarViewControllerDelegate>(_v: P0): R;
    isSplitViewCollapsed<R = boolean>(): R;
    currentPage<R = BCOutlineViewNode>(): R;
    currentPageHeight<R = number>(): R;
    setCurrentPageHeight<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace BCSideBarViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSSplitViewDelegateProtocol {
      alloc<R = BCSideBarViewController>(): R;
      new: <R = BCSideBarViewController>() => R;
    }
  }
}

declare const BCSideBarViewController: cocoa.BCSideBarViewController.CLASS;
