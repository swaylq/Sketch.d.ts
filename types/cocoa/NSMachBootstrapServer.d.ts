/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMachBootstrapServer<T0 = void, T1 = void, T2 = void> extends NSPortNameServer {
    servicePortWithName<R = unknown, P0 = unknown>(_servicePortWithName: P0): R;
    portForName_options<R = unknown, P0 = unknown, P1 = number>(_portForName: P0, _options: P1): R;
  }
  namespace NSMachBootstrapServer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPortNameServer {
      alloc<R = NSMachBootstrapServer>(): R;
      new: <R = NSMachBootstrapServer>() => R;
      sharedInstance<R = unknown>(): R;
    }
  }
}

declare const NSMachBootstrapServer: cocoa.NSMachBootstrapServer.CLASS;
