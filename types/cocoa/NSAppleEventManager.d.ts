/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAppleEventManager<T0 = void, T1 = void, T2 = void> extends NSObject {
    resumeWithSuspensionID<R = void, P0 = __NSAppleEventManagerSuspension>(_resumeWithSuspensionID: P0): R;
    setCurrentAppleEventAndReplyEventWithSuspensionID<R = void, P0 = __NSAppleEventManagerSuspension>(_setCurrentAppleEventAndReplyEventWithSuspensionID: P0): R;
    replyAppleEventForSuspensionID<R = unknown, P0 = __NSAppleEventManagerSuspension>(_replyAppleEventForSuspensionID: P0): R;
    appleEventForSuspensionID<R = unknown, P0 = __NSAppleEventManagerSuspension>(_appleEventForSuspensionID: P0): R;
    suspendCurrentAppleEvent<R = __NSAppleEventManagerSuspension>(): R;
    dispatchRawAppleEvent_withRawReply_handlerRefCon<R = number, P0 = AEDesc, P1 = AEDesc, P2 = void>(_dispatchRawAppleEvent: P0, _withRawReply: P1, _handlerRefCon: P2): R;
    removeEventHandlerForEventClass_andEventID<R = void, P0 = number, P1 = number>(_removeEventHandlerForEventClass: P0, _andEventID: P1): R;
    setEventHandler_andSelector_forEventClass_andEventID<R = void, P0 = unknown, P1 = string, P2 = number, P3 = number>(_setEventHandler: P0, _andSelector: P1, _forEventClass: P2, _andEventID: P3): R;
    _prepareForDispatch<R = void>(): R;
    _setEventSecurityHandler_andSelector_forEventClass_andEventID<R = void, P0 = unknown, P1 = string, P2 = number, P3 = number>(__setEventSecurityHandler: P0, _andSelector: P1, _forEventClass: P2, _andEventID: P3): R;
    _resumeIfNotTopHandling_withScriptCommandResult<R = void, P0 = unknown, P1 = unknown>(__resumeIfNotTopHandling: P0, _withScriptCommandResult: P1): R;
    _suspendIfTopHandling<R = void, P0 = unknown>(__suspendIfTopHandling: P0): R;
    _popIfTopHandling<R = boolean, P0 = unknown>(__popIfTopHandling: P0): R;
    _poppedTopHandling<R = unknown>(): R;
    _pushHandling<R = void, P0 = unknown>(__pushHandling: P0): R;
    _topHandling<R = unknown>(): R;
    _perThreadHandlingStack<R = unknown, P0 = boolean>(__perThreadHandlingStack: P0): R;
    currentReplyAppleEvent<R = NSAppleEventDescriptor>(): R;
    currentAppleEvent<R = NSAppleEventDescriptor>(): R;
  }
  namespace NSAppleEventManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAppleEventManager>(): R;
      new: <R = NSAppleEventManager>() => R;
      sharedAppleEventManager<R = unknown>(): R;
      _eventAccessGroups_matchesDefinitionGroups<R = boolean, P0 = unknown, P1 = unknown>(__eventAccessGroups: P0, _matchesDefinitionGroups: P1): R;
    }
  }
}

declare const NSAppleEventManager: cocoa.NSAppleEventManager.CLASS;
