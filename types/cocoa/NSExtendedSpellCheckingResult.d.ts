/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtendedSpellCheckingResult<T0 = void, T1 = void, T2 = void> extends NSSpellCheckingResult {
    isSentenceCorrectionResult<R = boolean>(): R;
    detail<R = unknown>(): R;
    sentenceRange<R = _NSRange>(): R;
    dealloc<R = void>(): R;
    initWithRange_sentenceRange_detail<R = unknown, P0 = _NSRange, P1 = _NSRange, P2 = unknown>(_initWithRange: P0, _sentenceRange: P1, _detail: P2): R;
  }
  namespace NSExtendedSpellCheckingResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSpellCheckingResult {
      alloc<R = NSExtendedSpellCheckingResult>(): R;
      new: <R = NSExtendedSpellCheckingResult>() => R;
    }
  }
}

declare const NSExtendedSpellCheckingResult: cocoa.NSExtendedSpellCheckingResult.CLASS;
