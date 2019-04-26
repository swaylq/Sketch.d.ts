/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCConnectionExpectedReplyInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    proxyNumber<R = number>(): R;
    setProxyNumber<R = void, P0 = number>(_v: P0): R;
    userInfo<R = NSDictionary>(): R;
    setUserInfo<R = void, P0 = NSDictionary>(_v: P0): R;
    interface<R = NSXPCInterface>(): R;
    setInterface<R = void, P0 = NSXPCInterface>(_v: P0): R;
    cleanupBlock<R = CDUnknownBlockType>(): R;
    setCleanupBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    errorBlock<R = CDUnknownBlockType>(): R;
    setErrorBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    replyBlock<R = NSBlock>(): R;
    setReplyBlock<R = void, P0 = NSBlock>(_v: P0): R;
    selector<R = string>(): R;
    setSelector<R = void, P0 = string>(_v: P0): R;
  }
  namespace _NSXPCConnectionExpectedReplyInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSXPCConnectionExpectedReplyInfo>(): R;
      new: <R = _NSXPCConnectionExpectedReplyInfo>() => R;
    }
  }
}
