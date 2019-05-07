/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePresenterRelinquishment<T0 = void, T1 = void, T2 = void> extends NSObject {
    didRelinquish<R = void>(): R;
    addPrerelinquishReply<R = void, P0 = CDUnknownBlockType>(_addPrerelinquishReply: P0): R;
    addRelinquishReply<R = void, P0 = CDUnknownBlockType>(_addRelinquishReply: P0): R;
    removeAllBlockingAccessClaimIDs<R = void>(): R;
    removeBlockingAccessClaimID<R = void, P0 = unknown>(_removeBlockingAccessClaimID: P0): R;
    removeBlockingAccessClaimID_thenContinue<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_removeBlockingAccessClaimID: P0, _thenContinue: P1): R;
    setReacquirer<R = void, P0 = CDUnknownBlockType>(_setReacquirer: P0): R;
    performRelinquishmentToAccessClaimIfNecessary_usingBlock_withReply<R = void, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType>(_performRelinquishmentToAccessClaimIfNecessary: P0, _usingBlock: P1, _withReply: P2): R;
    performRemoteDeletePrerelinquishmentIfNecessaryUsingBlock_withReply<R = void, P0 = CDUnknownBlockType, P1 = CDUnknownBlockType>(_performRemoteDeletePrerelinquishmentIfNecessaryUsingBlock: P0, _withReply: P1): R;
    dealloc<R = void>(): R;
  }
  namespace NSFilePresenterRelinquishment {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFilePresenterRelinquishment>(): R;
      new: <R = NSFilePresenterRelinquishment>() => R;
    }
  }
}

declare const NSFilePresenterRelinquishment: cocoa.NSFilePresenterRelinquishment.CLASS;
