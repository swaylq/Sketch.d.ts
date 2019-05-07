/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileAccessArbiterProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    tiePresenterForID_toItemAtURL<R = void, P0 = unknown, P1 = NSURLPromisePair>(_tiePresenterForID: P0, _toItemAtURL: P1): R;
    writerWithPurposeID_didVersionChangeOfKind_toItemAtURL_withClientID_name<R = void, P0 = unknown, P1 = NSString, P2 = NSURLPromisePair, P3 = NSString, P4 = NSString>(_writerWithPurposeID: P0, _didVersionChangeOfKind: P1, _toItemAtURL: P2, _withClientID: P3, _name: P4): R;
    writerWithPurposeID_didChangeItemAtURL<R = void, P0 = unknown, P1 = NSURLPromisePair>(_writerWithPurposeID: P0, _didChangeItemAtURL: P1): R;
    writerWithPurposeID_didMakeItemDisappearAtURL<R = void, P0 = unknown, P1 = NSURLPromisePair>(_writerWithPurposeID: P0, _didMakeItemDisappearAtURL: P1): R;
    writerWithPurposeID_didChangeUbiquityAttributes_ofItemAtURL<R = void, P0 = unknown, P1 = NSSet, P2 = NSURLPromisePair>(_writerWithPurposeID: P0, _didChangeUbiquityAttributes: P1, _ofItemAtURL: P2): R;
    writerWithPurposeID_didChangeSharingOfItemAtURL<R = void, P0 = unknown, P1 = NSURLPromisePair>(_writerWithPurposeID: P0, _didChangeSharingOfItemAtURL: P1): R;
    writerWithPurposeID_didChangeUbiquityOfItemAtURL<R = void, P0 = unknown, P1 = NSURLPromisePair>(_writerWithPurposeID: P0, _didChangeUbiquityOfItemAtURL: P1): R;
    writerWithPurposeID_didReconnectItemAtURL<R = void, P0 = unknown, P1 = NSURLPromisePair>(_writerWithPurposeID: P0, _didReconnectItemAtURL: P1): R;
    writerWithPurposeID_didDisconnectItemAtURL<R = void, P0 = unknown, P1 = NSURLPromisePair>(_writerWithPurposeID: P0, _didDisconnectItemAtURL: P1): R;
    writerWithPurposeID_didMoveItemAtURL_toURL<R = void, P0 = unknown, P1 = NSURLPromisePair, P2 = NSURLPromisePair>(_writerWithPurposeID: P0, _didMoveItemAtURL: P1, _toURL: P2): R;
    cancelAccessClaimForID<R = void, P0 = unknown>(_cancelAccessClaimForID: P0): R;
    revokeSubarbitrationClaimForID<R = void, P0 = unknown>(_revokeSubarbitrationClaimForID: P0): R;
    revokeAccessClaimForID<R = void, P0 = unknown>(_revokeAccessClaimForID: P0): R;
  }
  namespace NSFileAccessArbiterProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
