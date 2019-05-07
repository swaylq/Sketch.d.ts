/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSManageSharedObjectBaseViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTableViewDataSourceProtocol, NSTableViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    deleteSelectedObjects<R = void, P0 = unknown>(_deleteSelectedObjects: P0): R;
    removeSharedObject<R = void, P0 = unknown>(_removeSharedObject: P0): R;
    awakeFromNib<R = void>(): R;
    document<R = MSDocument>(): R;
    setDocument<R = void, P0 = MSDocument>(_v: P0): R;
    tableView<R = NSTableView>(): R;
    setTableView<R = void, P0 = NSTableView>(_v: P0): R;
    sharedObjectsSortedByName<R = NSArray>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSManageSharedObjectBaseViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTableViewDataSourceProtocol, NSTableViewDelegateProtocol {
      alloc<R = MSManageSharedObjectBaseViewController>(): R;
      new: <R = MSManageSharedObjectBaseViewController>() => R;
    }
  }
}

declare const MSManageSharedObjectBaseViewController: cocoa.MSManageSharedObjectBaseViewController.CLASS;
