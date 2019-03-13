/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKCommunicationResponseInterfaceProtocol<T = any> extends NSObjectProtocol {
    connectionInfo_didReceiveData<R = void, P0 = SMKConnectionInfo, P1 = NSData>(_connectionInfo: P0, _didReceiveData: P1): R;
    connectionAdvertisementDidChange<R = void, P0 = SMKConnectionInfo>(_connectionAdvertisementDidChange: P0): R;
    connectionStatusDidChange<R = void, P0 = SMKConnectionInfo>(_connectionStatusDidChange: P0): R;
    connectionInfoDidChange<R = void, P0 = NSArray>(_connectionInfoDidChange: P0): R;
  }
  namespace classes {
    export interface SMKCommunicationResponseInterfaceProtocol<T = any> extends NSObjectProtocol {  }
  }
}
