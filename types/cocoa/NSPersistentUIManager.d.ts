/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIManager<T0 = void, T1 = void, T2 = void> extends NSObject, NSPersistentUIFlushHandlerProtocol {
    shouldRestoreStateOnLaunch<R = boolean>(): R;
    writePublicPlistWithOpenWindowIDs<R = void, P0 = unknown>(_writePublicPlistWithOpenWindowIDs: P0): R;
    promptToIgnorePersistentState<R = boolean>(): R;
    hasFinishedRestoringWindows<R = boolean>(): R;
    ignoreAnyPreexistingPersistentState<R = void>(): R;
    shouldUseOneWindowHeuristic<R = boolean>(): R;
    resumeNormalWindowOrderingAndDrawing<R = void>(): R;
    delayCGWindowOrderingIfNecessary<R = void>(): R;
    performingWindowOrdering<R = boolean>(): R;
    restoreAllPersistentStateWithCompletionHandler<R = boolean, P0 = CDUnknownBlockType>(_restoreAllPersistentStateWithCompletionHandler: P0): R;
    performDockCommands_withOldWindowIDToNewWindowID<R = void, P0 = unknown, P1 = unknown>(_performDockCommands: P0, _withOldWindowIDToNewWindowID: P1): R;
    changePersistentKeyPathObservationForPaths_inObject_to<R = void, P0 = unknown, P1 = unknown, P2 = boolean>(_changePersistentKeyPathObservationForPaths: P0, _inObject: P1, _to: P2): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    addPendingKeyPath_forObject<R = void, P0 = unknown, P1 = unknown>(_addPendingKeyPath: P0, _forObject: P1): R;
    changeWindow_toStatus_withConditionalGeneration<R = void, P0 = number, P1 = number, P2 = number>(_changeWindow: P0, _toStatus: P1, _withConditionalGeneration: P2): R;
    setPublicProperties_forWindowID<R = void, P0 = unknown, P1 = number>(_setPublicProperties: P0, _forWindowID: P1): R;
    _setPublicProperties_forWindowID<R = void, P0 = unknown, P1 = number>(__setPublicProperties: P0, _forWindowID: P1): R;
    windowInfoForWindowID_createIfNecessary<R = unknown, P0 = number, P1 = boolean>(_windowInfoForWindowID: P0, _createIfNecessary: P1): R;
    refreshEncryptionKey<R = void, P0 = boolean>(_refreshEncryptionKey: P0): R;
    clearCrashCountFileIfNecessary<R = void>(): R;
    crashBlameCounter<R = number>(): R;
    modifyCrashBlameCounterBy<R = number, P0 = number>(_modifyCrashBlameCounterBy: P0): R;
    enableRestorableStateWriting<R = void>(): R;
    disableRestorableStateWriting<R = void>(): R;
    invalidateStateDirectoryAtLaunch<R = void>(): R;
    stateDirectoryAtLaunch<R = unknown>(): R;
    hasPersistentStateToRestore<R = boolean>(): R;
    addObjectInBackgroundForKeyedState_underKey_forIdentifier_inWindow<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_addObjectInBackgroundForKeyedState: P0, _underKey: P1, _forIdentifier: P2, _inWindow: P3): R;
    acquireDirtyState<R = void>(): R;
    flushPersistentStateAndClose<R = void>(): R;
    flushPersistentStateAndClose_waitingUntilDone<R = void, P0 = boolean, P1 = boolean>(_flushPersistentStateAndClose: P0, _waitingUntilDone: P1): R;
    _finishPendingChangesImmediatelyWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(__finishPendingChangesImmediatelyWithCompletionHandler: P0): R;
    fullyDirtyAndReopenPersistentState<R = void>(): R;
    discardAllPersistentStateAndClose<R = void>(): R;
    _cancelFlushTimer<R = void>(): R;
    _flushScheduler<R = unknown>(): R;
    flushAllChanges<R = void>(): R;
    persistentStateDirectoryURL<R = unknown>(): R;
    initWithBundleID<R = unknown, P0 = unknown>(_initWithBundleID: P0): R;
    dealloc<R = void>(): R;
    copyPersistentCarbonWindowDictionariesAtTimeOfAppLaunch<R = unknown>(): R;
    deletePersistentWindow<R = void, P0 = number>(_deletePersistentWindow: P0): R;
    setObject_forKey_forPersistentWindowID<R = void, P0 = unknown, P1 = unknown, P2 = number>(_setObject: P0, _forKey: P1, _forPersistentWindowID: P2): R;
    createPersistentWindow<R = number>(): R;
    destroyExternallyCreatedWindows<R = void, P0 = unknown>(_destroyExternallyCreatedWindows: P0): R;
    copyAcquiredExternallyCreatedWindows<R = unknown>(): R;
    beginAcquiringExternallyCreatedWindows<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSPersistentUIManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSPersistentUIFlushHandlerProtocol {
      alloc<R = NSPersistentUIManager>(): R;
      new: <R = NSPersistentUIManager>() => R;
      unarchiver_didDecodeObject<R = unknown, P0 = unknown, P1 = unknown>(_unarchiver: P0, _didDecodeObject: P1): R;
      nibDecoder_didDecodeObject<R = void, P0 = unknown, P1 = unknown>(_nibDecoder: P0, _didDecodeObject: P1): R;
      _didDecodeObject_uid<R = void, P0 = unknown, P1 = number>(__didDecodeObject: P0, _uid: P1): R;
      _debugUnrestoredWindows<R = unknown>(): R;
      sharedManager<R = unknown>(): R;
      copyDebugDumpStateDirectory<R = unknown, P0 = unknown>(_copyDebugDumpStateDirectory: P0): R;
      copyPersistentCarbonWindowDictionariesForBundleID<R = unknown, P0 = unknown>(_copyPersistentCarbonWindowDictionariesForBundleID: P0): R;
      _copyCGWindowOrderingReplayer<R = CDUnknownBlockType>(): R;
      _resuppressWindowOrderingNowThatStateRestorationIsOccurring<R = void>(): R;
      _permitWindowOrderingUntilStateRestoration<R = void>(): R;
      _suppressCGWindowOrdering<R = boolean>(): R;
      _NSPersistentUIDestroyTalagentWindows<R = void, P0 = number>(__NSPersistentUIDestroyTalagentWindows: P0): R;
      _NSPersistentUIAcquireTalagentWindowsOnConnections<R = unknown, P0 = number>(__NSPersistentUIAcquireTalagentWindowsOnConnections: P0): R;
    }
  }
}

declare const NSPersistentUIManager: cocoa.NSPersistentUIManager.CLASS;
