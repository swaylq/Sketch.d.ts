/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKMirrorClient<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    type<R = number>(): R;
    setType<R = void, P0 = number>(_v: P0): R;
    status<R = number>(): R;
    setStatus<R = void, P0 = number>(_v: P0): R;
    advertisement<R = SMKAdvertisement>(): R;
    setAdvertisement<R = void, P0 = SMKAdvertisement>(_v: P0): R;
    connectionID<R = NSUUID>(): R;
    setConnectionID<R = void, P0 = NSUUID>(_v: P0): R;
  }
  namespace SMKMirrorClient {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = SMKMirrorClient>(): R;
      new: <R = SMKMirrorClient>() => R;
      clientWithConnectionInfo<R = unknown, P0 = unknown>(_clientWithConnectionInfo: P0): R;
    }
  }
}

declare const SMKMirrorClient: cocoa.SMKMirrorClient.CLASS;
