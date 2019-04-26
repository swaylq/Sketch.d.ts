/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentSharingServiceDelegate<T0 = void, T1 = void, T2 = void> extends NSObject, NSCloudSharingServiceDelegateProtocol {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    initWithAnchoringView<R = unknown, P0 = unknown>(_initWithAnchoringView: P0): R;
    initWithDocument_delegate_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_initWithDocument: P0, _delegate: P1, _completionHandler: P2): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSDocumentSharingServiceDelegate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCloudSharingServiceDelegateProtocol {
      alloc<R = _NSDocumentSharingServiceDelegate>(): R;
      new: <R = _NSDocumentSharingServiceDelegate>() => R;
    }
  }
}
