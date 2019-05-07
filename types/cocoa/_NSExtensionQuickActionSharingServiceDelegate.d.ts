/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExtensionQuickActionSharingServiceDelegate<T0 = void, T1 = void, T2 = void> extends NSObject, NSSharingServiceDelegateProtocol {
    cxx_destruct<R = void>(): R;
    initWithQuickAction_requestor<R = unknown, P0 = unknown, P1 = unknown>(_initWithQuickAction: P0, _requestor: P1): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSExtensionQuickActionSharingServiceDelegate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSharingServiceDelegateProtocol {
      alloc<R = _NSExtensionQuickActionSharingServiceDelegate>(): R;
      new: <R = _NSExtensionQuickActionSharingServiceDelegate>() => R;
    }
  }
}
