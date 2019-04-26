/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGrammarCheckingResult<T0 = void, T1 = void, T2 = void> extends NSTextCheckingResult {
    range<R = _NSRange>(): R;
    resultType<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRange_details<R = unknown, P0 = _NSRange, P1 = unknown>(_initWithRange: P0, _details: P1): R;
  }
  namespace NSGrammarCheckingResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextCheckingResult {
      alloc<R = NSGrammarCheckingResult>(): R;
      new: <R = NSGrammarCheckingResult>() => R;
    }
  }
}

declare const NSGrammarCheckingResult: cocoa.NSGrammarCheckingResult.CLASS;
