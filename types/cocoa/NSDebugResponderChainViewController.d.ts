/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugResponderChainViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSDebugResponderChainUIDelegateProtocol, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol {
    logDisplayedItemsToConsole<R = void, P0 = unknown>(_logDisplayedItemsToConsole: P0): R;
    displayedItems<R = NSArray>(): R;
    setDisplayedItems<R = void, P0 = NSArray>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSDebugResponderChainViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSDebugResponderChainUIDelegateProtocol, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol {
      alloc<R = NSDebugResponderChainViewController>(): R;
      new: <R = NSDebugResponderChainViewController>() => R;
    }
  }
}

declare const NSDebugResponderChainViewController: cocoa.NSDebugResponderChainViewController.CLASS;
