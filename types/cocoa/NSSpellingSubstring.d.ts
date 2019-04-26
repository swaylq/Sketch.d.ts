/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpellingSubstring<T0 = void, T1 = void, T2 = void> extends NSString {
    length<R = number>(): R;
    dealloc<R = void>(): R;
    initWithOriginalString_startingOffset<R = unknown, P0 = unknown, P1 = number>(_initWithOriginalString: P0, _startingOffset: P1): R;
  }
  namespace NSSpellingSubstring {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSString {
      alloc<R = NSSpellingSubstring>(): R;
      new: <R = NSSpellingSubstring>() => R;
    }
  }
}

declare const NSSpellingSubstring: cocoa.NSSpellingSubstring.CLASS;
