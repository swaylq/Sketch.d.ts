/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuResponderChainProvider<T = any> extends NSObject, NSWindowDelegateProtocol, NSDebugMenuItemProviderProtocol {
    cxx_destruct<R = void>(): R;
    updateResponderChainFromFirstResponder<R = void, P0 = unknown>(_updateResponderChainFromFirstResponder: P0): R;
    switchObservedWindow<R = void, P0 = unknown>(_switchObservedWindow: P0): R;
    toggleObservingKeyWindow<R = void, P0 = boolean>(_toggleObservingKeyWindow: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _sharedPanel<R = unknown>(): R;
    toggleResponderChainPanel<R = void, P0 = unknown>(_toggleResponderChainPanel: P0): R;
    dealloc<R = void>(): R;
    uiDelegate<R = NSDebugResponderChainUIDelegate>(): R;
    setUiDelegate<R = void, P0 = NSDebugResponderChainUIDelegate>(_v: P0): R;
    menuItem<R = NSMenuItem>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDebugMenuResponderChainProvider<T = any> extends NSObject, NSWindowDelegateProtocol, NSDebugMenuItemProviderProtocol {
      alloc<R = NSDebugMenuResponderChainProvider>(): R;
      new: <R = NSDebugMenuResponderChainProvider>() => R;
    }
  }
}

declare const NSDebugMenuResponderChainProvider: cocoa.classes.NSDebugMenuResponderChainProvider;