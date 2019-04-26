/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFHTTPResponseSerializer<T0 = void, T1 = void, T2 = void> extends NSObject, AFURLResponseSerializationProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    validateResponse_data_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_validateResponse: P0, _data: P1, _error: P2): R;
    acceptableContentTypes<R = NSSet>(): R;
    setAcceptableContentTypes<R = void, P0 = NSSet>(_v: P0): R;
    acceptableStatusCodes<R = NSIndexSet>(): R;
    setAcceptableStatusCodes<R = void, P0 = NSIndexSet>(_v: P0): R;
    stringEncoding<R = number>(): R;
    setStringEncoding<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace AFHTTPResponseSerializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, AFURLResponseSerializationProtocol {
      alloc<R = AFHTTPResponseSerializer>(): R;
      new: <R = AFHTTPResponseSerializer>() => R;
      serializer<R = unknown>(): R;
    }
  }
}

declare const AFHTTPResponseSerializer: cocoa.AFHTTPResponseSerializer.CLASS;
