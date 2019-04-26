/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertSharedTextAction<T0 = void, T1 = void, T2 = void> extends MSSharedObjectAction, NSMenuDelegateProtocol {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    sharedObjectName<R = unknown>(): R;
    imageForToolbar<R = unknown>(): R;
    validate<R = boolean>(): R;
    showSharedObjectsSheet<R = void, P0 = unknown>(_showSharedObjectsSheet: P0): R;
    menuBuilder<R = MSForeignObjectMenuBuilder>(): R;
    setMenuBuilder<R = void, P0 = MSForeignObjectMenuBuilder>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSInsertSharedTextAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSharedObjectAction, NSMenuDelegateProtocol {
      alloc<R = MSInsertSharedTextAction>(): R;
      new: <R = MSInsertSharedTextAction>() => R;
    }
  }
}

declare const MSInsertSharedTextAction: cocoa.MSInsertSharedTextAction.CLASS;
