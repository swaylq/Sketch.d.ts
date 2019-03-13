/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExtensionContextVendingProtocol<T = any> extends NSObjectProtocol {
    _beginRequestWithExtensionItems_listenerEndpoint_withContextUUID_completion<R = void, P0 = NSArray, P1 = NSXPCListenerEndpoint, P2 = NSUUID, P3 = CDUnknownBlockType>(__beginRequestWithExtensionItems: P0, _listenerEndpoint: P1, _withContextUUID: P2, _completion: P3): R;
  }
  namespace classes {
    export interface _NSExtensionContextVendingProtocol<T = any> extends NSObjectProtocol {  }
  }
}
