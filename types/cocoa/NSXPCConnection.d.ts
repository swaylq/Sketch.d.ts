/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCConnection<T0 = void, T1 = void, T2 = void> extends NSObject, NSXPCProxyCreatingProtocol {
    _decodeProgressMessageWithData_flags<R = void, P0 = unknown, P1 = number>(__decodeProgressMessageWithData: P0, _flags: P1): R;
    _resumeProgress<R = void, P0 = number>(__resumeProgress: P0): R;
    _pauseProgress<R = void, P0 = number>(__pauseProgress: P0): R;
    _cancelProgress<R = void, P0 = number>(__cancelProgress: P0): R;
    _sendProgressMessage_forSequence<R = void, P0 = unknown, P1 = number>(__sendProgressMessage: P0, _forSequence: P1): R;
    _xpcConnection<R = unknown>(): R;
    _killConnection<R = void, P0 = number>(__killConnection: P0): R;
    _setTargetUserIdentifier<R = void, P0 = number>(__setTargetUserIdentifier: P0): R;
    _setUUID<R = void, P0 = unknown>(__setUUID: P0): R;
    _removeImportedProxy<R = void, P0 = unknown>(__removeImportedProxy: P0): R;
    _addImportedProxy<R = void, P0 = unknown>(__addImportedProxy: P0): R;
    remoteObjectProxyWithTimeout_errorHandler<R = unknown, P0 = number, P1 = CDUnknownBlockType>(_remoteObjectProxyWithTimeout: P0, _errorHandler: P1): R;
    remoteObjectProxyWithUserInfo_errorHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_remoteObjectProxyWithUserInfo: P0, _errorHandler: P1): R;
    _unboostingRemoteObjectProxy<R = unknown>(): R;
    _remoteObjectInterfaceClass<R = unknown>(): R;
    _addClassToDecodeCache<R = void, P0 = unknown>(__addClassToDecodeCache: P0): R;
    _decodeCacheContainsClass<R = boolean, P0 = unknown>(__decodeCacheContainsClass: P0): R;
    _addClassToEncodeCache<R = void, P0 = unknown>(__addClassToEncodeCache: P0): R;
    _encodeCacheContainsClass<R = boolean, P0 = unknown>(__encodeCacheContainsClass: P0): R;
    description<R = unknown>(): R;
    _errorDescription<R = unknown>(): R;
    _queue<R = unknown>(): R;
    _setQueue<R = void, P0 = unknown>(__setQueue: P0): R;
    replacementObjectForEncoder_object<R = unknown, P0 = unknown, P1 = unknown>(_replacementObjectForEncoder: P0, _object: P1): R;
    delegate<R = unknown>(): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    setUserInfo<R = void, P0 = unknown>(_setUserInfo: P0): R;
    userInfo<R = unknown>(): R;
    _generationCount<R = number>(): R;
    valueForEntitlement<R = unknown, P0 = unknown>(_valueForEntitlement: P0): R;
    auditToken<R = unknown>(): R;
    setOptions<R = void, P0 = number>(_setOptions: P0): R;
    _exportTable<R = unknown>(): R;
    _additionalInvalidationHandler<R = CDUnknownBlockType>(): R;
    set_additionalInvalidationHandler<R = void, P0 = CDUnknownBlockType>(_set_additionalInvalidationHandler: P0): R;
    _sendInvocation_orArguments_count_methodSignature_selector_withProxy<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = string, P5 = unknown>(__sendInvocation: P0, _orArguments: P1, _count: P2, _methodSignature: P3, _selector: P4, _withProxy: P5): R;
    _sendInvocation_withProxy<R = void, P0 = unknown, P1 = unknown>(__sendInvocation: P0, _withProxy: P1): R;
    _sendSelector_withProxy_arg1_arg2_arg3_arg4<R = void, P0 = string, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown>(__sendSelector: P0, _withProxy: P1, _arg1: P2, _arg2: P3, _arg3: P4, _arg4: P5): R;
    _sendSelector_withProxy_arg1_arg2_arg3<R = void, P0 = string, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(__sendSelector: P0, _withProxy: P1, _arg1: P2, _arg2: P3, _arg3: P4): R;
    _sendSelector_withProxy_arg1_arg2<R = void, P0 = string, P1 = unknown, P2 = unknown, P3 = unknown>(__sendSelector: P0, _withProxy: P1, _arg1: P2, _arg2: P3): R;
    _sendSelector_withProxy_arg1<R = void, P0 = string, P1 = unknown, P2 = unknown>(__sendSelector: P0, _withProxy: P1, _arg1: P2): R;
    _sendSelector_withProxy<R = void, P0 = string, P1 = unknown>(__sendSelector: P0, _withProxy: P1): R;
    _sendDesistForProxy<R = void, P0 = unknown>(__sendDesistForProxy: P0): R;
    addBarrierBlock<R = void, P0 = CDUnknownBlockType>(_addBarrierBlock: P0): R;
    invalidate<R = void>(): R;
    stop<R = void>(): R;
    start<R = void>(): R;
    resume<R = void>(): R;
    suspend<R = void>(): R;
    dealloc<R = void>(): R;
    initWithListenerEndpoint<R = unknown, P0 = unknown>(_initWithListenerEndpoint: P0): R;
    initWithEndpoint<R = unknown, P0 = unknown>(_initWithEndpoint: P0): R;
    initWithMachServiceName<R = unknown, P0 = unknown>(_initWithMachServiceName: P0): R;
    initWithMachServiceName_options<R = unknown, P0 = unknown, P1 = number>(_initWithMachServiceName: P0, _options: P1): R;
    initWithServiceName<R = unknown, P0 = unknown>(_initWithServiceName: P0): R;
    initWithServiceName_options<R = unknown, P0 = unknown, P1 = number>(_initWithServiceName: P0, _options: P1): R;
    _initWithPeerConnection_name_options<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(__initWithPeerConnection: P0, _name: P1, _options: P2): R;
    _decodeAndInvokeMessageWithEvent_flags<R = void, P0 = unknown, P1 = number>(__decodeAndInvokeMessageWithEvent: P0, _flags: P1): R;
    _decodeAndInvokeReplyBlockWithEvent_sequence_replyInfo<R = void, P0 = unknown, P1 = number, P2 = unknown>(__decodeAndInvokeReplyBlockWithEvent: P0, _sequence: P1, _replyInfo: P2): R;
    remoteObjectInterface<R = NSXPCInterface>(): R;
    setRemoteObjectInterface<R = void, P0 = NSXPCInterface>(_v: P0): R;
    effectiveGroupIdentifier<R = number>(): R;
    effectiveUserIdentifier<R = number>(): R;
    processIdentifier<R = number>(): R;
    auditSessionIdentifier<R = number>(): R;
    remoteObjectProxy<R = unknown>(): R;
    exportedInterface<R = NSXPCInterface>(): R;
    setExportedInterface<R = void, P0 = NSXPCInterface>(_v: P0): R;
    exportedObject<R = unknown>(): R;
    setExportedObject<R = void, P0 = unknown>(_v: P0): R;
    endpoint<R = NSXPCListenerEndpoint>(): R;
    serviceName<R = NSString>(): R;
    invalidationHandler<R = CDUnknownBlockType>(): R;
    setInvalidationHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    interruptionHandler<R = CDUnknownBlockType>(): R;
    setInterruptionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace NSXPCConnection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSXPCProxyCreatingProtocol {
      alloc<R = NSXPCConnection>(): R;
      new: <R = NSXPCConnection>() => R;
      endTransaction<R = void>(): R;
      beginTransaction<R = void>(): R;
      _currentBoost<R = unknown>(): R;
      currentConnection<R = unknown>(): R;
    }
  }
}

declare const NSXPCConnection: cocoa.NSXPCConnection.CLASS;
