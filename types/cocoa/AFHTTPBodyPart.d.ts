/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFHTTPBodyPart<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    transitionToNextPhase<R = boolean>(): R;
    readData_intoBuffer_maxLength<R = number, P0 = unknown, P1 = string, P2 = number>(_readData: P0, _intoBuffer: P1, _maxLength: P2): R;
    read_maxLength<R = number, P0 = string, P1 = number>(_read: P0, _maxLength: P1): R;
    stringForHeaders<R = unknown>(): R;
    dealloc<R = void>(): R;
    hasFinalBoundary<R = boolean>(): R;
    setHasFinalBoundary<R = void, P0 = boolean>(_v: P0): R;
    hasInitialBoundary<R = boolean>(): R;
    setHasInitialBoundary<R = void, P0 = boolean>(_v: P0): R;
    inputStream<R = NSInputStream>(): R;
    setInputStream<R = void, P0 = NSInputStream>(_v: P0): R;
    bodyContentLength<R = number>(): R;
    setBodyContentLength<R = void, P0 = number>(_v: P0): R;
    body<R = unknown>(): R;
    setBody<R = void, P0 = unknown>(_v: P0): R;
    boundary<R = NSString>(): R;
    setBoundary<R = void, P0 = NSString>(_v: P0): R;
    headers<R = NSDictionary>(): R;
    setHeaders<R = void, P0 = NSDictionary>(_v: P0): R;
    stringEncoding<R = number>(): R;
    setStringEncoding<R = void, P0 = number>(_v: P0): R;
    bytesAvailable<R = boolean>(): R;
    contentLength<R = number>(): R;
  }
  namespace AFHTTPBodyPart {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = AFHTTPBodyPart>(): R;
      new: <R = AFHTTPBodyPart>() => R;
    }
  }
}

declare const AFHTTPBodyPart: cocoa.AFHTTPBodyPart.CLASS;
