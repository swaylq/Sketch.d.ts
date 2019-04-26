/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPhoneNumberCheckingResult<T0 = void, T1 = void, T2 = void> extends NSTextCheckingResult {
    range<R = _NSRange>(): R;
    resultType<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRange_phoneNumber<R = unknown, P0 = _NSRange, P1 = unknown>(_initWithRange: P0, _phoneNumber: P1): R;
    initWithRange_phoneNumber_underlyingResult<R = unknown, P0 = _NSRange, P1 = unknown, P2 = void>(_initWithRange: P0, _phoneNumber: P1, _underlyingResult: P2): R;
    underlyingResult<R = void>(): R;
  }
  namespace NSPhoneNumberCheckingResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextCheckingResult {
      alloc<R = NSPhoneNumberCheckingResult>(): R;
      new: <R = NSPhoneNumberCheckingResult>() => R;
    }
  }
}

declare const NSPhoneNumberCheckingResult: cocoa.NSPhoneNumberCheckingResult.CLASS;
