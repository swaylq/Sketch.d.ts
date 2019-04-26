/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuAppearanceOverrideProvider<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol, NSDebugMenuItemProviderProtocol {
    setOverride<R = void, P0 = unknown>(_setOverride: P0): R;
    _overrideItemWithTitle_value<R = unknown, P0 = unknown, P1 = number>(__overrideItemWithTitle: P0, _value: P1): R;
    menuItem<R = NSMenuItem>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSDebugMenuAppearanceOverrideProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol, NSDebugMenuItemProviderProtocol {
      alloc<R = NSDebugMenuAppearanceOverrideProvider>(): R;
      new: <R = NSDebugMenuAppearanceOverrideProvider>() => R;
    }
  }
}

declare const NSDebugMenuAppearanceOverrideProvider: cocoa.NSDebugMenuAppearanceOverrideProvider.CLASS;
