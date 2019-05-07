/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    toolbarDidRemoveItem<R = void, P0 = NSNotification>(_toolbarDidRemoveItem: P0): R;
    toolbarWillAddItem<R = void, P0 = NSNotification>(_toolbarWillAddItem: P0): R;
    toolbarSelectableItemIdentifiers<R = NSArray, P0 = NSToolbar>(_toolbarSelectableItemIdentifiers: P0): R;
    toolbarAllowedItemIdentifiers<R = NSArray, P0 = NSToolbar>(_toolbarAllowedItemIdentifiers: P0): R;
    toolbarDefaultItemIdentifiers<R = NSArray, P0 = NSToolbar>(_toolbarDefaultItemIdentifiers: P0): R;
    toolbar_itemForItemIdentifier_willBeInsertedIntoToolbar<R = NSToolbarItem, P0 = NSToolbar, P1 = NSString, P2 = boolean>(_toolbar: P0, _itemForItemIdentifier: P1, _willBeInsertedIntoToolbar: P2): R;
  }
  namespace NSToolbarDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
