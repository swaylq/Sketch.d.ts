/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStylesInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem, MSSharedStylesPopUpButtonCellDelegateProtocol, NSMenuDelegateProtocol {
    renameSharedObjectAction<R = void, P0 = unknown>(_renameSharedObjectAction: P0): R;
    renameSharedObject<R = void, P0 = unknown>(_renameSharedObject: P0): R;
    refreshIfNecessary<R = void, P0 = unknown>(_refreshIfNecessary: P0): R;
    beginRenameSharedObject_completionBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_beginRenameSharedObject: P0, _completionBlock: P1): R;
    menuBuilder<R = MSForeignObjectMenuBuilder>(): R;
    setMenuBuilder<R = void, P0 = MSForeignObjectMenuBuilder>(_v: P0): R;
    renameBlock<R = CDUnknownBlockType>(): R;
    setRenameBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    renamingObject<R = MSSharedObject>(): R;
    setRenamingObject<R = void, P0 = MSSharedObject>(_v: P0): R;
    editNameField<R = NSTextField>(): R;
    setEditNameField<R = void, P0 = NSTextField>(_v: P0): R;
    sharedObjectsPopUpButton<R = MSShareableObjectPopUpButton>(): R;
    setSharedObjectsPopUpButton<R = void, P0 = MSShareableObjectPopUpButton>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSSharedStylesInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem, MSSharedStylesPopUpButtonCellDelegateProtocol, NSMenuDelegateProtocol {
      alloc<R = MSSharedStylesInspectorItem>(): R;
      new: <R = MSSharedStylesInspectorItem>() => R;
    }
  }
}

declare const MSSharedStylesInspectorItem: cocoa.MSSharedStylesInspectorItem.CLASS;
