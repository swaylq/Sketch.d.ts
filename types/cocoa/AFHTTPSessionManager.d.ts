/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFHTTPSessionManager<T0 = void, T1 = void, T2 = void> extends AFURLSessionManager, NSSecureCodingProtocol, NSCopyingProtocol {
    description<R = unknown>(): R;
    dataTaskWithHTTPMethod_URLString_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType, P4 = CDUnknownBlockType>(_dataTaskWithHTTPMethod: P0, _URLString: P1, _parameters: P2, _success: P3, _failure: P4): R;
    DELETE_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_DELETE: P0, _parameters: P1, _success: P2, _failure: P3): R;
    PATCH_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_PATCH: P0, _parameters: P1, _success: P2, _failure: P3): R;
    PUT_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_PUT: P0, _parameters: P1, _success: P2, _failure: P3): R;
    POST_parameters_constructingBodyWithBlock_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType, P4 = CDUnknownBlockType>(_POST: P0, _parameters: P1, _constructingBodyWithBlock: P2, _success: P3, _failure: P4): R;
    POST_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_POST: P0, _parameters: P1, _success: P2, _failure: P3): R;
    HEAD_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_HEAD: P0, _parameters: P1, _success: P2, _failure: P3): R;
    GET_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_GET: P0, _parameters: P1, _success: P2, _failure: P3): R;
    initWithBaseURL_sessionConfiguration<R = unknown, P0 = unknown, P1 = unknown>(_initWithBaseURL: P0, _sessionConfiguration: P1): R;
    initWithBaseURL<R = unknown, P0 = unknown>(_initWithBaseURL: P0): R;
    requestSerializer<R = AFURLRequestSerialization>(): R;
    setRequestSerializer<R = void, P0 = AFURLRequestSerialization>(_v: P0): R;
    baseURL<R = NSURL>(): R;
    setBaseURL<R = void, P0 = NSURL>(_v: P0): R;
    responseSerializer<R = AFURLResponseSerialization>(): R;
    setResponseSerializer<R = void, P0 = AFURLResponseSerialization>(_v: P0): R;
  }
  namespace AFHTTPSessionManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends AFURLSessionManager, NSSecureCodingProtocol, NSCopyingProtocol {
      alloc<R = AFHTTPSessionManager>(): R;
      new: <R = AFHTTPSessionManager>() => R;
      manager<R = unknown>(): R;
    }
  }
}

declare const AFHTTPSessionManager: cocoa.AFHTTPSessionManager.CLASS;
