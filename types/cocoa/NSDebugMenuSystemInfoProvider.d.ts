/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuSystemInfoProvider<T0 = void, T1 = void, T2 = void> extends NSObject, NSDebugMenuItemProviderProtocol {
    menuItem<R = NSMenuItem>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSDebugMenuSystemInfoProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSDebugMenuItemProviderProtocol {
      alloc<R = NSDebugMenuSystemInfoProvider>(): R;
      new: <R = NSDebugMenuSystemInfoProvider>() => R;
    }
  }
}

declare const NSDebugMenuSystemInfoProvider: cocoa.NSDebugMenuSystemInfoProvider.CLASS;
