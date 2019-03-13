/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuActionRecorderProvider<T = any> extends NSObject, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol, NSDebugMenuItemProviderProtocol {
    _createActionRecordWindow<R = unknown>(): R;
    _toggleFilter<R = void, P0 = unknown>(__toggleFilter: P0): R;
    _toggleActionRecorder<R = void, P0 = unknown>(__toggleActionRecorder: P0): R;
    dealloc<R = void>(): R;
    menuItem<R = NSMenuItem>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDebugMenuActionRecorderProvider<T = any> extends NSObject, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol, NSDebugMenuItemProviderProtocol {
      alloc<R = NSDebugMenuActionRecorderProvider>(): R;
      new: <R = NSDebugMenuActionRecorderProvider>() => R;
    }
  }
}

declare const NSDebugMenuActionRecorderProvider: cocoa.classes.NSDebugMenuActionRecorderProvider;
