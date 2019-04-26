/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileMultipleAccessClaim<T0 = void, T1 = void, T2 = void> extends NSFileAccessClaim {
    allURLs<R = unknown>(): R;
    blocksClaim<R = boolean, P0 = unknown>(_blocksClaim: P0): R;
    resolveURLsThenMaybeContinueInvokingClaimer<R = void, P0 = CDUnknownBlockType>(_resolveURLsThenMaybeContinueInvokingClaimer: P0): R;
    initWithPurposeID_intents_claimer<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_initWithPurposeID: P0, _intents: P1, _claimer: P2): R;
  }
  namespace NSFileMultipleAccessClaim {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFileAccessClaim {
      alloc<R = NSFileMultipleAccessClaim>(): R;
      new: <R = NSFileMultipleAccessClaim>() => R;
    }
  }
}

declare const NSFileMultipleAccessClaim: cocoa.NSFileMultipleAccessClaim.CLASS;
