/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConnection<T0 = void, T1 = void, T2 = void> extends NSObject {
    runInNewThread<R = void>(): R;
    run<R = void>(): R;
    removeRunLoop<R = void, P0 = unknown>(_removeRunLoop: P0): R;
    addRunLoop<R = void, P0 = unknown>(_addRunLoop: P0): R;
    enableMultipleThreads<R = void>(): R;
    hasRunLoop<R = boolean, P0 = unknown>(_hasRunLoop: P0): R;
    removePortsFromRunLoop<R = void, P0 = unknown>(_removePortsFromRunLoop: P0): R;
    addPortsToRunLoop<R = void, P0 = unknown>(_addPortsToRunLoop: P0): R;
    description<R = unknown>(): R;
    _setUseKC<R = void, P0 = boolean>(__setUseKC: P0): R;
    _sendBeforeTime_coder_doAuthenticationCheck<R = void, P0 = number, P1 = unknown, P2 = boolean>(__sendBeforeTime: P0, _coder: P1, _doAuthenticationCheck: P2): R;
    _verifyComponents<R = boolean, P0 = unknown>(__verifyComponents: P0): R;
    _authenticateComponents<R = void, P0 = unknown>(__authenticateComponents: P0): R;
    sendInvocation<R = void, P0 = unknown>(_sendInvocation: P0): R;
    sendInvocation_internal<R = void, P0 = unknown, P1 = boolean>(_sendInvocation: P0, _internal: P1): R;
    returnResult_exception_sequence_imports<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_returnResult: P0, _exception: P1, _sequence: P2, _imports: P3): R;
    dispatchInvocation<R = unknown, P0 = unknown>(_dispatchInvocation: P0): R;
    handleRequest_sequence<R = void, P0 = unknown, P1 = number>(_handleRequest: P0, _sequence: P1): R;
    _shouldDispatch_invocation_sequence_coder<R = boolean, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(__shouldDispatch: P0, _invocation: P1, _sequence: P2, _coder: P3): R;
    newConversation<R = unknown>(): R;
    sendWireCountForWireID_port<R = boolean, P0 = number, P1 = unknown>(_sendWireCountForWireID: P0, _port: P1): R;
    handlePortCoder<R = void, P0 = unknown>(_handlePortCoder: P0): R;
    handlePortMessage<R = void, P0 = unknown>(_handlePortMessage: P0): R;
    dispatchWithComponents<R = void, P0 = unknown>(_dispatchWithComponents: P0): R;
    portCoderWithComponents<R = unknown, P0 = unknown>(_portCoderWithComponents: P0): R;
    _portCoderClassWithComponents<R = unknown, P0 = unknown>(__portCoderClassWithComponents: P0): R;
    _portCoderClass<R = unknown>(): R;
    releaseWireID_count<R = void, P0 = number, P1 = number>(_releaseWireID: P0, _count: P1): R;
    sendReleasedProxies<R = void>(): R;
    decodeReleasedProxies<R = void, P0 = unknown>(_decodeReleasedProxies: P0): R;
    handleUnkeyedReleasedProxies_length<R = void, P0 = string, P1 = number>(_handleUnkeyedReleasedProxies: P0, _length: P1): R;
    handleKeyedReleasedProxies<R = void, P0 = unknown>(_handleKeyedReleasedProxies: P0): R;
    encodeReleasedProxies<R = void, P0 = unknown>(_encodeReleasedProxies: P0): R;
    _encodeProxyList_forCoder<R = void, P0 = unknown, P1 = unknown>(__encodeProxyList: P0, _forCoder: P1): R;
    _setWhitelist<R = void, P0 = unknown>(__setWhitelist: P0): R;
    versionForClassNamed<R = number, P0 = unknown>(_versionForClassNamed: P0): R;
    addClassNamed_version<R = void, P0 = string, P1 = number>(_addClassNamed: P0, _version: P1): R;
    _decrementLocalProxyCount<R = void>(): R;
    _incrementLocalProxyCount<R = void>(): R;
    keyedRootObject<R = unknown>(): R;
    setReplyMode<R = void, P0 = unknown>(_setReplyMode: P0): R;
    replyMode<R = unknown>(): R;
    removeRequestMode<R = void, P0 = unknown>(_removeRequestMode: P0): R;
    addRequestMode<R = void, P0 = unknown>(_addRequestMode: P0): R;
    invalidate<R = void>(): R;
    dealloc<R = void>(): R;
    registerName_withNameServer<R = boolean, P0 = unknown, P1 = unknown>(_registerName: P0, _withNameServer: P1): R;
    registerName<R = boolean, P0 = unknown>(_registerName: P0): R;
    initWithReceivePort_sendPort<R = unknown, P0 = unknown, P1 = unknown>(_initWithReceivePort: P0, _sendPort: P1): R;
    _portInvalidated<R = void, P0 = unknown>(__portInvalidated: P0): R;
    multipleThreadsEnabled<R = boolean>(): R;
    statistics<R = NSDictionary>(): R;
    localObjects<R = NSArray>(): R;
    remoteObjects<R = NSArray>(): R;
    rootObject<R = unknown>(): R;
    setRootObject<R = void, P0 = unknown>(_v: P0): R;
    rootProxy<R = NSDistantObject>(): R;
    sendPort<R = NSPort>(): R;
    receivePort<R = NSPort>(): R;
    requestModes<R = NSArray>(): R;
    delegate<R = NSConnectionDelegate>(): R;
    setDelegate<R = void, P0 = NSConnectionDelegate>(_v: P0): R;
    independentConversationQueueing<R = boolean>(): R;
    setIndependentConversationQueueing<R = void, P0 = boolean>(_v: P0): R;
    replyTimeout<R = number>(): R;
    setReplyTimeout<R = void, P0 = number>(_v: P0): R;
    requestTimeout<R = number>(): R;
    setRequestTimeout<R = void, P0 = number>(_v: P0): R;
    valid<R = boolean>(): R;
  }
  namespace NSConnection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSConnection>(): R;
      new: <R = NSConnection>() => R;
      _enableLogging<R = void, P0 = boolean>(__enableLogging: P0): R;
      _toggleLogging<R = void>(): R;
      statistics<R = unknown>(): R;
      currentConversation<R = unknown>(): R;
      allConnections<R = unknown>(): R;
      defaultConnection<R = unknown>(): R;
      serviceConnectionWithName_rootObject<R = unknown, P0 = unknown, P1 = unknown>(_serviceConnectionWithName: P0, _rootObject: P1): R;
      serviceConnectionWithName_rootObject_usingNameServer<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_serviceConnectionWithName: P0, _rootObject: P1, _usingNameServer: P2): R;
      rootProxyForConnectionWithRegisteredName_host_usingNameServer<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_rootProxyForConnectionWithRegisteredName: P0, _host: P1, _usingNameServer: P2): R;
      rootProxyForConnectionWithRegisteredName_host<R = unknown, P0 = unknown, P1 = unknown>(_rootProxyForConnectionWithRegisteredName: P0, _host: P1): R;
      rootProxyForConnectionWithPrivilegedName<R = unknown, P0 = unknown>(_rootProxyForConnectionWithPrivilegedName: P0): R;
      connectionWithPrivilegedName<R = unknown, P0 = unknown>(_connectionWithPrivilegedName: P0): R;
      connectionWithRegisteredName_host<R = unknown, P0 = unknown, P1 = unknown>(_connectionWithRegisteredName: P0, _host: P1): R;
      connectionWithRegisteredName_host_usingNameServer<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_connectionWithRegisteredName: P0, _host: P1, _usingNameServer: P2): R;
      connectionWithReceivePort_sendPort<R = unknown, P0 = unknown, P1 = unknown>(_connectionWithReceivePort: P0, _sendPort: P1): R;
      lookUpConnectionWithReceivePort_sendPort<R = unknown, P0 = unknown, P1 = unknown>(_lookUpConnectionWithReceivePort: P0, _sendPort: P1): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSConnection: cocoa.NSConnection.CLASS;
