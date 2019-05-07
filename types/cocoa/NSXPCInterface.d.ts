/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCInterface<T0 = void, T1 = void, T2 = void> extends NSObject {
    _methodSignature_allowedClasses_forSelector_isReply<R = void, P0 = unknown, P1 = unknown, P2 = string, P3 = boolean>(__methodSignature: P0, _allowedClasses: P1, _forSelector: P2, _isReply: P3): R;
    _returnClassForSelector<R = unknown, P0 = string>(__returnClassForSelector: P0): R;
    _interfaceForArgument_ofSelector_reply<R = unknown, P0 = number, P1 = string, P2 = boolean>(__interfaceForArgument: P0, _ofSelector: P1, _reply: P2): R;
    _allowedClassesForSelector_reply<R = unknown, P0 = string, P1 = boolean>(__allowedClassesForSelector: P0, _reply: P1): R;
    _hasProxiesInReplyBlockArgumentsOfSelector<R = boolean, P0 = string>(__hasProxiesInReplyBlockArgumentsOfSelector: P0): R;
    _hasProxiesInArgumentsOfSelector<R = boolean, P0 = string>(__hasProxiesInArgumentsOfSelector: P0): R;
    _methodSignatureForReplyBlockOfSelector<R = unknown, P0 = string>(__methodSignatureForReplyBlockOfSelector: P0): R;
    _methodSignatureForRemoteSelector<R = unknown, P0 = string>(__methodSignatureForRemoteSelector: P0): R;
    _generateAndCacheMethodSignatureForRemoteSelector<R = unknown, P0 = string>(__generateAndCacheMethodSignatureForRemoteSelector: P0): R;
    _respondsToRemoteSelector<R = number, P0 = string>(__respondsToRemoteSelector: P0): R;
    set_remoteVersion<R = void, P0 = number>(_set_remoteVersion: P0): R;
    _remoteVersion<R = number>(): R;
    version<R = number>(): R;
    versionForSelector<R = number, P0 = string>(_versionForSelector: P0): R;
    setVersion_forSelector<R = void, P0 = number, P1 = string>(_setVersion: P0, _forSelector: P1): R;
    replyBlockSignatureForSelector<R = unknown, P0 = string>(_replyBlockSignatureForSelector: P0): R;
    setReplyBlockSignature_forSelector<R = void, P0 = unknown, P1 = string>(_setReplyBlockSignature: P0, _forSelector: P1): R;
    classForSelector_argumentIndex_ofReply<R = unknown, P0 = string, P1 = number, P2 = boolean>(_classForSelector: P0, _argumentIndex: P1, _ofReply: P2): R;
    setClass_forSelector_argumentIndex_ofReply<R = void, P0 = unknown, P1 = string, P2 = number, P3 = boolean>(_setClass: P0, _forSelector: P1, _argumentIndex: P2, _ofReply: P3): R;
    interfaceForSelector_argumentIndex_ofReply<R = unknown, P0 = string, P1 = number, P2 = boolean>(_interfaceForSelector: P0, _argumentIndex: P1, _ofReply: P2): R;
    setInterface_forSelector_argumentIndex_ofReply<R = void, P0 = unknown, P1 = string, P2 = number, P3 = boolean>(_setInterface: P0, _forSelector: P1, _argumentIndex: P2, _ofReply: P3): R;
    classesForSelector_argumentIndex_ofReply<R = unknown, P0 = string, P1 = number, P2 = boolean>(_classesForSelector: P0, _argumentIndex: P1, _ofReply: P2): R;
    setClasses_forSelector_argumentIndex_ofReply<R = void, P0 = unknown, P1 = string, P2 = number, P3 = boolean>(_setClasses: P0, _forSelector: P1, _argumentIndex: P2, _ofReply: P3): R;
    _customSubclass<R = unknown>(): R;
    debugDescription<R = unknown>(): R;
    dealloc<R = void>(): R;
    protocol<R = Protocol>(): R;
    setProtocol<R = void, P0 = Protocol>(_v: P0): R;
  }
  namespace NSXPCInterface {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSXPCInterface>(): R;
      new: <R = NSXPCInterface>() => R;
      signatureForBlock<R = unknown, P0 = unknown>(_signatureForBlock: P0): R;
      interfaceWithProtocol<R = unknown, P0 = unknown>(_interfaceWithProtocol: P0): R;
    }
  }
}

declare const NSXPCInterface: cocoa.NSXPCInterface.CLASS;
