/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenu<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    debugMenu<R = NSMenu>(): R;
  }
  namespace NSDebugMenu {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDebugMenu>(): R;
      new: <R = NSDebugMenu>() => R;
      unregisterMenuItemProvider<R = void, P0 = unknown>(_unregisterMenuItemProvider: P0): R;
      registerMenuItemProvider<R = void, P0 = unknown>(_registerMenuItemProvider: P0): R;
      _menuItemProviderClasses<R = unknown>(): R;
      appKitDebugMenuItemProviders<R = unknown>(): R;
      createDebugMenuItem<R = unknown>(): R;
      debugMenuInMenu<R = unknown, P0 = unknown>(_debugMenuInMenu: P0): R;
    }
  }
}

declare const NSDebugMenu: cocoa.NSDebugMenu.CLASS;
