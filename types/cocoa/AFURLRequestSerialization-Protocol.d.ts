/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFURLRequestSerializationProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSSecureCodingProtocol, NSCopyingProtocol {
    requestBySerializingRequest_withParameters_error<R = NSURLRequest, P0 = NSURLRequest, P1 = unknown, P2 = unknown>(_requestBySerializingRequest: P0, _withParameters: P1, _error: P2): R;
  }
  namespace AFURLRequestSerializationProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSSecureCodingProtocol, NSCopyingProtocol {}
  }
}
