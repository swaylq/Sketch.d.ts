/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudUser<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
    cxx_destruct<R = void>(): R;
    debugDescription<R = unknown>(): R;
    parseDictionary<R = void, P0 = unknown>(_parseDictionary: P0): R;
    verifiedUser<R = unknown>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    initWithDictionary<R = unknown, P0 = unknown>(_initWithDictionary: P0): R;
    webAccessToken<R = NSString>(): R;
    name<R = NSString>(): R;
    isVerified<R = boolean>(): R;
    isAdmin<R = boolean>(): R;
    pendingEmail<R = NSString>(): R;
    email<R = NSString>(): R;
    identifier<R = NSString>(): R;
    dictionary<R = NSDictionary>(): R;
  }
  namespace MSCloudUser {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
      alloc<R = MSCloudUser>(): R;
      new: <R = MSCloudUser>() => R;
      userWithIdentifier_verified<R = unknown, P0 = unknown, P1 = boolean>(_userWithIdentifier: P0, _verified: P1): R;
    }
  }
}

declare const MSCloudUser: cocoa.MSCloudUser.CLASS;
