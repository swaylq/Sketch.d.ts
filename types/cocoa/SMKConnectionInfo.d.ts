/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKConnectionInfo<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    compareConnectionInfo<R = number, P0 = unknown>(_compareConnectionInfo: P0): R;
    hash<R = number>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    advertisement<R = NSDictionary>(): R;
    setAdvertisement<R = void, P0 = NSDictionary>(_v: P0): R;
    type<R = number>(): R;
    setType<R = void, P0 = number>(_v: P0): R;
    status<R = number>(): R;
    setStatus<R = void, P0 = number>(_v: P0): R;
    UUID<R = NSUUID>(): R;
    setUUID<R = void, P0 = NSUUID>(_v: P0): R;
    hidden<R = boolean>(): R;
  }
  namespace SMKConnectionInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
      alloc<R = SMKConnectionInfo>(): R;
      new: <R = SMKConnectionInfo>() => R;
    }
  }
}

declare const SMKConnectionInfo: cocoa.SMKConnectionInfo.CLASS;
