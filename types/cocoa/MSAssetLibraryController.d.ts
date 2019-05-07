/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetLibraryController<T0 = void, T1 = void, T2 = void> extends NSObject, MSAssetLibraryDelegateProtocol {
    cxx_destruct<R = void>(): R;
    loadVersionZeroLibrariesWithDispatchGroup<R = void, P0 = unknown>(_loadVersionZeroLibrariesWithDispatchGroup: P0): R;
    loadVersionZeroLibrariesFromUnarchiver_forKey_dispatchGroup<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_loadVersionZeroLibrariesFromUnarchiver: P0, _forKey: P1, _dispatchGroup: P2): R;
    shouldAttemptToLoadVersionZeroLibraries<R = boolean>(): R;
    createAssetLibraryFolder<R = void>(): R;
    librariesWithUpdates<R = unknown>(): R;
    addRemoteLibraryFromAppcastURL_withCompletionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_addRemoteLibraryFromAppcastURL: P0, _withCompletionHandler: P1): R;
    makeDuplicateRemoteLibraryError<R = unknown>(): R;
    remoteLibraryWithAppcast<R = unknown, P0 = unknown>(_remoteLibraryWithAppcast: P0): R;
    updateAndLoadAssetLibrary_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_updateAndLoadAssetLibrary: P0, _completionHandler: P1): R;
    startDownloadingAssetLibrary_progressHandler_downloadCompletionHandler_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_startDownloadingAssetLibrary: P0, _progressHandler: P1, _downloadCompletionHandler: P2, _completionHandler: P3): R;
    downloadAssetLibraryAppcastsWithHandler_completionHandler<R = void, P0 = CDUnknownBlockType, P1 = CDUnknownBlockType>(_downloadAssetLibraryAppcastsWithHandler: P0, _completionHandler: P1): R;
    previewFromDocumentReader<R = unknown, P0 = unknown>(_previewFromDocumentReader: P0): R;
    generatePreviewImageForLibrary_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_generatePreviewImageForLibrary: P0, _completionHandler: P1): R;
    libraryForShareableObject<R = unknown, P0 = unknown>(_libraryForShareableObject: P0): R;
    enumerateForeignObjects_inDocument_includeDisabled_block<R = void, P0 = unknown, P1 = unknown, P2 = boolean, P3 = CDUnknownBlockType>(_enumerateForeignObjects: P0, _inDocument: P1, _includeDisabled: P2, _block: P3): R;
    syncForeignObject_withMaster_fromLibrary<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_syncForeignObject: P0, _withMaster: P1, _fromLibrary: P2): R;
    importShareableObjectReference_intoDocument<R = unknown, P0 = unknown, P1 = unknown>(_importShareableObjectReference: P0, _intoDocument: P1): R;
    syncNestedSymbolsOf_withMaster_fromLibrary<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_syncNestedSymbolsOf: P0, _withMaster: P1, _fromLibrary: P2): R;
    symbolIDsMappingFrom_toLibrary<R = unknown, P0 = unknown, P1 = unknown>(_symbolIDsMappingFrom: P0, _toLibrary: P1): R;
    shouldLoadPreviouslySavedLibraries<R = boolean>(): R;
    loadRemoteLibraryRepresentationWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_loadRemoteLibraryRepresentationWithCompletionHandler: P0): R;
    loadLibrariesWithDispatchGroup<R = void, P0 = unknown>(_loadLibrariesWithDispatchGroup: P0): R;
    setupInitialRemoteLibrariesWithDispatchGroup<R = void, P0 = unknown>(_setupInitialRemoteLibrariesWithDispatchGroup: P0): R;
    copyInternalLibraryToApplicationSupport<R = void>(): R;
    initialRemoteLibraryDefinitions<R = unknown>(): R;
    loadLibrariesForKey_dispatchGroup<R = unknown, P0 = unknown, P1 = unknown>(_loadLibrariesForKey: P0, _dispatchGroup: P1): R;
    reloadLibrary<R = void, P0 = unknown>(_reloadLibrary: P0): R;
    notifyLibraryChange<R = void, P0 = unknown>(_notifyLibraryChange: P0): R;
    removeRemoteAssetLibrary<R = void, P0 = unknown>(_removeRemoteAssetLibrary: P0): R;
    removeUserAssetLibrary<R = void, P0 = unknown>(_removeUserAssetLibrary: P0): R;
    saveLibraries<R = void>(): R;
    saveLibraries_withLibrariesKey<R = void, P0 = unknown, P1 = unknown>(_saveLibraries: P0, _withLibrariesKey: P1): R;
    removeAssetLibrary<R = void, P0 = unknown>(_removeAssetLibrary: P0): R;
    addAssetLibraryAtURL<R = number, P0 = unknown>(_addAssetLibraryAtURL: P0): R;
    addRemoteLibraryFromAppcastURL_context_callback<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_addRemoteLibraryFromAppcastURL: P0, _context: P1, _callback: P2): R;
    assetLibraryUpdater<R = MSAssetLibraryUpdater>(): R;
    delegates<R = NSHashTable>(): R;
    setDelegates<R = void, P0 = NSHashTable>(_v: P0): R;
    remoteLibraries<R = NSArray>(): R;
    setRemoteLibraries<R = void, P0 = NSArray>(_v: P0): R;
    userLibraries<R = NSMutableArray>(): R;
    libraries<R = NSArray>(): R;
    availableLibraries<R = NSArray>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSAssetLibraryController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSAssetLibraryDelegateProtocol {
      alloc<R = MSAssetLibraryController>(): R;
      new: <R = MSAssetLibraryController>() => R;
    }
  }
}

declare const MSAssetLibraryController: cocoa.MSAssetLibraryController.CLASS;
