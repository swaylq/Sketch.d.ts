/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtensionRequestHandlingProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    beginRequestWithExtensionContext<R = void, P0 = NSExtensionContext>(_beginRequestWithExtensionContext: P0): R;
  }
  namespace NSExtensionRequestHandlingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
