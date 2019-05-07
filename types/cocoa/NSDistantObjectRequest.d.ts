/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDistantObjectRequest<T0 = void, T1 = void, T2 = void> extends NSObject {
    replyWithException<R = void, P0 = unknown>(_replyWithException: P0): R;
    conversation<R = unknown>(): R;
    connection<R = NSConnection>(): R;
    invocation<R = NSInvocation>(): R;
  }
  namespace NSDistantObjectRequest {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDistantObjectRequest>(): R;
      new: <R = NSDistantObjectRequest>() => R;
    }
  }
}

declare const NSDistantObjectRequest: cocoa.NSDistantObjectRequest.CLASS;
