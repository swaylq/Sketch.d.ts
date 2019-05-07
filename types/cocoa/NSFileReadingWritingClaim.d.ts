/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileReadingWritingClaim<T0 = void, T1 = void, T2 = void> extends NSFileAccessClaim {
    allURLs<R = unknown>(): R;
    blocksClaim<R = boolean, P0 = unknown>(_blocksClaim: P0): R;
    resolveURLsThenMaybeContinueInvokingClaimer<R = void, P0 = CDUnknownBlockType>(_resolveURLsThenMaybeContinueInvokingClaimer: P0): R;
    initWithPurposeID_readingURL_options_writingURL_options_claimer<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = number, P5 = CDUnknownBlockType>(_initWithPurposeID: P0, _readingURL: P1, _options: P2, _writingURL: P3, _options1: P4, _claimer: P5): R;
  }
  namespace NSFileReadingWritingClaim {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFileAccessClaim {
      alloc<R = NSFileReadingWritingClaim>(): R;
      new: <R = NSFileReadingWritingClaim>() => R;
    }
  }
}

declare const NSFileReadingWritingClaim: cocoa.NSFileReadingWritingClaim.CLASS;
