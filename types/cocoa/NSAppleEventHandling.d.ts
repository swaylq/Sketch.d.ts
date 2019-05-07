/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAppleEventHandling<T0 = void, T1 = void, T2 = void> extends NSObject {
    resumeWithScriptCommandResult<R = void, P0 = unknown>(_resumeWithScriptCommandResult: P0): R;
    suspend<R = void>(): R;
    scriptCommand<R = unknown>(): R;
    replyEvent<R = unknown>(): R;
    event<R = unknown>(): R;
    setScriptCommand<R = void, P0 = unknown>(_setScriptCommand: P0): R;
    dealloc<R = void>(): R;
    initWithEvent_replyEvent<R = unknown, P0 = AEDesc, P1 = AEDesc>(_initWithEvent: P0, _replyEvent: P1): R;
  }
  namespace NSAppleEventHandling {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAppleEventHandling>(): R;
      new: <R = NSAppleEventHandling>() => R;
    }
  }
}

declare const NSAppleEventHandling: cocoa.NSAppleEventHandling.CLASS;
