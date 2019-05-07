/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMessagePortNameServer<T0 = void, T1 = void, T2 = void> extends NSPortNameServer {}
  namespace NSMessagePortNameServer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPortNameServer {
      alloc<R = NSMessagePortNameServer>(): R;
      new: <R = NSMessagePortNameServer>() => R;
      sharedInstance<R = unknown>(): R;
    }
  }
}

declare const NSMessagePortNameServer: cocoa.NSMessagePortNameServer.CLASS;
