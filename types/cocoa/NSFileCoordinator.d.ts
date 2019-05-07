/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileCoordinator<T0 = void, T1 = void, T2 = void> extends NSObject {
    cancel<R = void>(): R;
    itemAtURL_didChangeUbiquityAttributes<R = void, P0 = unknown, P1 = unknown>(_itemAtURL: P0, _didChangeUbiquityAttributes: P1): R;
    _isValidUbiquityAttribute<R = boolean, P0 = unknown>(__isValidUbiquityAttribute: P0): R;
    itemAtURL_didMoveToURL<R = void, P0 = unknown, P1 = unknown>(_itemAtURL: P0, _didMoveToURL: P1): R;
    itemAtURL_willMoveToURL<R = void, P0 = unknown, P1 = unknown>(_itemAtURL: P0, _willMoveToURL: P1): R;
    prepareForReadingItemsAtURLs_options_writingItemsAtURLs_options_error_byAccessor<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = number, P4 = unknown, P5 = CDUnknownBlockType>(_prepareForReadingItemsAtURLs: P0, _options: P1, _writingItemsAtURLs: P2, _options1: P3, _error: P4, _byAccessor: P5): R;
    coordinateAccessWithIntents_queue_byAccessor<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_coordinateAccessWithIntents: P0, _queue: P1, _byAccessor: P2): R;
    coordinateWritingItemAtURL_options_writingItemAtURL_options_error_byAccessor<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = number, P4 = unknown, P5 = CDUnknownBlockType>(_coordinateWritingItemAtURL: P0, _options: P1, _writingItemAtURL: P2, _options1: P3, _error: P4, _byAccessor: P5): R;
    coordinateReadingItemAtURL_options_writingItemAtURL_options_error_byAccessor<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = number, P4 = unknown, P5 = CDUnknownBlockType>(_coordinateReadingItemAtURL: P0, _options: P1, _writingItemAtURL: P2, _options1: P3, _error: P4, _byAccessor: P5): R;
    coordinateWritingItemAtURL_options_error_byAccessor<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = CDUnknownBlockType>(_coordinateWritingItemAtURL: P0, _options: P1, _error: P2, _byAccessor: P3): R;
    coordinateReadingItemAtURL_options_error_byAccessor<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = CDUnknownBlockType>(_coordinateReadingItemAtURL: P0, _options: P1, _error: P2, _byAccessor: P3): R;
    _invokeAccessor_thenCompletionHandler<R = void, P0 = CDUnknownBlockType, P1 = CDUnknownBlockType>(__invokeAccessor: P0, _thenCompletionHandler: P1): R;
    dealloc<R = void>(): R;
    initWithFilePresenter<R = unknown, P0 = unknown>(_initWithFilePresenter: P0): R;
    releaseAccess<R = void, P0 = unknown>(_releaseAccess: P0): R;
    retainAccess<R = unknown>(): R;
    _setPurposeIdentifier<R = void, P0 = unknown>(__setPurposeIdentifier: P0): R;
    _purposeIdentifierLockedDown<R = boolean>(): R;
    _lockdownPurposeIdentifier<R = void>(): R;
    _setFileProvider<R = void, P0 = unknown>(__setFileProvider: P0): R;
    __prepareForReadingItemsAtURLs_options_writingItemsAtURLs_options_byAccessor<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = number, P4 = CDUnknownBlockType>(___prepareForReadingItemsAtURLs: P0, _options: P1, _writingItemsAtURLs: P2, _options1: P3, _byAccessor: P4): R;
    __coordinateWritingItemAtURL_options_writingItemAtURL_options_purposeID_byAccessor<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = number, P4 = unknown, P5 = CDUnknownBlockType>(___coordinateWritingItemAtURL: P0, _options: P1, _writingItemAtURL: P2, _options1: P3, _purposeID: P4, _byAccessor: P5): R;
    __coordinateReadingItemAtURL_options_writingItemAtURL_options_purposeID_byAccessor<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = number, P4 = unknown, P5 = CDUnknownBlockType>(___coordinateReadingItemAtURL: P0, _options: P1, _writingItemAtURL: P2, _options1: P3, _purposeID: P4, _byAccessor: P5): R;
    __coordinateWritingItemAtURL_options_purposeID_byAccessor<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = CDUnknownBlockType>(___coordinateWritingItemAtURL: P0, _options: P1, _purposeID: P2, _byAccessor: P3): R;
    __coordinateReadingItemAtURL_options_purposeID_byAccessor<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = CDUnknownBlockType>(___coordinateReadingItemAtURL: P0, _options: P1, _purposeID: P2, _byAccessor: P3): R;
    _itemDidChangeAtURL<R = void, P0 = unknown>(__itemDidChangeAtURL: P0): R;
    _itemDidDisappearAtURL<R = void, P0 = unknown>(__itemDidDisappearAtURL: P0): R;
    sharingDidChangeForItemAtURL<R = void, P0 = unknown>(_sharingDidChangeForItemAtURL: P0): R;
    _ubiquityDidChangeForItemAtURL<R = void, P0 = unknown>(__ubiquityDidChangeForItemAtURL: P0): R;
    _itemAtURL_didMoveToURL<R = void, P0 = unknown, P1 = unknown>(__itemAtURL: P0, _didMoveToURL: P1): R;
    _itemAtURL_willMoveToURL<R = void, P0 = unknown, P1 = unknown>(__itemAtURL: P0, _willMoveToURL: P1): R;
    _coordinateAccessWithIntents_queue_byAccessor<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(__coordinateAccessWithIntents: P0, _queue: P1, _byAccessor: P2): R;
    _coordinateWritingItemAtURL_options_writingItemAtURL_options_error_byAccessor<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = number, P4 = unknown, P5 = CDUnknownBlockType>(__coordinateWritingItemAtURL: P0, _options: P1, _writingItemAtURL: P2, _options1: P3, _error: P4, _byAccessor: P5): R;
    _coordinateReadingItemAtURL_options_writingItemAtURL_options_error_byAccessor<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = number, P4 = unknown, P5 = CDUnknownBlockType>(__coordinateReadingItemAtURL: P0, _options: P1, _writingItemAtURL: P2, _options1: P3, _error: P4, _byAccessor: P5): R;
    _coordinateWritingItemAtURL_options_error_byAccessor<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = CDUnknownBlockType>(__coordinateWritingItemAtURL: P0, _options: P1, _error: P2, _byAccessor: P3): R;
    _coordinateReadingItemAtURL_options_error_byAccessor<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = CDUnknownBlockType>(__coordinateReadingItemAtURL: P0, _options: P1, _error: P2, _byAccessor: P3): R;
    _withAccessArbiter_invokeAccessor_orDont_andRelinquishAccessClaim<R = void, P0 = unknown, P1 = CDUnknownBlockType, P2 = boolean, P3 = unknown>(__withAccessArbiter: P0, _invokeAccessor: P1, _orDont: P2, _andRelinquishAccessClaim: P3): R;
    _didEndWrite<R = void, P0 = unknown>(__didEndWrite: P0): R;
    _willStartWriteWithIntents_async<R = unknown, P0 = unknown, P1 = boolean>(__willStartWriteWithIntents: P0, _async: P1): R;
    _blockOnAccessClaim_withAccessArbiter<R = void, P0 = unknown, P1 = unknown>(__blockOnAccessClaim: P0, _withAccessArbiter: P1): R;
    _forgetAccessClaimForID<R = void, P0 = unknown>(__forgetAccessClaimForID: P0): R;
    _requestAccessClaim_withProcedure<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__requestAccessClaim: P0, _withProcedure: P1): R;
    _cancelClaimWithIdentifier<R = void, P0 = unknown>(__cancelClaimWithIdentifier: P0): R;
    purposeIdentifier<R = NSString>(): R;
    setPurposeIdentifier<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSFileCoordinator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFileCoordinator>(): R;
      new: <R = NSFileCoordinator>() => R;
      _canonicalURLForURL<R = unknown, P0 = unknown>(__canonicalURLForURL: P0): R;
      filePresenters<R = unknown>(): R;
      removeFilePresenter<R = void, P0 = unknown>(_removeFilePresenter: P0): R;
      addFilePresenter<R = void, P0 = unknown>(_addFilePresenter: P0): R;
      _getDebugInfoWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(__getDebugInfoWithCompletionHandler: P0): R;
      _printDebugInfo<R = void>(): R;
      _currentClaimPurposeIdentifier<R = unknown>(): R;
      _currentFileCoordinator<R = unknown>(): R;
      _itemHasPresentersAtURL<R = boolean, P0 = unknown>(__itemHasPresentersAtURL: P0): R;
      _fileProviders<R = unknown>(): R;
      _removeFileProvider<R = void, P0 = unknown>(__removeFileProvider: P0): R;
      _addFileProvider_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__addFileProvider: P0, _completionHandler: P1): R;
      _addFileProvider<R = void, P0 = unknown>(__addFileProvider: P0): R;
      __itemAtURL_didResolveConflictVersionWithClientID_name_purposeID<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(___itemAtURL: P0, _didResolveConflictVersionWithClientID: P1, _name: P2, _purposeID: P3): R;
      __itemAtURL_didLoseVersionWithClientID_name_purposeID<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(___itemAtURL: P0, _didLoseVersionWithClientID: P1, _name: P2, _purposeID: P3): R;
      __itemAtURL_didGainVersionWithClientID_name_purposeID<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(___itemAtURL: P0, _didGainVersionWithClientID: P1, _name: P2, _purposeID: P3): R;
      __itemAtURL_didChangeWithPurposeID<R = void, P0 = unknown, P1 = unknown>(___itemAtURL: P0, _didChangeWithPurposeID: P1): R;
      __itemAtURL_didDisappearWithPurposeID<R = void, P0 = unknown, P1 = unknown>(___itemAtURL: P0, _didDisappearWithPurposeID: P1): R;
      __itemAtURL_didChangeUbiquityWithPurposeID<R = void, P0 = unknown, P1 = unknown>(___itemAtURL: P0, _didChangeUbiquityWithPurposeID: P1): R;
      __itemAtURL_didReconnectWithPurposeID<R = void, P0 = unknown, P1 = unknown>(___itemAtURL: P0, _didReconnectWithPurposeID: P1): R;
      __itemAtURL_didDisconnectWithPurposeID<R = void, P0 = unknown, P1 = unknown>(___itemAtURL: P0, _didDisconnectWithPurposeID: P1): R;
      __itemAtURL_didMoveToURL_purposeID<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(___itemAtURL: P0, _didMoveToURL: P1, _purposeID: P2): R;
      _setNextClaimIdentifier<R = void, P0 = unknown>(__setNextClaimIdentifier: P0): R;
      _nextClaimIdentifier<R = unknown>(): R;
      _skipCoordinationWork<R = boolean>(): R;
      _performBarrierAsync<R = void, P0 = CDUnknownBlockType>(__performBarrierAsync: P0): R;
      _performBarrier<R = void>(): R;
      _createConnectionToProgressRegistrar<R = unknown>(): R;
      _createConnectionToFileAccessArbiterForQueue<R = unknown, P0 = unknown>(__createConnectionToFileAccessArbiterForQueue: P0): R;
      _stopInProcessFileCoordinationAndProgressServers<R = void>(): R;
      _startInProcessFileCoordinationAndProgressServers<R = void>(): R;
      _fileAccessArbiterInterface<R = unknown>(): R;
      _fileProviderInterface<R = unknown>(): R;
      _filePresenterInterface<R = unknown>(): R;
      _createIdentifierForNewClaim<R = unknown>(): R;
      _setCurrentClaimPurposeIdentifier<R = void, P0 = unknown>(__setCurrentClaimPurposeIdentifier: P0): R;
      _setReadingOptions<R = void, P0 = number>(__setReadingOptions: P0): R;
      _removeInfoForID<R = void, P0 = unknown>(__removeInfoForID: P0): R;
      _addProcessIdentifier_observedUbiquityAttributes_forID<R = void, P0 = number, P1 = unknown, P2 = unknown>(__addProcessIdentifier: P0, _observedUbiquityAttributes: P1, _forID: P2): R;
      _accessPresenterInfoUsingBlock<R = void, P0 = CDUnknownBlockType>(__accessPresenterInfoUsingBlock: P0): R;
      _readingOptions<R = number>(): R;
      _provideRecursively<R = boolean>(): R;
      _observedUbiquityAttributesForPresenterWithID<R = unknown, P0 = unknown>(__observedUbiquityAttributesForPresenterWithID: P0): R;
      _processIdentifierForID<R = number, P0 = unknown>(__processIdentifierForID: P0): R;
      _responsesForPresenter<R = number, P0 = unknown>(__responsesForPresenter: P0): R;
    }
  }
}

declare const NSFileCoordinator: cocoa.NSFileCoordinator.CLASS;
