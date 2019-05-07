/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuNonStandardBehaviorProvider<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol, NSDebugMenuItemProviderProtocol {
    copyName<R = void, P0 = unknown>(_copyName: P0): R;
    copyArgument<R = void, P0 = unknown>(_copyArgument: P0): R;
    entriesDidChange<R = void, P0 = unknown>(_entriesDidChange: P0): R;
    dealloc<R = void>(): R;
    cachedEntries<R = NSArray>(): R;
    setCachedEntries<R = void, P0 = NSArray>(_v: P0): R;
    menuItem<R = NSMenuItem>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSDebugMenuNonStandardBehaviorProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol, NSDebugMenuItemProviderProtocol {
      alloc<R = NSDebugMenuNonStandardBehaviorProvider>(): R;
      new: <R = NSDebugMenuNonStandardBehaviorProvider>() => R;
    }
  }
}

declare const NSDebugMenuNonStandardBehaviorProvider: cocoa.NSDebugMenuNonStandardBehaviorProvider.CLASS;
