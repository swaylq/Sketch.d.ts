/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFHTTPRequestOperation<T0 = void, T1 = void, T2 = void> extends AFURLConnectionOperation {
    setCompletionBlockWithSuccess_failure<R = void, P0 = CDUnknownBlockType, P1 = CDUnknownBlockType>(_setCompletionBlockWithSuccess: P0, _failure: P1): R;
    error<R = unknown>(): R;
    responseSerializationError<R = NSError>(): R;
    setResponseSerializationError<R = void, P0 = NSError>(_v: P0): R;
    responseObject<R = unknown>(): R;
    setResponseObject<R = void, P0 = unknown>(_v: P0): R;
    responseSerializer<R = AFURLResponseSerialization>(): R;
    setResponseSerializer<R = void, P0 = AFURLResponseSerialization>(_v: P0): R;
    lock<R = NSRecursiveLock>(): R;
    setLock<R = void, P0 = NSRecursiveLock>(_v: P0): R;
    response<R = NSHTTPURLResponse>(): R;
    setResponse<R = void, P0 = NSHTTPURLResponse>(_v: P0): R;
  }
  namespace AFHTTPRequestOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends AFURLConnectionOperation {
      alloc<R = AFHTTPRequestOperation>(): R;
      new: <R = AFHTTPRequestOperation>() => R;
    }
  }
}

declare const AFHTTPRequestOperation: cocoa.AFHTTPRequestOperation.CLASS;
