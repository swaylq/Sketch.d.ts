/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFHTTPRequestSerializer<T0 = void, T1 = void, T2 = void> extends NSObject, AFURLRequestSerializationProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    requestWithMultipartFormRequest_writingStreamContentsToFile_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_requestWithMultipartFormRequest: P0, _writingStreamContentsToFile: P1, _completionHandler: P2): R;
    multipartFormRequestWithMethod_URLString_parameters_constructingBodyWithBlock_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType, P4 = unknown>(_multipartFormRequestWithMethod: P0, _URLString: P1, _parameters: P2, _constructingBodyWithBlock: P3, _error: P4): R;
    multipartFormRequestWithMethod_URLString_parameters_constructingBodyWithBlock<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_multipartFormRequestWithMethod: P0, _URLString: P1, _parameters: P2, _constructingBodyWithBlock: P3): R;
    requestWithMethod_URLString_parameters_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_requestWithMethod: P0, _URLString: P1, _parameters: P2, _error: P3): R;
    requestWithMethod_URLString_parameters<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_requestWithMethod: P0, _URLString: P1, _parameters: P2): R;
    setQueryStringSerializationWithBlock<R = void, P0 = CDUnknownBlockType>(_setQueryStringSerializationWithBlock: P0): R;
    setQueryStringSerializationWithStyle<R = void, P0 = number>(_setQueryStringSerializationWithStyle: P0): R;
    clearAuthorizationHeader<R = void>(): R;
    setAuthorizationHeaderFieldWithToken<R = void, P0 = unknown>(_setAuthorizationHeaderFieldWithToken: P0): R;
    setAuthorizationHeaderFieldWithUsername_password<R = void, P0 = unknown, P1 = unknown>(_setAuthorizationHeaderFieldWithUsername: P0, _password: P1): R;
    valueForHTTPHeaderField<R = unknown, P0 = unknown>(_valueForHTTPHeaderField: P0): R;
    setValue_forHTTPHeaderField<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forHTTPHeaderField: P1): R;
    dealloc<R = void>(): R;
    queryStringSerialization<R = CDUnknownBlockType>(): R;
    setQueryStringSerialization<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    queryStringSerializationStyle<R = number>(): R;
    setQueryStringSerializationStyle<R = void, P0 = number>(_v: P0): R;
    mutableHTTPRequestHeaders<R = NSMutableDictionary>(): R;
    setMutableHTTPRequestHeaders<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    mutableObservedChangedKeyPaths<R = NSMutableSet>(): R;
    setMutableObservedChangedKeyPaths<R = void, P0 = NSMutableSet>(_v: P0): R;
    HTTPMethodsEncodingParametersInURI<R = NSSet>(): R;
    setHTTPMethodsEncodingParametersInURI<R = void, P0 = NSSet>(_v: P0): R;
    timeoutInterval<R = number>(): R;
    setTimeoutInterval<R = void, P0 = number>(_v: P0): R;
    networkServiceType<R = number>(): R;
    setNetworkServiceType<R = void, P0 = number>(_v: P0): R;
    HTTPShouldUsePipelining<R = boolean>(): R;
    setHTTPShouldUsePipelining<R = void, P0 = boolean>(_v: P0): R;
    HTTPShouldHandleCookies<R = boolean>(): R;
    setHTTPShouldHandleCookies<R = void, P0 = boolean>(_v: P0): R;
    cachePolicy<R = number>(): R;
    setCachePolicy<R = void, P0 = number>(_v: P0): R;
    allowsCellularAccess<R = boolean>(): R;
    setAllowsCellularAccess<R = void, P0 = boolean>(_v: P0): R;
    stringEncoding<R = number>(): R;
    setStringEncoding<R = void, P0 = number>(_v: P0): R;
    HTTPRequestHeaders<R = NSDictionary>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace AFHTTPRequestSerializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, AFURLRequestSerializationProtocol {
      alloc<R = AFHTTPRequestSerializer>(): R;
      new: <R = AFHTTPRequestSerializer>() => R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
      serializer<R = unknown>(): R;
    }
  }
}

declare const AFHTTPRequestSerializer: cocoa.AFHTTPRequestSerializer.CLASS;
