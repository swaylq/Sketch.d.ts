/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKWebServerDataSourceProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    renderExportForRequest_handler<R = void, P0 = NSURL, P1 = CDUnknownBlockType>(_renderExportForRequest: P0, _handler: P1): R;
  }
  namespace SMKWebServerDataSourceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
