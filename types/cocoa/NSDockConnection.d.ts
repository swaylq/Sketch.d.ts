/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDockConnection<T = any> extends cocoa.NSObject {
    _processEvent<R = void, P0 = unknown>(__processEvent: P0): R;
    dockPid<R = number>(): R;
    sendMessage_synchronous_replyHandler<R = void, P0 = unknown, P1 = boolean, P2 = cocoa.CDUnknownBlockType>(_sendMessage: P0, _synchronous: P1, _replyHandler: P2): R;
    sendMessage<R = void, P0 = unknown>(_sendMessage: P0): R;
    _makeConnectionIfNeeded<R = void>(): R;
    _makeConnectionIfNeededWithRetryInterval_onDemand<R = void, P0 = number, P1 = boolean>(__makeConnectionIfNeededWithRetryInterval: P0, _onDemand: P1): R;
    reactToDockAlive<R = void>(): R;
    reactToDockDied<R = void>(): R;
    startConnection<R = void>(): R;
    initWithServiceName_receiveHandler<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_initWithServiceName: P0, _receiveHandler: P1): R;
    dealloc<R = void>(): R;
    serviceName<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSDockConnection<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSDockConnection>(): R;
      new: <R = NSDockConnection>() => R;
      connectionWithServiceName<R = unknown, P0 = unknown>(_connectionWithServiceName: P0): R;
      _nameToConnectionMap<R = unknown>(): R;
      allConnections<R = unknown>(): R;
    }
  }
}

declare const NSDockConnection: cocoa.classes.NSDockConnection;
