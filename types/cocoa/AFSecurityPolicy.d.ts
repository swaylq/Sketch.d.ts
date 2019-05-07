/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFSecurityPolicy<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    evaluateServerTrust_forDomain<R = boolean, P0 = __SecTrust, P1 = unknown>(_evaluateServerTrust: P0, _forDomain: P1): R;
    evaluateServerTrust<R = boolean, P0 = __SecTrust>(_evaluateServerTrust: P0): R;
    pinnedPublicKeys<R = NSArray>(): R;
    setPinnedPublicKeys<R = void, P0 = NSArray>(_v: P0): R;
    validatesDomainName<R = boolean>(): R;
    setValidatesDomainName<R = void, P0 = boolean>(_v: P0): R;
    allowInvalidCertificates<R = boolean>(): R;
    setAllowInvalidCertificates<R = void, P0 = boolean>(_v: P0): R;
    pinnedCertificates<R = NSArray>(): R;
    setPinnedCertificates<R = void, P0 = NSArray>(_v: P0): R;
    SSLPinningMode<R = number>(): R;
    setSSLPinningMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace AFSecurityPolicy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
      alloc<R = AFSecurityPolicy>(): R;
      new: <R = AFSecurityPolicy>() => R;
      keyPathsForValuesAffectingPinnedPublicKeys<R = unknown>(): R;
      policyWithPinningMode<R = unknown, P0 = number>(_policyWithPinningMode: P0): R;
      defaultPolicy<R = unknown>(): R;
      defaultPinnedCertificates<R = unknown>(): R;
    }
  }
}

declare const AFSecurityPolicy: cocoa.AFSecurityPolicy.CLASS;
