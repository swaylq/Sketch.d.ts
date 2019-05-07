/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKConnection<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    didReceiveData<R = void, P0 = unknown>(_didReceiveData: P0): R;
    sendData<R = void, P0 = unknown>(_sendData: P0): R;
    close<R = void>(): R;
    connect<R = void>(): R;
    dealloc<R = void>(): R;
    resourceHost<R = NSString>(): R;
    status<R = number>(): R;
    setStatus<R = void, P0 = number>(_v: P0): R;
    advertisement<R = NSDictionary>(): R;
    queue<R = OS_dispatch_queue>(): R;
    error<R = NSError>(): R;
    UUID<R = NSUUID>(): R;
    connectionType<R = number>(): R;
    connectionInfo<R = SMKConnectionInfo>(): R;
  }
  namespace SMKConnection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = SMKConnection>(): R;
      new: <R = SMKConnection>() => R;
    }
  }
}

declare const SMKConnection: cocoa.SMKConnection.CLASS;
