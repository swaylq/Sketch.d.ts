/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePresenterProxy<T0 = void, T1 = void, T2 = void> extends NSFileReactorProxy {
    localFileWasEvicted<R = void>(): R;
    promisedFileWasFulfilled<R = void>(): R;
    disconnect<R = void>(): R;
    forwardRelinquishmentForWritingClaim_withID_purposeID_subitemURL_options_completionHandler<R = void, P0 = boolean, P1 = unknown, P2 = unknown, P3 = unknown, P4 = number, P5 = CDUnknownBlockType>(_forwardRelinquishmentForWritingClaim: P0, _withID: P1, _purposeID: P2, _subitemURL: P3, _options: P4, _completionHandler: P5): R;
    observeNewProvider<R = void, P0 = unknown>(_observeNewProvider: P0): R;
    observePresenterChange_atSubitemURL<R = void, P0 = boolean, P1 = unknown>(_observePresenterChange: P0, _atSubitemURL: P1): R;
    observeVersionChangeOfKind_withClientID_name_subitemPath<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_observeVersionChangeOfKind: P0, _withClientID: P1, _name: P2, _subitemPath: P3): R;
    observeChangeAtSubitemPath<R = void, P0 = unknown>(_observeChangeAtSubitemPath: P0): R;
    observeDisappearanceAtSubitemPath<R = void, P0 = unknown>(_observeDisappearanceAtSubitemPath: P0): R;
    observeChangeOfUbiquityAttributes<R = void, P0 = unknown>(_observeChangeOfUbiquityAttributes: P0): R;
    observeSharingChangeAtSubitemPath_withPhysicalURL<R = void, P0 = unknown, P1 = unknown>(_observeSharingChangeAtSubitemPath: P0, _withPhysicalURL: P1): R;
    observeUbiquityChangeAtSubitemPath_withPhysicalURL<R = void, P0 = unknown, P1 = unknown>(_observeUbiquityChangeAtSubitemPath: P0, _withPhysicalURL: P1): R;
    observeReconnectionByWriterWithPurposeID<R = void, P0 = unknown>(_observeReconnectionByWriterWithPurposeID: P0): R;
    observeDisconnectionByWriterWithPurposeID<R = void, P0 = unknown>(_observeDisconnectionByWriterWithPurposeID: P0): R;
    observeMoveOfSubitemAtURL_toURL_byWriterWithPurposeID<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_observeMoveOfSubitemAtURL: P0, _toURL: P1, _byWriterWithPurposeID: P2): R;
    observeMoveByWriterWithPurposeID_withPhysicalDestinationURL<R = void, P0 = unknown, P1 = unknown>(_observeMoveByWriterWithPurposeID: P0, _withPhysicalDestinationURL: P1): R;
    accommodateDeletionWithSubitemPath_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_accommodateDeletionWithSubitemPath: P0, _completionHandler: P1): R;
    saveChangesWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_saveChangesWithCompletionHandler: P0): R;
    relinquishToWritingClaimWithID_options_purposeID_subitemPath_resultHandler<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown, P4 = CDUnknownBlockType>(_relinquishToWritingClaimWithID: P0, _options: P1, _purposeID: P2, _subitemPath: P3, _resultHandler: P4): R;
    relinquishToReadingClaimWithID_options_purposeID_resultHandler<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = CDUnknownBlockType>(_relinquishToReadingClaimWithID: P0, _options: P1, _purposeID: P2, _resultHandler: P3): R;
    stopObservingApplicationState<R = void>(): R;
    startObservingApplicationStateWithQueue<R = void, P0 = unknown>(_startObservingApplicationStateWithQueue: P0): R;
    startWatchingWithQueue_lastEventID_unannouncedMoveHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_startWatchingWithQueue: P0, _lastEventID: P1, _unannouncedMoveHandler: P2): R;
    _settleNonCoordinatedChanges<R = void>(): R;
    shouldSendObservationMessageWithPurposeID<R = boolean, P0 = unknown>(_shouldSendObservationMessageWithPurposeID: P0): R;
    initWithClient_remotePresenter_reactorID<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithClient: P0, _remotePresenter: P1, _reactorID: P2): R;
    filePresenterResponses<R = number>(): R;
    setFilePresenterResponses<R = void, P0 = number>(_v: P0): R;
    observedUbiquityAttributes<R = NSSet>(): R;
    setObservedUbiquityAttributes<R = void, P0 = NSSet>(_v: P0): R;
    usesMainThreadDuringReliquishing<R = boolean>(): R;
    setUsesMainThreadDuringReliquishing<R = void, P0 = boolean>(_v: P0): R;
    inSubarbiter<R = boolean>(): R;
    setInSubarbiter<R = void, P0 = boolean>(_v: P0): R;
    disconnected<R = boolean>(): R;
  }
  namespace NSFilePresenterProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFileReactorProxy {
      alloc<R = NSFilePresenterProxy>(): R;
      new: <R = NSFilePresenterProxy>() => R;
      urlWithItemURL_subitemPath<R = unknown, P0 = unknown, P1 = unknown>(_urlWithItemURL: P0, _subitemPath: P1): R;
    }
  }
}

declare const NSFilePresenterProxy: cocoa.NSFilePresenterProxy.CLASS;
