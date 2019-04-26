/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCInterfaceMethodInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    receivesProxyInReply<R = boolean>(): R;
    setReceivesProxyInReply<R = void, P0 = boolean>(_v: P0): R;
    sendsProxyInArgument<R = boolean>(): R;
    setSendsProxyInArgument<R = void, P0 = boolean>(_v: P0): R;
    returnClass<R = unknown>(): R;
    setReturnClass<R = void, P0 = unknown>(_v: P0): R;
    version<R = number>(): R;
    setVersion<R = void, P0 = number>(_v: P0): R;
    replyPosition<R = number>(): R;
    setReplyPosition<R = void, P0 = number>(_v: P0): R;
    arguments<R = NSArray>(): R;
    setArguments<R = void, P0 = NSArray>(_v: P0): R;
    replyMethodSignature<R = NSMethodSignature>(): R;
    setReplyMethodSignature<R = void, P0 = NSMethodSignature>(_v: P0): R;
    replyArguments<R = NSArray>(): R;
    setReplyArguments<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace _NSXPCInterfaceMethodInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSXPCInterfaceMethodInfo>(): R;
      new: <R = _NSXPCInterfaceMethodInfo>() => R;
    }
  }
}
