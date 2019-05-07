/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileVersion<T0 = void, T1 = void, T2 = void> extends NSObject {
    removeAndReturnError<R = boolean, P0 = unknown>(_removeAndReturnError: P0): R;
    replaceItemAtURL_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_replaceItemAtURL: P0, _options: P1, _error: P2): R;
    description<R = unknown>(): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    _preserveConflictVersionLocally<R = boolean>(): R;
    _overrideModificationDateWithDate<R = void, P0 = unknown>(__overrideModificationDateWithDate: P0): R;
    _setDocumentInfo<R = boolean, P0 = unknown>(__setDocumentInfo: P0): R;
    _documentInfo<R = unknown>(): R;
    _initWithFileURL_nonLocalVersion<R = unknown, P0 = unknown, P1 = unknown>(__initWithFileURL: P0, _nonLocalVersion: P1): R;
    _initWithAddition<R = unknown, P0 = unknown>(__initWithAddition: P0): R;
    _initWithFileURL_library_clientID_name_contentsURL_isBackup_revision<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = boolean, P6 = unknown>(__initWithFileURL: P0, _library: P1, _clientID: P2, _name: P3, _contentsURL: P4, _isBackup: P5, _revision: P6): R;
    restoreOverItemAtURL_error<R = unknown, P0 = unknown, P1 = unknown>(_restoreOverItemAtURL: P0, _error: P1): R;
    discardable<R = boolean>(): R;
    setDiscardable<R = void, P0 = boolean>(_v: P0): R;
    resolved<R = boolean>(): R;
    setResolved<R = void, P0 = boolean>(_v: P0): R;
    etag<R = NSString>(): R;
    hasThumbnail<R = boolean>(): R;
    hasLocalContents<R = boolean>(): R;
    ubiquitous<R = boolean>(): R;
    conflict<R = boolean>(): R;
    persistentIdentifier<R = NSCoding>(): R;
    size<R = number>(): R;
    modificationDate<R = NSDate>(): R;
    originatorNameComponents<R = NSPersonNameComponents>(): R;
    originatorName<R = NSString>(): R;
    localizedNameOfSavingComputer<R = NSString>(): R;
    localizedName<R = NSString>(): R;
    originalPOSIXName<R = NSString>(): R;
    URL<R = NSURL>(): R;
    _isBackup<R = boolean>(): R;
    // + NSFileVersion(BUStarfieldTimelineSupport): 
    timelineItemType<R = number>(): R;
    timelineItemDate<R = unknown>(): R;
    // + NSFileVersion(NSDocumentInternal): 
    _compareToVersion<R = number, P0 = unknown>(__compareToVersion: P0): R;
    // + NSFileVersion(BUStarfieldTimelineSupport):
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSFileVersion {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFileVersion>(): R;
      new: <R = NSFileVersion>() => R;
      removeOtherVersionsOfItemAtURL_error<R = boolean, P0 = unknown, P1 = unknown>(_removeOtherVersionsOfItemAtURL: P0, _error: P1): R;
      unresolvedConflictVersionsOfItemAtURL<R = unknown, P0 = unknown>(_unresolvedConflictVersionsOfItemAtURL: P0): R;
      temporaryDirectoryURLForNewVersionOfItemAtURL<R = unknown, P0 = unknown>(_temporaryDirectoryURLForNewVersionOfItemAtURL: P0): R;
      addVersionOfItemAtURL_withContentsOfURL_options_error<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_addVersionOfItemAtURL: P0, _withContentsOfURL: P1, _options: P2, _error: P3): R;
      versionOfItemAtURL_forPersistentIdentifier<R = unknown, P0 = unknown, P1 = unknown>(_versionOfItemAtURL: P0, _forPersistentIdentifier: P1): R;
      getNonlocalVersionsOfItemAtURL_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_getNonlocalVersionsOfItemAtURL: P0, _completionHandler: P1): R;
      otherVersionsOfItemAtURL<R = unknown, P0 = unknown>(_otherVersionsOfItemAtURL: P0): R;
      currentVersionOfItemAtURL<R = unknown, P0 = unknown>(_currentVersionOfItemAtURL: P0): R;
      keyPathsForValuesAffectingValueForKey<R = unknown, P0 = unknown>(_keyPathsForValuesAffectingValueForKey: P0): R;
      _removeTemporaryDirectoryAtURL<R = void, P0 = unknown>(__removeTemporaryDirectoryAtURL: P0): R;
      _versionOfItemAtURL_forClientID_name_temporaryStorageIdentifier_evenIfDeleted<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = boolean>(__versionOfItemAtURL: P0, _forClientID: P1, _name: P2, _temporaryStorageIdentifier: P3, _evenIfDeleted: P4): R;
      _removeOtherVersionsOfItemAtURL_temporaryStorageIdentifier_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(__removeOtherVersionsOfItemAtURL: P0, _temporaryStorageIdentifier: P1, _error: P2): R;
      _temporaryDirectoryURLForNewVersionOfItemAtURL_temporaryStorageIdentifier<R = unknown, P0 = unknown, P1 = unknown>(__temporaryDirectoryURLForNewVersionOfItemAtURL: P0, _temporaryStorageIdentifier: P1): R;
      _addVersionOfItemAtURL_withContentsOfURL_options_temporaryStorageIdentifier_error<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = unknown>(__addVersionOfItemAtURL: P0, _withContentsOfURL: P1, _options: P2, _temporaryStorageIdentifier: P3, _error: P4): R;
      _addVersionOfItemAtURL_withContentsOfURL_options_userInfo_temporaryStorageIdentifier_error<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = unknown, P5 = unknown>(__addVersionOfItemAtURL: P0, _withContentsOfURL: P1, _options: P2, _userInfo: P3, _temporaryStorageIdentifier: P4, _error: P5): R;
      _versionOfItemAtURL_forPersistentIdentifier_temporaryStorageIdentifier<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__versionOfItemAtURL: P0, _forPersistentIdentifier: P1, _temporaryStorageIdentifier: P2): R;
      _otherNonpurgeableVersionsOfItemAtURL_temporaryStorageIdentifier<R = unknown, P0 = unknown, P1 = unknown>(__otherNonpurgeableVersionsOfItemAtURL: P0, _temporaryStorageIdentifier: P1): R;
      _otherVersionsOfItemAtURL_temporaryStorageIdentifier<R = unknown, P0 = unknown, P1 = unknown>(__otherVersionsOfItemAtURL: P0, _temporaryStorageIdentifier: P1): R;
      _otherVersionsOfItemAtURL_temporaryStorageIdentifier_withoutOptions<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(__otherVersionsOfItemAtURL: P0, _temporaryStorageIdentifier: P1, _withoutOptions: P2): R;
      _libraryForURL_temporaryStorageIdentifier<R = NSObject, P0 = unknown, P1 = unknown>(__libraryForURL: P0, _temporaryStorageIdentifier: P1): R;
      _existingLibraryForURL_temporaryStorageIdentifier<R = NSObject, P0 = unknown, P1 = unknown>(__existingLibraryForURL: P0, _temporaryStorageIdentifier: P1): R;
      _permanentVersionStorageSupportedForURL_temporaryStorageIdentifier_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(__permanentVersionStorageSupportedForURL: P0, _temporaryStorageIdentifier: P1, _error: P2): R;
      _makeTemporaryStorageIdentifier<R = unknown>(): R;
      _makePermanentStorageLibraryForURL_temporaryStorageRequired_error<R = unknown, P0 = unknown, P1 = string, P2 = unknown>(__makePermanentStorageLibraryForURL: P0, _temporaryStorageRequired: P1, _error: P2): R;
      _isTemporaryStorageRequiredForGSError_andURL<R = boolean, P0 = unknown, P1 = unknown>(__isTemporaryStorageRequiredForGSError: P0, _andURL: P1): R;
      _supportedGenerationalStorageClientIDs<R = unknown>(): R;
      _temporaryStorageLocationForIdentifier<R = unknown, P0 = unknown>(__temporaryStorageLocationForIdentifier: P0): R;
      _autosaveDirectoryURLCreateIfNecessary<R = unknown, P0 = boolean>(__autosaveDirectoryURLCreateIfNecessary: P0): R;
      getNonlocalVersionsOfItemAtURL_options_completionHandler<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_getNonlocalVersionsOfItemAtURL: P0, _options: P1, _completionHandler: P2): R;
      discoverUbiquitousVersionsOfItemAtURL_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_discoverUbiquitousVersionsOfItemAtURL: P0, _completionHandler: P1): R;
      _removeConflictObserver<R = void, P0 = void>(__removeConflictObserver: P0): R;
      _addConflictObserverForItemAtURL_statusChangedHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__addConflictObserverForItemAtURL: P0, _statusChangedHandler: P1): R;
      _markConflicts_asHandledForItemAtURL<R = void, P0 = unknown, P1 = unknown>(__markConflicts: P0, _asHandledForItemAtURL: P1): R;
      _conflictsExistForItemAtURL<R = boolean, P0 = unknown>(__conflictsExistForItemAtURL: P0): R;
      unresolvedConflictsExistForItemAtURL<R = boolean, P0 = unknown>(_unresolvedConflictsExistForItemAtURL: P0): R;
      versionsOfItemAtURL<R = unknown, P0 = unknown>(_versionsOfItemAtURL: P0): R;
      // + NSFileVersion(NSExtensions): 
      _finishedWithBackupCollection<R = void, P0 = void>(__finishedWithBackupCollection: P0): R;
      _getBackupVersionsForURL_queue_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(__getBackupVersionsForURL: P0, _queue: P1, _completionHandler: P2): R;
    }
  }
}

declare const NSFileVersion: cocoa.NSFileVersion.CLASS;
