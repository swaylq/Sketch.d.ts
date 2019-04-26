/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCharacterSet<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSMutableCopyingProtocol, NSSecureCodingProtocol {
    _retainedBitmapRepresentation<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    hasMemberInPlane<R = boolean, P0 = number>(_hasMemberInPlane: P0): R;
    isSupersetOfSet<R = boolean, P0 = unknown>(_isSupersetOfSet: P0): R;
    longCharacterIsMember<R = boolean, P0 = number>(_longCharacterIsMember: P0): R;
    characterIsMember<R = boolean, P0 = number>(_characterIsMember: P0): R;
    makeImmutable<R = void>(): R;
    isMutable<R = boolean>(): R;
    count<R = number>(): R;
    isEmpty<R = boolean>(): R;
    hash<R = number>(): R;
    _expandedCFCharacterSet<R = __CFCharacterSet>(): R;
    _cfTypeID<R = number>(): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    bitmapRepresentation<R = NSData>(): R;
    invertedSet<R = NSCharacterSet>(): R;
  }
  namespace NSCharacterSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSMutableCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSCharacterSet>(): R;
      new: <R = NSCharacterSet>() => R;
      characterSetWithBitmapRepresentation<R = unknown, P0 = unknown>(_characterSetWithBitmapRepresentation: P0): R;
      characterSetWithCharactersInString<R = unknown, P0 = unknown>(_characterSetWithCharactersInString: P0): R;
      characterSetWithRange<R = unknown, P0 = _NSRange>(_characterSetWithRange: P0): R;
      characterSetWithContentsOfFile<R = unknown, P0 = unknown>(_characterSetWithContentsOfFile: P0): R;
      newlineCharacterSet<R = unknown>(): R;
      symbolCharacterSet<R = unknown>(): R;
      illegalCharacterSet<R = unknown>(): R;
      capitalizedLetterCharacterSet<R = unknown>(): R;
      punctuationCharacterSet<R = unknown>(): R;
      decomposableCharacterSet<R = unknown>(): R;
      nonBaseCharacterSet<R = unknown>(): R;
      alphanumericCharacterSet<R = unknown>(): R;
      uppercaseLetterCharacterSet<R = unknown>(): R;
      lowercaseLetterCharacterSet<R = unknown>(): R;
      letterCharacterSet<R = unknown>(): R;
      decimalDigitCharacterSet<R = unknown>(): R;
      whitespaceAndNewlineCharacterSet<R = unknown>(): R;
      whitespaceCharacterSet<R = unknown>(): R;
      controlCharacterSet<R = unknown>(): R;
      initialize<R = void>(): R;
      URLFragmentAllowedCharacterSet<R = unknown>(): R;
      URLQueryAllowedCharacterSet<R = unknown>(): R;
      URLPathAllowedCharacterSet<R = unknown>(): R;
      URLHostAllowedCharacterSet<R = unknown>(): R;
      URLPasswordAllowedCharacterSet<R = unknown>(): R;
      URLUserAllowedCharacterSet<R = unknown>(): R;
    }
  }
}

declare const NSCharacterSet: cocoa.NSCharacterSet.CLASS;
