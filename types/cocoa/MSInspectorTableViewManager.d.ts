/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorTableViewManager<T0 = void, T1 = void, T2 = void> extends NSObject, NSTableViewDataSourceProtocol, NSTableViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    wantsSeparatorForRow<R = boolean, P0 = number>(_wantsSeparatorForRow: P0): R;
    itemIndexPathForRowIndex<R = unknown, P0 = number>(_itemIndexPathForRowIndex: P0): R;
    sectionItemIndex_forRowIndex<R = unknown, P0 = number, P1 = number>(_sectionItemIndex: P0, _forRowIndex: P1): R;
    sectionForRow<R = unknown, P0 = number>(_sectionForRow: P0): R;
    sections<R = unknown>(): R;
    manageTableView<R = void, P0 = unknown>(_manageTableView: P0): R;
    delegate<R = MSInspectorTableViewManagerDelegate>(): R;
    setDelegate<R = void, P0 = MSInspectorTableViewManagerDelegate>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSInspectorTableViewManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSTableViewDataSourceProtocol, NSTableViewDelegateProtocol {
      alloc<R = MSInspectorTableViewManager>(): R;
      new: <R = MSInspectorTableViewManager>() => R;
    }
  }
}

declare const MSInspectorTableViewManager: cocoa.MSInspectorTableViewManager.CLASS;
