/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePresenterXPCMessenger<T0 = void, T1 = void, T2 = void> extends NSObject, NSFilePresenterXPCInterfaceProtocol {
    _makePresenter_validateRelinquishmentToSubitemAtURL_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(__makePresenter: P0, _validateRelinquishmentToSubitemAtURL: P1, _completionHandler: P2): R;
    _makePresenter_relinquishToWritingClaimWithID_options_purposeID_subitemURL_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = unknown, P5 = CDUnknownBlockType>(__makePresenter: P0, _relinquishToWritingClaimWithID: P1, _options: P2, _purposeID: P3, _subitemURL: P4, _completionHandler: P5): R;
    _makePresenter_relinquishToReadingClaimWithID_purposeID_options_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = CDUnknownBlockType>(__makePresenter: P0, _relinquishToReadingClaimWithID: P1, _purposeID: P2, _options: P3, _completionHandler: P4): R;
    _makePresenter_relinquishToAccessClaimWithID_purposeID_ifNecessaryUsingSelector_recordingRelinquishment_continuer<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string, P4 = unknown, P5 = CDUnknownBlockType>(__makePresenter: P0, _relinquishToAccessClaimWithID: P1, _purposeID: P2, _ifNecessaryUsingSelector: P3, _recordingRelinquishment: P4, _continuer: P5): R;
    _writeRelinquishment<R = unknown>(): R;
    _readRelinquishment<R = unknown>(): R;
    _makePresenter_setProviderPurposeIdentifier<R = void, P0 = unknown, P1 = unknown>(__makePresenter: P0, _setProviderPurposeIdentifier: P1): R;
    _makePresenter_setLastPresentedItemEventIdentifier<R = void, P0 = unknown, P1 = number>(__makePresenter: P0, _setLastPresentedItemEventIdentifier: P1): R;
    _makePresenter_observeVersionChangeOfKind_withClientID_name_subitemURL<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(__makePresenter: P0, _observeVersionChangeOfKind: P1, _withClientID: P2, _name: P3, _subitemURL: P4): R;
    _makePresenter_observeChangeOfUbiquityAttributes<R = void, P0 = unknown, P1 = unknown>(__makePresenter: P0, _observeChangeOfUbiquityAttributes: P1): R;
    _makePresenter_observeSharingChangeWithSubitemURL<R = void, P0 = unknown, P1 = unknown>(__makePresenter: P0, _observeSharingChangeWithSubitemURL: P1): R;
    _makePresenter_observeUbiquityChangeWithSubitemURL<R = void, P0 = unknown, P1 = unknown>(__makePresenter: P0, _observeUbiquityChangeWithSubitemURL: P1): R;
    _makePresenterObserveReconnection<R = void, P0 = unknown>(__makePresenterObserveReconnection: P0): R;
    _makePresenterObserveDisconnection<R = void, P0 = unknown>(__makePresenterObserveDisconnection: P0): R;
    _makePresenter_observeMoveToURL_withSubitemURL<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__makePresenter: P0, _observeMoveToURL: P1, _withSubitemURL: P2): R;
    _makePresenter_observeChangeWithSubitemURL<R = void, P0 = unknown, P1 = unknown>(__makePresenter: P0, _observeChangeWithSubitemURL: P1): R;
    _makePresenter_accommodateDisconnectionWithCompletionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__makePresenter: P0, _accommodateDisconnectionWithCompletionHandler: P1): R;
    _makePresenter_accommodateDeletionWithSubitemURL_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(__makePresenter: P0, _accommodateDeletionWithSubitemURL: P1, _completionHandler: P2): R;
    _makePresenter_validateRemoteDeletionRecordingRelinquishment_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(__makePresenter: P0, _validateRemoteDeletionRecordingRelinquishment: P1, _completionHandler: P2): R;
    _makePresenter_reportUnsavedChangesWithCompletionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__makePresenter: P0, _reportUnsavedChangesWithCompletionHandler: P1): R;
    _makePresenter_saveChangesWithCompletionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__makePresenter: P0, _saveChangesWithCompletionHandler: P1): R;
    invalidate<R = void>(): R;
    dealloc<R = void>(): R;
    initWithFilePresenterProxy<R = unknown, P0 = unknown>(_initWithFilePresenterProxy: P0): R;
    initWithFilePresenter_queue<R = unknown, P0 = unknown, P1 = unknown>(_initWithFilePresenter: P0, _queue: P1): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSFilePresenterXPCMessenger {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSFilePresenterXPCInterfaceProtocol {
      alloc<R = NSFilePresenterXPCMessenger>(): R;
      new: <R = NSFilePresenterXPCMessenger>() => R;
    }
  }
}

declare const NSFilePresenterXPCMessenger: cocoa.NSFilePresenterXPCMessenger.CLASS;
