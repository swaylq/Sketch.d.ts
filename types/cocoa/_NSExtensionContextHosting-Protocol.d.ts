/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExtensionContextHostingProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    _openURL_completion<R = void, P0 = NSURL, P1 = CDUnknownBlockType>(__openURL: P0, _completion: P1): R;
    _loadPreviewImageForPayload_contextIdentifier_completionHandler<R = void, P0 = NSDictionary, P1 = NSUUID, P2 = CDUnknownBlockType>(__loadPreviewImageForPayload: P0, _contextIdentifier: P1, _completionHandler: P2): R;
    _loadItemForPayload_contextIdentifier_completionHandler<R = void, P0 = NSDictionary, P1 = NSUUID, P2 = CDUnknownBlockType>(__loadItemForPayload: P0, _contextIdentifier: P1, _completionHandler: P2): R;
    _cancelRequestWithError_forExtensionContextWithUUID_completion<R = void, P0 = NSError, P1 = NSUUID, P2 = CDUnknownBlockType>(__cancelRequestWithError: P0, _forExtensionContextWithUUID: P1, _completion: P2): R;
    _completeRequestReturningItems_forExtensionContextWithUUID_completion<R = void, P0 = NSArray, P1 = NSUUID, P2 = CDUnknownBlockType>(__completeRequestReturningItems: P0, _forExtensionContextWithUUID: P1, _completion: P2): R;
  }
  namespace _NSExtensionContextHostingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
