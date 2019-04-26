/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuResponderChainProvider<T0 = void, T1 = void, T2 = void> extends NSObject, NSWindowDelegateProtocol, NSDebugMenuItemProviderProtocol {
    uiDelegate<R = NSDebugResponderChainUIDelegate>(): R;
    setUiDelegate<R = void, P0 = NSDebugResponderChainUIDelegate>(_v: P0): R;
  }
  namespace NSDebugMenuResponderChainProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSWindowDelegateProtocol, NSDebugMenuItemProviderProtocol {
      alloc<R = NSDebugMenuResponderChainProvider>(): R;
      new: <R = NSDebugMenuResponderChainProvider>() => R;
    }
  }
}

declare const NSDebugMenuResponderChainProvider: cocoa.NSDebugMenuResponderChainProvider.CLASS;
