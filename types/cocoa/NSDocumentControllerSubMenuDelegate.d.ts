/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentControllerSubMenuDelegate<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol {
    updateMenu_withEvent_withFlags<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(_updateMenu: P0, _withEvent: P1, _withFlags: P2): R;
    initWithController<R = unknown, P0 = unknown>(_initWithController: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSDocumentControllerSubMenuDelegate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol {
      alloc<R = NSDocumentControllerSubMenuDelegate>(): R;
      new: <R = NSDocumentControllerSubMenuDelegate>() => R;
    }
  }
}

declare const NSDocumentControllerSubMenuDelegate: cocoa.NSDocumentControllerSubMenuDelegate.CLASS;
