/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FPFileProviderRequestProxyCreatingProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    fetchProxyForItemIdentifier_completionHandler<R = void, P0 = NSString, P1 = CDUnknownBlockType>(_fetchProxyForItemIdentifier: P0, _completionHandler: P1): R;
  }
  namespace FPFileProviderRequestProxyCreatingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
