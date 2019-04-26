/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuItemProviderProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    init<R = unknown>(): R;
    menuItem<R = NSMenuItem>(): R;
  }
  namespace NSDebugMenuItemProviderProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
