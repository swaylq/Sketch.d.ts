/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLinkCheckingResult<T0 = void, T1 = void, T2 = void> extends NSTextCheckingResult {
    range<R = _NSRange>(): R;
    resultType<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRange_URL<R = unknown, P0 = _NSRange, P1 = unknown>(_initWithRange: P0, _URL: P1): R;
  }
  namespace NSLinkCheckingResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextCheckingResult {
      alloc<R = NSLinkCheckingResult>(): R;
      new: <R = NSLinkCheckingResult>() => R;
    }
  }
}

declare const NSLinkCheckingResult: cocoa.NSLinkCheckingResult.CLASS;
