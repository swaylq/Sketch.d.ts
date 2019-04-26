/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPopUpButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    state<R = number>(): R;
    image<R = unknown>(): R;
    title<R = unknown>(): R;
    _updateMenuUniquing<R = void>(): R;
    moveUp<R = void, P0 = unknown>(_moveUp: P0): R;
    moveDown<R = void, P0 = unknown>(_moveDown: P0): R;
    itemTitleAtIndex<R = unknown, P0 = number>(_itemTitleAtIndex: P0): R;
    synchronizeTitleAndSelectedItem<R = void>(): R;
    setTitle<R = void, P0 = unknown>(_setTitle: P0): R;
    selectItemWithTag<R = boolean, P0 = number>(_selectItemWithTag: P0): R;
    selectItemWithTitle<R = void, P0 = unknown>(_selectItemWithTitle: P0): R;
    selectItemAtIndex<R = void, P0 = number>(_selectItemAtIndex: P0): R;
    selectItem<R = void, P0 = unknown>(_selectItem: P0): R;
    itemWithTitle<R = unknown, P0 = unknown>(_itemWithTitle: P0): R;
    itemAtIndex<R = unknown, P0 = number>(_itemAtIndex: P0): R;
    indexOfItemWithTarget_andAction<R = number, P0 = unknown, P1 = string>(_indexOfItemWithTarget: P0, _andAction: P1): R;
    indexOfItemWithRepresentedObject<R = number, P0 = unknown>(_indexOfItemWithRepresentedObject: P0): R;
    indexOfItemWithTag<R = number, P0 = number>(_indexOfItemWithTag: P0): R;
    indexOfItemWithTitle<R = number, P0 = unknown>(_indexOfItemWithTitle: P0): R;
    indexOfItem<R = number, P0 = unknown>(_indexOfItem: P0): R;
    removeAllItems<R = void>(): R;
    removeItemAtIndex<R = void, P0 = number>(_removeItemAtIndex: P0): R;
    removeItemWithTitle<R = void, P0 = unknown>(_removeItemWithTitle: P0): R;
    insertItemWithTitle_atIndex<R = void, P0 = unknown, P1 = number>(_insertItemWithTitle: P0, _atIndex: P1): R;
    addItemsWithTitles<R = void, P0 = unknown>(_addItemsWithTitles: P0): R;
    addItemWithTitle<R = void, P0 = unknown>(_addItemWithTitle: P0): R;
    _fixTargetsForMenu<R = void, P0 = unknown>(__fixTargetsForMenu: P0): R;
    instantiateWithObjectInstantiator<R = void, P0 = unknown>(_instantiateWithObjectInstantiator: P0): R;
    initWithFrame_pullsDown<R = unknown, P0 = CGRect, P1 = boolean>(_initWithFrame: P0, _pullsDown: P1): R;
    selectedTag<R = number>(): R;
    titleOfSelectedItem<R = NSString>(): R;
    itemTitles<R = NSArray>(): R;
    indexOfSelectedItem<R = number>(): R;
    selectedItem<R = NSMenuItem>(): R;
    lastItem<R = NSMenuItem>(): R;
    numberOfItems<R = number>(): R;
    itemArray<R = NSArray>(): R;
    preferredEdge<R = number>(): R;
    setPreferredEdge<R = void, P0 = number>(_v: P0): R;
    autoenablesItems<R = boolean>(): R;
    setAutoenablesItems<R = void, P0 = boolean>(_v: P0): R;
    pullsDown<R = boolean>(): R;
    setPullsDown<R = void, P0 = boolean>(_v: P0): R;
    menu<R = NSMenu>(): R;
    setMenu<R = void, P0 = NSMenu>(_v: P0): R;
  }
  namespace NSPopUpButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = NSPopUpButton>(): R;
      new: <R = NSPopUpButton>() => R;
    }
  }
}

declare const NSPopUpButton: cocoa.NSPopUpButton.CLASS;
