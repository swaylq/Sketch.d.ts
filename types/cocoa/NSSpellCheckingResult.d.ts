/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpellCheckingResult<T0 = void, T1 = void, T2 = void> extends NSTextCheckingResult {
    range<R = _NSRange>(): R;
    resultType<R = number>(): R;
    initWithRange<R = unknown, P0 = _NSRange>(_initWithRange: P0): R;
  }
  namespace NSSpellCheckingResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextCheckingResult {
      alloc<R = NSSpellCheckingResult>(): R;
      new: <R = NSSpellCheckingResult>() => R;
    }
  }
}

declare const NSSpellCheckingResult: cocoa.NSSpellCheckingResult.CLASS;
