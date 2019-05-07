/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabViewControllerToolbarUIProvider<T0 = void, T1 = void, T2 = void> extends NSObject, NSTabViewControllerUIProviderProtocol, NSToolbarDelegateProtocol {
    _toolbarSelectableItemIdentifiers<R = unknown, P0 = unknown>(__toolbarSelectableItemIdentifiers: P0): R;
    _toolbarAllowedItemIdentifiers<R = unknown, P0 = unknown>(__toolbarAllowedItemIdentifiers: P0): R;
    _toolbarDefaultItemIdentifiers<R = unknown, P0 = unknown>(__toolbarDefaultItemIdentifiers: P0): R;
    _toolbar_itemForItemIdentifier_willBeInsertedIntoToolbar<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(__toolbar: P0, _itemForItemIdentifier: P1, _willBeInsertedIntoToolbar: P2): R;
    _tabViewControllerToolbarItemIdentifiers<R = unknown, P0 = unknown>(__tabViewControllerToolbarItemIdentifiers: P0): R;
    _toolbarItemAction<R = void, P0 = unknown>(__toolbarItemAction: P0): R;
    _tabViewItemIndexWithIdentifier<R = number, P0 = unknown>(__tabViewItemIndexWithIdentifier: P0): R;
    _toolbarItemIdentifierForTabViewItemIndex<R = unknown, P0 = number>(__toolbarItemIdentifierForTabViewItemIndex: P0): R;
    _toolbarItemWithIdentifier<R = unknown, P0 = unknown>(__toolbarItemWithIdentifier: P0): R;
    _removeAllToolbarItems<R = void>(): R;
    _toolbarItems<R = unknown>(): R;
    _addConstraintsForTabView_inContainer<R = void, P0 = unknown, P1 = unknown>(__addConstraintsForTabView: P0, _inContainer: P1): R;
    dealloc<R = void>(): R;
    tabViewController<R = NSTabViewController>(): R;
    setTabViewController<R = void, P0 = NSTabViewController>(_v: P0): R;
    toolbar<R = NSToolbar>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTabViewControllerToolbarUIProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSTabViewControllerUIProviderProtocol, NSToolbarDelegateProtocol {
      alloc<R = NSTabViewControllerToolbarUIProvider>(): R;
      new: <R = NSTabViewControllerToolbarUIProvider>() => R;
    }
  }
}

declare const NSTabViewControllerToolbarUIProvider: cocoa.NSTabViewControllerToolbarUIProvider.CLASS;
