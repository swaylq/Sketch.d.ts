/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFrequentObjectsController<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol {
    cxx_destruct<R = void>(): R;
    showMenuAtLocation_inView<R = void, P0 = CGPoint, P1 = unknown>(_showMenuAtLocation: P0, _inView: P1): R;
    refreshMenuItems<R = void, P0 = unknown>(_refreshMenuItems: P0): R;
    menu<R = NSMenu>(): R;
    setMenu<R = void, P0 = NSMenu>(_v: P0): R;
    delegate<R = MSFrequentObjectsControllerDelegate>(): R;
    setDelegate<R = void, P0 = MSFrequentObjectsControllerDelegate>(_v: P0): R;
    frequentObjects<R = NSArray>(): R;
    setFrequentObjects<R = void, P0 = NSArray>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSFrequentObjectsController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol {
      alloc<R = MSFrequentObjectsController>(): R;
      new: <R = MSFrequentObjectsController>() => R;
      menuItemAttributedTitleForTitle_description<R = unknown, P0 = unknown, P1 = unknown>(_menuItemAttributedTitleForTitle: P0, _description: P1): R;
    }
  }
}

declare const MSFrequentObjectsController: cocoa.MSFrequentObjectsController.CLASS;
