/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuTouchBarProvider<T0 = void, T1 = void, T2 = void> extends NSObject, NSWindowDelegateProtocol, NSDebugMenuItemProviderProtocol {
    uiDelegate<R = NSDebugTouchBarUIDelegate>(): R;
    setUiDelegate<R = void, P0 = NSDebugTouchBarUIDelegate>(_v: P0): R;
  }
  namespace NSDebugMenuTouchBarProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSWindowDelegateProtocol, NSDebugMenuItemProviderProtocol {
      alloc<R = NSDebugMenuTouchBarProvider>(): R;
      new: <R = NSDebugMenuTouchBarProvider>() => R;
    }
  }
}

declare const NSDebugMenuTouchBarProvider: cocoa.NSDebugMenuTouchBarProvider.CLASS;
