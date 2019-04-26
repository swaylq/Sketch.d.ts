/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileAccessClaim<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
    shouldCancelInsteadOfWaiting<R = boolean>(): R;
    disavowed<R = void>(): R;
    finished<R = void>(): R;
    shouldBeRevokedPriorToInvokingAccessor<R = boolean>(): R;
    purposeIDOfClaimOnItemAtLocation_forMessagingPresenter<R = unknown, P0 = unknown, P1 = unknown>(_purposeIDOfClaimOnItemAtLocation: P0, _forMessagingPresenter: P1): R;
    checkIfSymbolicLinkAtURL_withResolutionCount_andIfSoThenReevaluateSelf<R = boolean, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_checkIfSymbolicLinkAtURL: P0, _withResolutionCount: P1, _andIfSoThenReevaluateSelf: P2): R;
    description<R = unknown>(): R;
    descriptionWithIndenting<R = unknown, P0 = unknown>(_descriptionWithIndenting: P0): R;
    itemAtLocation_wasReplacedByItemAtLocation<R = void, P0 = unknown, P1 = unknown>(_itemAtLocation: P0, _wasReplacedByItemAtLocation: P1): R;
    isRevoked<R = boolean>(): R;
    isGranted<R = boolean>(): R;
    devalueOldClaim<R = void, P0 = unknown>(_devalueOldClaim: P0): R;
    cancelled<R = void>(): R;
    devalueSelf<R = void>(): R;
    revoked<R = void>(): R;
    invokeClaimer<R = void>(): R;
    prepareItemForUploadingFromURL_thenContinue<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_prepareItemForUploadingFromURL: P0, _thenContinue: P1): R;
    _writeArchiveOfDirectoryAtURL_toURL_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(__writeArchiveOfDirectoryAtURL: P0, _toURL: P1, _error: P2): R;
    canAccessLocations_forReading_error<R = boolean, P0 = unknown, P1 = boolean, P2 = unknown>(_canAccessLocations: P0, _forReading: P1, _error: P2): R;
    makePresentersOfItemAtLocation_orContainedItem_relinquishUsingProcedureGetter<R = void, P0 = unknown, P1 = boolean, P2 = CDUnknownBlockType>(_makePresentersOfItemAtLocation: P0, _orContainedItem: P1, _relinquishUsingProcedureGetter: P2): R;
    makeProviderOfItemAtLocation_provideOrAttachPhysicalURLIfNecessaryForPurposeID_writingOptions_thenContinue<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = CDUnknownBlockType>(_makeProviderOfItemAtLocation: P0, _provideOrAttachPhysicalURLIfNecessaryForPurposeID: P1, _writingOptions: P2, _thenContinue: P3): R;
    makeProviderOfItemAtLocation_provideOrAttachPhysicalURLIfNecessaryForPurposeID_readingOptions_thenContinue<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = CDUnknownBlockType>(_makeProviderOfItemAtLocation: P0, _provideOrAttachPhysicalURLIfNecessaryForPurposeID: P1, _readingOptions: P2, _thenContinue: P3): R;
    makeProviderOfItemAtLocation_providePhysicalURLThenContinue<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_makeProviderOfItemAtLocation: P0, _providePhysicalURLThenContinue: P1): R;
    makeProviderOfItemAtLocation_provideIfNecessaryWithOptions_thenContinue<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_makeProviderOfItemAtLocation: P0, _provideIfNecessaryWithOptions: P1, _thenContinue: P2): R;
    ensureProvidersOfItemsAtReadingLocations_writingLocations_thenContinue<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_ensureProvidersOfItemsAtReadingLocations: P0, _writingLocations: P1, _thenContinue: P2): R;
    granted<R = void>(): R;
    isBlockedByWritingItemAtLocation_options<R = boolean, P0 = unknown, P1 = number>(_isBlockedByWritingItemAtLocation: P0, _options: P1): R;
    isBlockedByReadingItemAtLocation_options<R = boolean, P0 = unknown, P1 = number>(_isBlockedByReadingItemAtLocation: P0, _options: P1): R;
    removePendingClaims<R = void, P0 = unknown>(_removePendingClaims: P0): R;
    pendingClaims<R = unknown>(): R;
    addPendingClaim<R = void, P0 = unknown>(_addPendingClaim: P0): R;
    evaluateNewClaim<R = void, P0 = unknown>(_evaluateNewClaim: P0): R;
    scheduleBlockedClaim<R = void, P0 = unknown>(_scheduleBlockedClaim: P0): R;
    givePriorityToClaim<R = void, P0 = unknown>(_givePriorityToClaim: P0): R;
    isBlockedByClaimWithPurposeID<R = boolean, P0 = unknown>(_isBlockedByClaimWithPurposeID: P0): R;
    claimerInvokingIsBlockedByReactorWithID<R = boolean, P0 = unknown>(_claimerInvokingIsBlockedByReactorWithID: P0): R;
    whenFinishedPerformProcedure<R = void, P0 = CDUnknownBlockType>(_whenFinishedPerformProcedure: P0): R;
    whenDevaluedPerformProcedure<R = void, P0 = CDUnknownBlockType>(_whenDevaluedPerformProcedure: P0): R;
    whenRevokedPerformProcedure<R = void, P0 = CDUnknownBlockType>(_whenRevokedPerformProcedure: P0): R;
    evaluateSelfWithRootNode_checkSubarbitrability<R = boolean, P0 = unknown, P1 = boolean>(_evaluateSelfWithRootNode: P0, _checkSubarbitrability: P1): R;
    claimerError<R = unknown>(): R;
    setClaimerError<R = void, P0 = unknown>(_setClaimerError: P0): R;
    unblockClaimerForReason<R = void, P0 = unknown>(_unblockClaimerForReason: P0): R;
    blockClaimerForReason<R = void, P0 = unknown>(_blockClaimerForReason: P0): R;
    didWait<R = boolean>(): R;
    unblock<R = void>(): R;
    block<R = void>(): R;
    startObservingClientState<R = void>(): R;
    cameFromSuperarbiter<R = boolean>(): R;
    setCameFromSuperarbiter<R = void>(): R;
    acceptClaimFromClient_arbiterQueue_grantHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_acceptClaimFromClient: P0, _arbiterQueue: P1, _grantHandler: P2): R;
    prepareClaimForGrantingWithArbiterQueue<R = void, P0 = unknown>(_prepareClaimForGrantingWithArbiterQueue: P0): R;
    forwardUsingConnection_crashHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_forwardUsingConnection: P0, _crashHandler: P1): R;
    clientProcessIdentifier<R = number>(): R;
    purposeID<R = unknown>(): R;
    claimID<R = unknown>(): R;
    client<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    dealloc<R = void>(): R;
    initWithClient_claimID_purposeID<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithClient: P0, _claimID: P1, _purposeID: P2): R;
    _setupWithClaimID_purposeID_originatingReactorQueueID<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__setupWithClaimID: P0, _purposeID: P1, _originatingReactorQueueID: P2): R;
    shouldInformProvidersAboutEndOfWriteWithOptions<R = boolean, P0 = number>(_shouldInformProvidersAboutEndOfWriteWithOptions: P0): R;
    shouldReadingWithOptions_causePresenterToRelinquish<R = boolean, P0 = number, P1 = unknown>(_shouldReadingWithOptions: P0, _causePresenterToRelinquish: P1): R;
    claimerWaiter<R = OS_dispatch_semaphore>(): R;
    allURLs<R = NSArray>(): R;
  }
  namespace NSFileAccessClaim {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
      alloc<R = NSFileAccessClaim>(): R;
      new: <R = NSFileAccessClaim>() => R;
      canWritingItemAtLocation_options_safelyOverlapWritingItemAtLocation_options<R = boolean, P0 = unknown, P1 = number, P2 = unknown, P3 = number>(_canWritingItemAtLocation: P0, _options: P1, _safelyOverlapWritingItemAtLocation: P2, _options1: P3): R;
      canReadingItemAtLocation_options_safelyOverlapWritingItemAtLocation_options<R = boolean, P0 = unknown, P1 = number, P2 = unknown, P3 = number>(_canReadingItemAtLocation: P0, _options: P1, _safelyOverlapWritingItemAtLocation: P2, _options1: P3): R;
    }
  }
}

declare const NSFileAccessClaim: cocoa.NSFileAccessClaim.CLASS;
