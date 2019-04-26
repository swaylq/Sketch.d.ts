/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScanner<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    isAtEnd<R = boolean>(): R;
    scanUpToString_intoString<R = boolean, P0 = unknown, P1 = unknown>(_scanUpToString: P0, _intoString: P1): R;
    scanString_intoString<R = boolean, P0 = unknown, P1 = unknown>(_scanString: P0, _intoString: P1): R;
    scanUpToCharactersFromSet_intoString<R = boolean, P0 = unknown, P1 = unknown>(_scanUpToCharactersFromSet: P0, _intoString: P1): R;
    scanCharactersFromSet_intoString<R = boolean, P0 = unknown, P1 = unknown>(_scanCharactersFromSet: P0, _intoString: P1): R;
    scanHexInt<R = boolean, P0 = number>(_scanHexInt: P0): R;
    scanHexLongLong<R = boolean, P0 = number>(_scanHexLongLong: P0): R;
    scanUnsignedInteger<R = boolean, P0 = number>(_scanUnsignedInteger: P0): R;
    scanInteger<R = boolean, P0 = number>(_scanInteger: P0): R;
    scanInt<R = boolean, P0 = number>(_scanInt: P0): R;
    scanLongLong<R = boolean, P0 = number>(_scanLongLong: P0): R;
    scanUnsignedLongLong<R = boolean, P0 = number>(_scanUnsignedLongLong: P0): R;
    scanHexFloat<R = boolean, P0 = number>(_scanHexFloat: P0): R;
    scanHexDouble<R = boolean, P0 = number>(_scanHexDouble: P0): R;
    scanFloat<R = boolean, P0 = number>(_scanFloat: P0): R;
    scanDouble<R = boolean, P0 = number>(_scanDouble: P0): R;
    _invertedSkipSet<R = unknown>(): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
    _scanDecimal_into<R = boolean, P0 = number, P1 = number>(__scanDecimal: P0, _into: P1): R;
    _remainingString<R = unknown>(): R;
    scanDecimal<R = boolean, P0 = unknown>(_scanDecimal: P0): R;
    locale<R = unknown>(): R;
    setLocale<R = void, P0 = unknown>(_v: P0): R;
    caseSensitive<R = boolean>(): R;
    setCaseSensitive<R = void, P0 = boolean>(_v: P0): R;
    charactersToBeSkipped<R = NSCharacterSet>(): R;
    setCharactersToBeSkipped<R = void, P0 = NSCharacterSet>(_v: P0): R;
    scanLocation<R = number>(): R;
    setScanLocation<R = void, P0 = number>(_v: P0): R;
    string<R = NSString>(): R;
  }
  namespace NSScanner {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSScanner>(): R;
      new: <R = NSScanner>() => R;
      localizedScannerWithString<R = unknown, P0 = unknown>(_localizedScannerWithString: P0): R;
      scannerWithString<R = unknown, P0 = unknown>(_scannerWithString: P0): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSScanner: cocoa.NSScanner.CLASS;
