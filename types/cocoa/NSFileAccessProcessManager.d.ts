/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileAccessProcessManager<T = any> extends cocoa.NSObject {
    invalidate<R = void>(): R;
    allowSuspension<R = void>(): R;
    preventSuspensionWithActivityName<R = void, P0 = unknown>(_preventSuspensionWithActivityName: P0): R;
    safelySendMessageWithReplyUsingBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_safelySendMessageWithReplyUsingBlock: P0): R;
    killProcessWithMessage<R = void, P0 = unknown>(_killProcessWithMessage: P0): R;
    _ensureMonitor<R = void>(): R;
    dealloc<R = void>(): R;
    initWithClient_queue<R = unknown, P0 = unknown, P1 = unknown>(_initWithClient: P0, _queue: P1): R;
    URLs<R = cocoa.NSArray>(): R;
    setURLs<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    suspensionHandler<R = cocoa.CDUnknownBlockType>(): R;
    setSuspensionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface NSFileAccessProcessManager<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSFileAccessProcessManager>(): R;
      new: <R = NSFileAccessProcessManager>() => R;
      needToManageConnection_forURLs<R = boolean, P0 = unknown, P1 = unknown>(_needToManageConnection: P0, _forURLs: P1): R;
    }
  }
}

declare const NSFileAccessProcessManager: cocoa.classes.NSFileAccessProcessManager;
