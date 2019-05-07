/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSmartQuoteOptions<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    description<R = unknown>(): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    initWithLeftSingleQuote_rightSingleQuote_apostrophe_leftDoubleQuote_rightDoubleQuote<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(_initWithLeftSingleQuote: P0, _rightSingleQuote: P1, _apostrophe: P2, _leftDoubleQuote: P3, _rightDoubleQuote: P4): R;
    rightDoubleQuote<R = NSString>(): R;
    leftDoubleQuote<R = NSString>(): R;
    apostrophe<R = NSString>(): R;
    rightSingleQuote<R = NSString>(): R;
    leftSingleQuote<R = NSString>(): R;
  }
  namespace NSSmartQuoteOptions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSSmartQuoteOptions>(): R;
      new: <R = NSSmartQuoteOptions>() => R;
      smartQuoteOptionsForLocale<R = unknown, P0 = unknown>(_smartQuoteOptionsForLocale: P0): R;
    }
  }
}

declare const NSSmartQuoteOptions: cocoa.NSSmartQuoteOptions.CLASS;
