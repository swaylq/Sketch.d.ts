/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuBundleInfoProvider<T0 = void, T1 = void, T2 = void> extends NSObject, NSDebugMenuItemProviderProtocol {
    menuItem<R = NSMenuItem>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSDebugMenuBundleInfoProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSDebugMenuItemProviderProtocol {
      alloc<R = NSDebugMenuBundleInfoProvider>(): R;
      new: <R = NSDebugMenuBundleInfoProvider>() => R;
    }
  }
}

declare const NSDebugMenuBundleInfoProvider: cocoa.NSDebugMenuBundleInfoProvider.CLASS;
