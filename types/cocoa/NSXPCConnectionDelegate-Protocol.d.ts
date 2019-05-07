/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCConnectionDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    connection_handleInvocation_isReply<R = void, P0 = NSXPCConnection, P1 = NSInvocation, P2 = boolean>(_connection: P0, _handleInvocation: P1, _isReply: P2): R;
    replacementObjectForXPCConnection_encoder_object<R = NSSecureCoding, P0 = NSXPCConnection, P1 = NSXPCCoder, P2 = unknown>(_replacementObjectForXPCConnection: P0, _encoder: P1, _object: P2): R;
  }
  namespace NSXPCConnectionDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
