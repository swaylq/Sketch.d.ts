/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInvocation<T0 = void, T1 = void, T2 = void> {
    // + NSInvocation(NSInvocationDebugDescription): 
    debugDescription<R = unknown>(): R;
    // + NSInvocation(NSXPCConnectionExtensions): 
    _hasBlockArgument<R = boolean>(): R;
    setUserInfo<R = void, P0 = unknown>(_setUserInfo: P0): R;
    userInfo<R = unknown>(): R;
  }
  namespace NSInvocation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const NSInvocation: cocoa.NSInvocation.CLASS;
