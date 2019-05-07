/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLookupMatch<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithType_range_score<R = unknown, P0 = number, P1 = _NSRange, P2 = number>(_initWithType: P0, _range: P1, _score: P2): R;
    languageIdentifier<R = NSString>(): R;
    setLanguageIdentifier<R = void, P0 = NSString>(_v: P0): R;
    dataDetectorResult<R = NSTextCheckingResult>(): R;
    setDataDetectorResult<R = void, P0 = NSTextCheckingResult>(_v: P0): R;
    score<R = number>(): R;
    range<R = _NSRange>(): R;
    matchType<R = number>(): R;
  }
  namespace NSLookupMatch {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSLookupMatch>(): R;
      new: <R = NSLookupMatch>() => R;
      matchesInString_types_range<R = unknown, P0 = unknown, P1 = number, P2 = _NSRange>(_matchesInString: P0, _types: P1, _range: P2): R;
    }
  }
}

declare const NSLookupMatch: cocoa.NSLookupMatch.CLASS;
