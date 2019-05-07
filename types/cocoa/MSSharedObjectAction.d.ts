/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedObjectAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, NSMenuDelegateProtocol {
    hasSubMenu<R = boolean>(): R;
    noSharedObjectMenuItemForMenu<R = unknown, P0 = unknown>(_noSharedObjectMenuItemForMenu: P0): R;
    noSharedObjectsView<R = unknown>(): R;
    sortedObjectMenuItemsForMenu<R = unknown, P0 = unknown>(_sortedObjectMenuItemsForMenu: P0): R;
    sharedObjectName<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSSharedObjectAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, NSMenuDelegateProtocol {
      alloc<R = MSSharedObjectAction>(): R;
      new: <R = MSSharedObjectAction>() => R;
    }
  }
}

declare const MSSharedObjectAction: cocoa.MSSharedObjectAction.CLASS;
