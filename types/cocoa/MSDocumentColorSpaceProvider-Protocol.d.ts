/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentColorSpaceProviderProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    documentColorSpaceForClient<R = NSColorSpace, P0 = unknown>(_documentColorSpaceForClient: P0): R;
  }
  namespace MSDocumentColorSpaceProviderProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
