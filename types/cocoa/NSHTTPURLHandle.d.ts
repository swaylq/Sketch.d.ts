/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHTTPURLHandle<T0 = void, T1 = void, T2 = void> extends NSURLHandle {
    performStreamRead<R = void>(): R;
    _processHeaders<R = void, P0 = __CFHTTPMessage>(__processHeaders: P0): R;
    reportStreamError<R = void>(): R;
    _configureStreamDetails<R = void, P0 = __CFReadStream>(__configureStreamDetails: P0): R;
    populateCacheFromStream_data<R = void, P0 = __CFReadStream, P1 = unknown>(_populateCacheFromStream: P0, _data: P1): R;
    _URL<R = unknown>(): R;
    _constructRequestForURL_isHead<R = __CFHTTPMessage, P0 = unknown, P1 = boolean>(__constructRequestForURL: P0, _isHead: P1): R;
  }
  namespace NSHTTPURLHandle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSURLHandle {
      alloc<R = NSHTTPURLHandle>(): R;
      new: <R = NSHTTPURLHandle>() => R;
      canonicalHTTPURLForURL<R = unknown, P0 = unknown>(_canonicalHTTPURLForURL: P0): R;
    }
  }
}

declare const NSHTTPURLHandle: cocoa.NSHTTPURLHandle.CLASS;
