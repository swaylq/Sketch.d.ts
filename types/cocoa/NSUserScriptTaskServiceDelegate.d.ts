/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserScriptTaskServiceDelegate<T0 = void, T1 = void, T2 = void> extends NSObject, NSXPCListenerDelegateProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSUserScriptTaskServiceDelegate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSXPCListenerDelegateProtocol {
      alloc<R = NSUserScriptTaskServiceDelegate>(): R;
      new: <R = NSUserScriptTaskServiceDelegate>() => R;
    }
  }
}

declare const NSUserScriptTaskServiceDelegate: cocoa.NSUserScriptTaskServiceDelegate.CLASS;
