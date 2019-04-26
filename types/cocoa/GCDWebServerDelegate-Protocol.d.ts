/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface GCDWebServerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    webServerDidStop<R = void, P0 = GCDWebServer>(_webServerDidStop: P0): R;
    webServerDidDisconnect<R = void, P0 = GCDWebServer>(_webServerDidDisconnect: P0): R;
    webServerDidConnect<R = void, P0 = GCDWebServer>(_webServerDidConnect: P0): R;
    webServerDidUpdateNATPortMapping<R = void, P0 = GCDWebServer>(_webServerDidUpdateNATPortMapping: P0): R;
    webServerDidCompleteBonjourRegistration<R = void, P0 = GCDWebServer>(_webServerDidCompleteBonjourRegistration: P0): R;
    webServerDidStart<R = void, P0 = GCDWebServer>(_webServerDidStart: P0): R;
  }
  namespace GCDWebServerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
