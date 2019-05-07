/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSLocalizedString<T0 = void, T1 = void, T2 = void> extends NSMutableString, NSSecureCodingProtocol {
    dealloc<R = void>(): R;
    length<R = number>(): R;
    baseString<R = unknown>(): R;
    initWithString_withFormatConfiguration<R = unknown, P0 = unknown, P1 = unknown>(_initWithString: P0, _withFormatConfiguration: P1): R;
  }
  namespace __NSLocalizedString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableString, NSSecureCodingProtocol {
      alloc<R = __NSLocalizedString>(): R;
      new: <R = __NSLocalizedString>() => R;
    }
  }
}
