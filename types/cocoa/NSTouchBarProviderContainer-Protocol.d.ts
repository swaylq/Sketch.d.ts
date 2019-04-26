/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarProviderContainerProtocol<T0 = void, T1 = void, T2 = void> extends NSTouchBarProviderProtocol {
    NS_touchBarProvidersKeyPaths<R = NSSet>(): R;
    NS_touchBarProviders<R = NSArray>(): R;
  }
  namespace NSTouchBarProviderContainerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarProviderProtocol {}
  }
}
