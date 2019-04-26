/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPortNameServer<T0 = void, T1 = void, T2 = void> extends NSObject {
    portForName_onHost<R = unknown, P0 = unknown, P1 = unknown>(_portForName: P0, _onHost: P1): R;
    registerPort_forName<R = boolean, P0 = unknown, P1 = unknown>(_registerPort: P0, _forName: P1): R;
    removePortForName<R = boolean, P0 = unknown>(_removePortForName: P0): R;
    registerPort_name<R = boolean, P0 = unknown, P1 = unknown>(_registerPort: P0, _name: P1): R;
    portForName_host<R = unknown, P0 = unknown, P1 = unknown>(_portForName: P0, _host: P1): R;
    portForName<R = unknown, P0 = unknown>(_portForName: P0): R;
  }
  namespace NSPortNameServer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPortNameServer>(): R;
      new: <R = NSPortNameServer>() => R;
      defaultPortNameServer<R = unknown>(): R;
      systemDefaultPortNameServer<R = unknown>(): R;
    }
  }
}

declare const NSPortNameServer: cocoa.NSPortNameServer.CLASS;
