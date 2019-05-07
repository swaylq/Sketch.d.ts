/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKAdvertisement<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    initWithDictionary<R = unknown, P0 = unknown>(_initWithDictionary: P0): R;
    modelName<R = NSString>(): R;
    setModelName<R = void, P0 = NSString>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    identifier<R = NSUUID>(): R;
    setIdentifier<R = void, P0 = NSUUID>(_v: P0): R;
    dictionaryRepresentation<R = NSDictionary>(): R;
  }
  namespace SMKAdvertisement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = SMKAdvertisement>(): R;
      new: <R = SMKAdvertisement>() => R;
    }
  }
}

declare const SMKAdvertisement: cocoa.SMKAdvertisement.CLASS;
