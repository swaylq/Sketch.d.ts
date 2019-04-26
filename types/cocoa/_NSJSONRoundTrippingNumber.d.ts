/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSJSONRoundTrippingNumber<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
    forwardInvocation<R = void, P0 = unknown>(_forwardInvocation: P0): R;
    methodSignatureForSelector<R = unknown, P0 = string>(_methodSignatureForSelector: P0): R;
    isNSNumber__<R = boolean>(): R;
    superclass<R = unknown>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    _allowsDirectEncoding<R = boolean>(): R;
    hash<R = number>(): R;
    isEqualToNumber<R = boolean, P0 = unknown>(_isEqualToNumber: P0): R;
    stringValue<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithNumber_representation<R = unknown, P0 = unknown, P1 = unknown>(_initWithNumber: P0, _representation: P1): R;
  }
  namespace _NSJSONRoundTrippingNumber {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
      alloc<R = _NSJSONRoundTrippingNumber>(): R;
      new: <R = _NSJSONRoundTrippingNumber>() => R;
      instanceMethodSignatureForSelector<R = unknown, P0 = string>(_instanceMethodSignatureForSelector: P0): R;
      instancesRespondToSelector<R = boolean, P0 = string>(_instancesRespondToSelector: P0): R;
      isSubclassOfClass<R = boolean, P0 = unknown>(_isSubclassOfClass: P0): R;
    }
  }
}
