/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSocketPort<T0 = void, T1 = void, T2 = void> extends NSPort {
    _handleMessage_from_socket<R = void, P0 = __CFData, P1 = __CFData, P2 = __CFSocket>(__handleMessage: P0, _from: P1, _socket: P2): R;
    handlePortMessage<R = void, P0 = unknown>(_handlePortMessage: P0): R;
    sendBeforeTime_streamData_components_from_msgid<R = boolean, P0 = number, P1 = void, P2 = unknown, P3 = unknown, P4 = number>(_sendBeforeTime: P0, _streamData: P1, _components: P2, _from: P3, _msgid: P4): R;
    _sendingSocketForPort_beforeTime<R = __CFSocket, P0 = unknown, P1 = number>(__sendingSocketForPort: P0, _beforeTime: P1): R;
    description<R = unknown>(): R;
    _isDeallocating<R = boolean>(): R;
    _tryRetain<R = boolean>(): R;
    dealloc<R = void>(): R;
    initWithProtocolFamily_socketType_protocol_socket<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_initWithProtocolFamily: P0, _socketType: P1, _protocol: P2, _socket: P3): R;
    initWithProtocolFamily_socketType_protocol_address<R = unknown, P0 = number, P1 = number, P2 = number, P3 = unknown>(_initWithProtocolFamily: P0, _socketType: P1, _protocol: P2, _address: P3): R;
    initRemoteWithProtocolFamily_socketType_protocol_address<R = unknown, P0 = number, P1 = number, P2 = number, P3 = unknown>(_initRemoteWithProtocolFamily: P0, _socketType: P1, _protocol: P2, _address: P3): R;
    _initRemoteWithSignature<R = unknown, P0 = unknown>(__initRemoteWithSignature: P0): R;
    initRemoteWithTCPPort_host<R = unknown, P0 = number, P1 = unknown>(_initRemoteWithTCPPort: P0, _host: P1): R;
    initWithTCPPort<R = unknown, P0 = number>(_initWithTCPPort: P0): R;
    _initWithRetainedCFSocket_protocolFamily_socketType_protocol<R = unknown, P0 = __CFSocket, P1 = number, P2 = number, P3 = number>(__initWithRetainedCFSocket: P0, _protocolFamily: P1, _socketType: P2, _protocol: P3): R;
    signature<R = unknown>(): R;
    handleConnDeath<R = void, P0 = unknown>(_handleConnDeath: P0): R;
    _incrementUseCount<R = void>(): R;
    isValid<R = boolean>(): R;
    address<R = NSData>(): R;
    socket<R = number>(): R;
    protocol<R = number>(): R;
    socketType<R = number>(): R;
    protocolFamily<R = number>(): R;
  }
  namespace NSSocketPort {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPort {
      alloc<R = NSSocketPort>(): R;
      new: <R = NSSocketPort>() => R;
      sendBeforeTime_streamData_components_to_from_msgid_reserved<R = boolean, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = number, P6 = number>(_sendBeforeTime: P0, _streamData: P1, _components: P2, _to: P3, _from: P4, _msgid: P5, _reserved: P6): R;
      _fixNSSocketPortLeak<R = void>(): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSSocketPort: cocoa.NSSocketPort.CLASS;
