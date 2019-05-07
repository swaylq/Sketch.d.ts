/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileReadingClaim<T0 = void, T1 = void, T2 = void> extends NSFileAccessClaim {
    allURLs<R = unknown>(): R;
    blocksClaim<R = boolean, P0 = unknown>(_blocksClaim: P0): R;
    resolveURLThenMaybeContinueInvokingClaimer<R = void, P0 = CDUnknownBlockType>(_resolveURLThenMaybeContinueInvokingClaimer: P0): R;
    initWithPurposeID_url_options_claimer<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = CDUnknownBlockType>(_initWithPurposeID: P0, _url: P1, _options: P2, _claimer: P3): R;
  }
  namespace NSFileReadingClaim {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFileAccessClaim {
      alloc<R = NSFileReadingClaim>(): R;
      new: <R = NSFileReadingClaim>() => R;
    }
  }
}

declare const NSFileReadingClaim: cocoa.NSFileReadingClaim.CLASS;
