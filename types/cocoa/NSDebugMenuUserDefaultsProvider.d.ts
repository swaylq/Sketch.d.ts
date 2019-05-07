/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuUserDefaultsProvider<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol, NSDebugMenuItemProviderProtocol {
    updateMenu_withEvent_withFlags<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(_updateMenu: P0, _withEvent: P1, _withFlags: P2): R;
    _defaultControllersDidChange<R = void, P0 = unknown>(__defaultControllersDidChange: P0): R;
    defaultsMenuCreateIfNecessary<R = unknown>(): R;
    dealloc<R = void>(): R;
    menuItem<R = NSMenuItem>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSDebugMenuUserDefaultsProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol, NSDebugMenuItemProviderProtocol {
      alloc<R = NSDebugMenuUserDefaultsProvider>(): R;
      new: <R = NSDebugMenuUserDefaultsProvider>() => R;
      registerUserDefaultController<R = void, P0 = unknown>(_registerUserDefaultController: P0): R;
      _userDefaultControllers<R = unknown>(): R;
    }
  }
}

declare const NSDebugMenuUserDefaultsProvider: cocoa.NSDebugMenuUserDefaultsProvider.CLASS;
