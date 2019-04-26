/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSecureStringWrapper<T0 = void, T1 = void, T2 = void> extends NSString {
    length<R = number>(): R;
    dealloc<R = void>(): R;
    initWithBulletCharacter_length<R = unknown, P0 = number, P1 = number>(_initWithBulletCharacter: P0, _length: P1): R;
    initWithOriginalString<R = unknown, P0 = __CFString>(_initWithOriginalString: P0): R;
  }
  namespace NSSecureStringWrapper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSString {
      alloc<R = NSSecureStringWrapper>(): R;
      new: <R = NSSecureStringWrapper>() => R;
    }
  }
}

declare const NSSecureStringWrapper: cocoa.NSSecureStringWrapper.CLASS;
