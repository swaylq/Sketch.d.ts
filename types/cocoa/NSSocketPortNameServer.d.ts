/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSocketPortNameServer<T0 = void, T1 = void, T2 = void> extends NSPortNameServer {
    netServiceDidStop<R = void, P0 = unknown>(_netServiceDidStop: P0): R;
    netService_didNotResolve<R = void, P0 = unknown, P1 = unknown>(_netService: P0, _didNotResolve: P1): R;
    netServiceWillResolve<R = void, P0 = unknown>(_netServiceWillResolve: P0): R;
    netService_didNotPublish<R = void, P0 = unknown, P1 = unknown>(_netService: P0, _didNotPublish: P1): R;
    netServiceWillPublish<R = void, P0 = unknown>(_netServiceWillPublish: P0): R;
    registerPort_name_nameServerPortNumber<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(_registerPort: P0, _name: P1, _nameServerPortNumber: P2): R;
    portForName_host_nameServerPortNumber<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_portForName: P0, _host: P1, _nameServerPortNumber: P2): R;
    defaultNameServerPortNumber<R = number>(): R;
    setDefaultNameServerPortNumber<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSSocketPortNameServer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPortNameServer {
      alloc<R = NSSocketPortNameServer>(): R;
      new: <R = NSSocketPortNameServer>() => R;
      sharedInstance<R = unknown>(): R;
    }
  }
}

declare const NSSocketPortNameServer: cocoa.NSSocketPortNameServer.CLASS;
