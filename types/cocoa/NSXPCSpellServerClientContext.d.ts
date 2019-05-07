/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCSpellServerClientContext<T0 = void, T1 = void, T2 = void> extends NSObject {
    finish<R = void>(): R;
    error<R = unknown>(): R;
    proxy<R = unknown>(): R;
    waiter<R = unknown>(): R;
    messageName<R = unknown>(): R;
    client<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithClient_messageName_waitForReply<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_initWithClient: P0, _messageName: P1, _waitForReply: P2): R;
  }
  namespace NSXPCSpellServerClientContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSXPCSpellServerClientContext>(): R;
      new: <R = NSXPCSpellServerClientContext>() => R;
      signalWaiter<R = void, P0 = unknown>(_signalWaiter: P0): R;
    }
  }
}

declare const NSXPCSpellServerClientContext: cocoa.NSXPCSpellServerClientContext.CLASS;
