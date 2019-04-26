/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSManageForeignSymbolsView<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTableViewDataSourceProtocol, NSTabViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    unlinkFromLibrary<R = void, P0 = unknown>(_unlinkFromLibrary: P0): R;
    editInLibrary<R = void, P0 = unknown>(_editInLibrary: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    showContextMenu<R = void, P0 = unknown>(_showContextMenu: P0): R;
    tableViewSelectionDidChange<R = void, P0 = unknown>(_tableViewSelectionDidChange: P0): R;
    buildSymbolList<R = void>(): R;
    contextMenu<R = NSMenu>(): R;
    setContextMenu<R = void, P0 = NSMenu>(_v: P0): R;
    cogEnabled<R = boolean>(): R;
    setCogEnabled<R = void, P0 = boolean>(_v: P0): R;
    symbols<R = NSArray>(): R;
    setSymbols<R = void, P0 = NSArray>(_v: P0): R;
    tableView<R = NSTableView>(): R;
    setTableView<R = void, P0 = NSTableView>(_v: P0): R;
    document<R = MSDocument>(): R;
    setDocument<R = void, P0 = MSDocument>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSManageForeignSymbolsView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTableViewDataSourceProtocol, NSTabViewDelegateProtocol {
      alloc<R = MSManageForeignSymbolsView>(): R;
      new: <R = MSManageForeignSymbolsView>() => R;
    }
  }
}

declare const MSManageForeignSymbolsView: cocoa.MSManageForeignSymbolsView.CLASS;
