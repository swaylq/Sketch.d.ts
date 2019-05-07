/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileWritingClaim<T0 = void, T1 = void, T2 = void> extends NSFileAccessClaim {
    allURLs<R = unknown>(): R;
    blocksClaim<R = boolean, P0 = unknown>(_blocksClaim: P0): R;
    resolveURLsThenContinueInvokingClaimer<R = void, P0 = CDUnknownBlockType>(_resolveURLsThenContinueInvokingClaimer: P0): R;
    initWithPurposeID_url_options_claimer<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = CDUnknownBlockType>(_initWithPurposeID: P0, _url: P1, _options: P2, _claimer: P3): R;
  }
  namespace NSFileWritingClaim {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFileAccessClaim {
      alloc<R = NSFileWritingClaim>(): R;
      new: <R = NSFileWritingClaim>() => R;
    }
  }
}

declare const NSFileWritingClaim: cocoa.NSFileWritingClaim.CLASS;
