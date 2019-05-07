/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFStreamingMultipartFormData<T0 = void, T1 = void, T2 = void> extends NSObject, AFMultipartFormDataProtocol {
    cxx_destruct<R = void>(): R;
    requestByFinalizingMultipartFormData<R = unknown>(): R;
    initWithURLRequest_stringEncoding<R = unknown, P0 = unknown, P1 = number>(_initWithURLRequest: P0, _stringEncoding: P1): R;
    bodyStream<R = AFMultipartBodyStream>(): R;
    setBodyStream<R = void, P0 = AFMultipartBodyStream>(_v: P0): R;
    boundary<R = NSString>(): R;
    setBoundary<R = void, P0 = NSString>(_v: P0): R;
    stringEncoding<R = number>(): R;
    setStringEncoding<R = void, P0 = number>(_v: P0): R;
    request<R = NSMutableURLRequest>(): R;
    setRequest<R = void, P0 = NSMutableURLRequest>(_v: P0): R;
  }
  namespace AFStreamingMultipartFormData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, AFMultipartFormDataProtocol {
      alloc<R = AFStreamingMultipartFormData>(): R;
      new: <R = AFStreamingMultipartFormData>() => R;
    }
  }
}

declare const AFStreamingMultipartFormData: cocoa.AFStreamingMultipartFormData.CLASS;
