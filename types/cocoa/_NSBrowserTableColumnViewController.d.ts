/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserTableColumnViewController<T0 = void, T1 = void, T2 = void> extends NSBrowserColumnViewController, NSTableViewDataSourceProtocol, NSTableViewDelegateProtocol {
    _autoExpandItemUnderCursor<R = boolean>(): R;
    _expandItemUnderMouse<R = void, P0 = unknown>(__expandItemUnderMouse: P0): R;
    _cancelExpandItemUnderMouse<R = void>(): R;
    _autoExpandFlashOnce<R = void>(): R;
    _startAutoExpandingItemFlash<R = void>(): R;
    _stopAutoExpandingFlash<R = void>(): R;
    synchSelectionCache<R = void>(): R;
    setSelectionIndexes<R = void, P0 = unknown>(_setSelectionIndexes: P0): R;
    selectionIndexes<R = unknown>(): R;
    firstValidRowIndex<R = number>(): R;
    numberOfRows<R = number>(): R;
    setAllowsTypeSelect<R = void, P0 = boolean>(_setAllowsTypeSelect: P0): R;
    allowsTypeSelect<R = boolean>(): R;
    setDrawsBackground<R = void, P0 = boolean>(_setDrawsBackground: P0): R;
    drawsBackground<R = boolean>(): R;
    setAllowsEmptySelection<R = void, P0 = boolean>(_setAllowsEmptySelection: P0): R;
    allowsEmptySelection<R = boolean>(): R;
    setAllowsMultipleSelection<R = void, P0 = boolean>(_setAllowsMultipleSelection: P0): R;
    allowsMultipleSelection<R = boolean>(): R;
    tableView<R = unknown>(): R;
    selectedItems<R = unknown>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSBrowserTableColumnViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBrowserColumnViewController, NSTableViewDataSourceProtocol, NSTableViewDelegateProtocol {
      alloc<R = _NSBrowserTableColumnViewController>(): R;
      new: <R = _NSBrowserTableColumnViewController>() => R;
    }
  }
}
