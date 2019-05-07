/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePresenterXPCInterfaceProtocol<T0 = void, T1 = void, T2 = void> extends NSFileCoordinationDebugInfoXPCIntefaceProtocol {
    logSuspensionWarning<R = void>(): R;
    setProviderPurposeIdentifier<R = void, P0 = NSString>(_setProviderPurposeIdentifier: P0): R;
    updateLastEventID<R = void, P0 = number>(_updateLastEventID: P0): R;
    observePresenterChange_forSubitemAtURL<R = void, P0 = boolean, P1 = NSURLPromisePair>(_observePresenterChange: P0, _forSubitemAtURL: P1): R;
    observeVersionChangeOfKind_toItemAtURL_withClientID_name<R = void, P0 = NSString, P1 = NSURLPromisePair, P2 = NSString, P3 = NSString>(_observeVersionChangeOfKind: P0, _toItemAtURL: P1, _withClientID: P2, _name: P3): R;
    observeChangeOfUbiquityAttributes<R = void, P0 = NSSet>(_observeChangeOfUbiquityAttributes: P0): R;
    observeSharingChangeWithSubitemURL<R = void, P0 = NSURLPromisePair>(_observeSharingChangeWithSubitemURL: P0): R;
    observeUbiquityChangeWithSubitemURL<R = void, P0 = NSURLPromisePair>(_observeUbiquityChangeWithSubitemURL: P0): R;
    observeReconnection<R = void>(): R;
    observeDisconnection<R = void>(): R;
    observeMoveToURL_withSubitemURL_byWriterWithPurposeID<R = void, P0 = NSURLPromisePair, P1 = NSURLPromisePair, P2 = unknown>(_observeMoveToURL: P0, _withSubitemURL: P1, _byWriterWithPurposeID: P2): R;
    observeChangeWithSubitemURL<R = void, P0 = NSURLPromisePair>(_observeChangeWithSubitemURL: P0): R;
    accommodateDeletionOfSubitemAtURL_completionHandler<R = void, P0 = NSURLPromisePair, P1 = CDUnknownBlockType>(_accommodateDeletionOfSubitemAtURL: P0, _completionHandler: P1): R;
    saveChangesWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_saveChangesWithCompletionHandler: P0): R;
    reacquireFromWritingClaimForID_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_reacquireFromWritingClaimForID: P0, _completionHandler: P1): R;
    relinquishToWritingClaimWithID_options_purposeID_subitemURL_completionHandler<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = NSURLPromisePair, P4 = CDUnknownBlockType>(_relinquishToWritingClaimWithID: P0, _options: P1, _purposeID: P2, _subitemURL: P3, _completionHandler: P4): R;
    reacquireFromReadingClaimForID<R = void, P0 = unknown>(_reacquireFromReadingClaimForID: P0): R;
    relinquishToReadingClaimWithID_options_purposeID_completionHandler<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = CDUnknownBlockType>(_relinquishToReadingClaimWithID: P0, _options: P1, _purposeID: P2, _completionHandler: P3): R;
  }
  namespace NSFilePresenterXPCInterfaceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFileCoordinationDebugInfoXPCIntefaceProtocol {}
  }
}
