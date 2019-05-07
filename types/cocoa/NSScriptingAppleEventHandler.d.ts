/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptingAppleEventHandler<T0 = void, T1 = void, T2 = void> extends NSObject {
    handleGetAETEEvent_withReplyEvent<R = void, P0 = unknown, P1 = unknown>(_handleGetAETEEvent: P0, _withReplyEvent: P1): R;
    handleCommandEvent_withReplyEvent<R = void, P0 = unknown, P1 = unknown>(_handleCommandEvent: P0, _withReplyEvent: P1): R;
    secureCommandEvent_withReplyEvent<R = unknown, P0 = unknown, P1 = unknown>(_secureCommandEvent: P0, _withReplyEvent: P1): R;
    _registerForCommandDescription_onlySecurityHandlers<R = void, P0 = unknown, P1 = boolean>(__registerForCommandDescription: P0, _onlySecurityHandlers: P1): R;
    registerForCommandDescription<R = void, P0 = unknown>(_registerForCommandDescription: P0): R;
    registerNormalHandlersForCommandDescription<R = void, P0 = unknown>(_registerNormalHandlersForCommandDescription: P0): R;
  }
  namespace NSScriptingAppleEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScriptingAppleEventHandler>(): R;
      new: <R = NSScriptingAppleEventHandler>() => R;
      sharedScriptingAppleEventHandler<R = unknown>(): R;
    }
  }
}

declare const NSScriptingAppleEventHandler: cocoa.NSScriptingAppleEventHandler.CLASS;
