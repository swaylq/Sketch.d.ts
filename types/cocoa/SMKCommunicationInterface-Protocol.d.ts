/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKCommunicationInterfaceProtocol<T0 = void, T1 = void, T2 = void> {
    sendData_to<R = void, P0 = NSData, P1 = NSUUID>(_sendData: P0, _to: P1): R;
    broadcastData<R = void, P0 = NSData>(_broadcastData: P0): R;
    disconnect<R = void, P0 = NSUUID>(_disconnect: P0): R;
    connect<R = void, P0 = NSUUID>(_connect: P0): R;
    connectionInfoWithReply<R = void, P0 = CDUnknownBlockType>(_connectionInfoWithReply: P0): R;
    startUsingOptions_webPort<R = void, P0 = number, P1 = number>(_startUsingOptions: P0, _webPort: P1): R;
  }
  namespace SMKCommunicationInterfaceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
