/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileSubarbitrationClaim<T0 = void, T1 = void, T2 = void> extends NSFileAccessClaim {
    forwardReacquisitionForWritingClaim_withID_toPresenterForID_usingReplySender<R = void, P0 = boolean, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_forwardReacquisitionForWritingClaim: P0, _withID: P1, _toPresenterForID: P2, _usingReplySender: P3): R;
    forwardRelinquishmentForWritingClaim_withID_options_purposeID_subitemURL_toPresenter_usingReplySender<R = void, P0 = boolean, P1 = unknown, P2 = number, P3 = unknown, P4 = unknown, P5 = unknown, P6 = CDUnknownBlockType>(_forwardRelinquishmentForWritingClaim: P0, _withID: P1, _options: P2, _purposeID: P3, _subitemURL: P4, _toPresenter: P5, _usingReplySender: P6): R;
    relinquishmentForWrite_toPresenterForID<R = unknown, P0 = boolean, P1 = unknown>(_relinquishmentForWrite: P0, _toPresenterForID: P1): R;
    forwardUsingConnection_withServer_crashHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_forwardUsingConnection: P0, _withServer: P1, _crashHandler: P2): R;
    initWithReadingURLs_options_writingURLs_options_claimer<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = number, P4 = CDUnknownBlockType>(_initWithReadingURLs: P0, _options: P1, _writingURLs: P2, _options1: P3, _claimer: P4): R;
    nullified<R = boolean>(): R;
    subarbiterConnection<R = NSXPCConnection>(): R;
    setSubarbiterConnection<R = void, P0 = NSXPCConnection>(_v: P0): R;
  }
  namespace NSFileSubarbitrationClaim {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFileAccessClaim {
      alloc<R = NSFileSubarbitrationClaim>(): R;
      new: <R = NSFileSubarbitrationClaim>() => R;
    }
  }
}

declare const NSFileSubarbitrationClaim: cocoa.NSFileSubarbitrationClaim.CLASS;
