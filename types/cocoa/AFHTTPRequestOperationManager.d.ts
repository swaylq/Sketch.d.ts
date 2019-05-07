/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFHTTPRequestOperationManager<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    description<R = unknown>(): R;
    DELETE_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_DELETE: P0, _parameters: P1, _success: P2, _failure: P3): R;
    PATCH_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_PATCH: P0, _parameters: P1, _success: P2, _failure: P3): R;
    PUT_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_PUT: P0, _parameters: P1, _success: P2, _failure: P3): R;
    POST_parameters_constructingBodyWithBlock_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType, P4 = CDUnknownBlockType>(_POST: P0, _parameters: P1, _constructingBodyWithBlock: P2, _success: P3, _failure: P4): R;
    POST_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_POST: P0, _parameters: P1, _success: P2, _failure: P3): R;
    HEAD_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_HEAD: P0, _parameters: P1, _success: P2, _failure: P3): R;
    GET_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_GET: P0, _parameters: P1, _success: P2, _failure: P3): R;
    HTTPRequestOperationWithRequest_success_failure<R = unknown, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType>(_HTTPRequestOperationWithRequest: P0, _success: P1, _failure: P2): R;
    HTTPRequestOperationWithHTTPMethod_URLString_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType, P4 = CDUnknownBlockType>(_HTTPRequestOperationWithHTTPMethod: P0, _URLString: P1, _parameters: P2, _success: P3, _failure: P4): R;
    initWithBaseURL<R = unknown, P0 = unknown>(_initWithBaseURL: P0): R;
    completionGroup<R = OS_dispatch_group>(): R;
    setCompletionGroup<R = void, P0 = OS_dispatch_group>(_v: P0): R;
    completionQueue<R = OS_dispatch_queue>(): R;
    setCompletionQueue<R = void, P0 = OS_dispatch_queue>(_v: P0): R;
    reachabilityManager<R = AFNetworkReachabilityManager>(): R;
    setReachabilityManager<R = void, P0 = AFNetworkReachabilityManager>(_v: P0): R;
    securityPolicy<R = AFSecurityPolicy>(): R;
    setSecurityPolicy<R = void, P0 = AFSecurityPolicy>(_v: P0): R;
    credential<R = NSURLCredential>(): R;
    setCredential<R = void, P0 = NSURLCredential>(_v: P0): R;
    shouldUseCredentialStorage<R = boolean>(): R;
    setShouldUseCredentialStorage<R = void, P0 = boolean>(_v: P0): R;
    operationQueue<R = NSOperationQueue>(): R;
    setOperationQueue<R = void, P0 = NSOperationQueue>(_v: P0): R;
    responseSerializer<R = AFURLResponseSerialization>(): R;
    setResponseSerializer<R = void, P0 = AFURLResponseSerialization>(_v: P0): R;
    requestSerializer<R = AFURLRequestSerialization>(): R;
    setRequestSerializer<R = void, P0 = AFURLRequestSerialization>(_v: P0): R;
    baseURL<R = NSURL>(): R;
    setBaseURL<R = void, P0 = NSURL>(_v: P0): R;
  }
  namespace AFHTTPRequestOperationManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
      alloc<R = AFHTTPRequestOperationManager>(): R;
      new: <R = AFHTTPRequestOperationManager>() => R;
      manager<R = unknown>(): R;
    }
  }
}

declare const AFHTTPRequestOperationManager: cocoa.AFHTTPRequestOperationManager.CLASS;
