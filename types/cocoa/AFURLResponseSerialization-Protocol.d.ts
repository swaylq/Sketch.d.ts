/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFURLResponseSerializationProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSSecureCodingProtocol, NSCopyingProtocol {
    responseObjectForResponse_data_error<R = unknown, P0 = NSURLResponse, P1 = NSData, P2 = unknown>(_responseObjectForResponse: P0, _data: P1, _error: P2): R;
  }
  namespace AFURLResponseSerializationProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSSecureCodingProtocol, NSCopyingProtocol {}
  }
}
