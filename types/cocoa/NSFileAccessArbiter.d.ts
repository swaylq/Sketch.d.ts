/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileAccessArbiter<T0 = void, T1 = void, T2 = void> extends NSObject, NSXPCListenerDelegateProtocol, NSFileAccessArbiterXPCInterfaceProtocol, NSFileAccessArbiterProtocol {
    _registerForDebugInfoRequests<R = void>(): R;
    getDebugInformationIncludingEverything_withString_fromPid_thenContinue<R = void, P0 = boolean, P1 = unknown, P2 = number, P3 = CDUnknownBlockType>(_getDebugInformationIncludingEverything: P0, _withString: P1, _fromPid: P2, _thenContinue: P3): R;
    _handleCanceledClient<R = void, P0 = unknown>(__handleCanceledClient: P0): R;
    _enumerateSubarbitersUsingBlock<R = void, P0 = CDUnknownBlockType>(__enumerateSubarbitersUsingBlock: P0): R;
    rootNode<R = unknown>(): R;
    stopArbitrating<R = void>(): R;
    _startArbitratingItemsAtURLs_withSuperarbitrationServer<R = void, P0 = unknown, P1 = unknown>(__startArbitratingItemsAtURLs: P0, _withSuperarbitrationServer: P1): R;
    _removeReactorForID<R = void, P0 = unknown>(__removeReactorForID: P0): R;
    _willRemoveReactor<R = void, P0 = unknown>(__willRemoveReactor: P0): R;
    _addProvider_ofItemsAtURL<R = boolean, P0 = unknown, P1 = unknown>(__addProvider: P0, _ofItemsAtURL: P1): R;
    _addPresenter_ofItemAtURL_watchingFile_withLastEventID<R = boolean, P0 = unknown, P1 = unknown, P2 = boolean, P3 = unknown>(__addPresenter: P0, _ofItemAtURL: P1, _watchingFile: P2, _withLastEventID: P3): R;
    _writerWithPurposeID_didMoveItemAtURL_toURL<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__writerWithPurposeID: P0, _didMoveItemAtURL: P1, _toURL: P2): R;
    _grantSubarbitrationClaim_withServer<R = void, P0 = unknown, P1 = unknown>(__grantSubarbitrationClaim: P0, _withServer: P1): R;
    _revokeAccessClaimForID_fromLocal<R = void, P0 = unknown, P1 = boolean>(__revokeAccessClaimForID: P0, _fromLocal: P1): R;
    _grantAccessClaim<R = void, P0 = unknown>(__grantAccessClaim: P0): R;
    dealloc<R = void>(): R;
    initWithQueue_isSubarbiter_listener<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown>(_initWithQueue: P0, _isSubarbiter: P1, _listener: P2): R;
    superarbitrationConnection<R = NSXPCConnection>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSFileAccessArbiter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSXPCListenerDelegateProtocol, NSFileAccessArbiterXPCInterfaceProtocol, NSFileAccessArbiterProtocol {
      alloc<R = NSFileAccessArbiter>(): R;
      new: <R = NSFileAccessArbiter>() => R;
      _lostBirdProvider<R = void, P0 = unknown>(__lostBirdProvider: P0): R;
      _gainedBirdProvider<R = void, P0 = unknown>(__gainedBirdProvider: P0): R;
      ensureProvidersIfNecessaryForClaim_atLocation_queue_thenContinue<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_ensureProvidersIfNecessaryForClaim: P0, _atLocation: P1, _queue: P2, _thenContinue: P3): R;
      _wakeUpBirdWithUID_urls_queue_thenContinue<R = void, P0 = number, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(__wakeUpBirdWithUID: P0, _urls: P1, _queue: P2, _thenContinue: P3): R;
    }
  }
}

declare const NSFileAccessArbiter: cocoa.NSFileAccessArbiter.CLASS;
