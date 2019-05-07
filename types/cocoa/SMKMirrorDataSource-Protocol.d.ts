/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKMirrorDataSourceProtocol<T0 = void, T1 = void, T2 = void> extends SMKWebServerDataSourceProtocol {
    manifestContent<R = NSDictionary>(): R;
    currentArtboardID<R = NSString>(): R;
  }
  namespace SMKMirrorDataSourceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SMKWebServerDataSourceProtocol {}
  }
}
