/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUbiquitousKeyValueStore<T0 = void, T1 = void, T2 = void> extends NSObject {
    setBool_forKey<R = void, P0 = boolean, P1 = unknown>(_setBool: P0, _forKey: P1): R;
    boolForKey<R = boolean, P0 = unknown>(_boolForKey: P0): R;
    setDouble_forKey<R = void, P0 = number, P1 = unknown>(_setDouble: P0, _forKey: P1): R;
    doubleForKey<R = number, P0 = unknown>(_doubleForKey: P0): R;
    setLongLong_forKey<R = void, P0 = number, P1 = unknown>(_setLongLong: P0, _forKey: P1): R;
    longLongForKey<R = number, P0 = unknown>(_longLongForKey: P0): R;
    setData_forKey<R = void, P0 = unknown, P1 = unknown>(_setData: P0, _forKey: P1): R;
    dataForKey<R = unknown, P0 = unknown>(_dataForKey: P0): R;
    setDictionary_forKey<R = void, P0 = unknown, P1 = unknown>(_setDictionary: P0, _forKey: P1): R;
    dictionaryForKey<R = unknown, P0 = unknown>(_dictionaryForKey: P0): R;
    setArray_forKey<R = void, P0 = unknown, P1 = unknown>(_setArray: P0, _forKey: P1): R;
    arrayForKey<R = unknown, P0 = unknown>(_arrayForKey: P0): R;
    setString_forKey<R = void, P0 = unknown, P1 = unknown>(_setString: P0, _forKey: P1): R;
    stringForKey<R = unknown, P0 = unknown>(_stringForKey: P0): R;
    maximumTotalDataLength<R = number>(): R;
    maximumDataLengthPerKey<R = number>(): R;
    maximumKeyLength<R = number>(): R;
    maximumKeyCount<R = number>(): R;
    _sendPingToDaemon<R = void>(): R;
    _unregisterFromDaemon<R = void>(): R;
    _registerToDaemon<R = void>(): R;
    _configurationDidChange<R = void>(): R;
    _sourceDidChange<R = void, P0 = unknown>(__sourceDidChange: P0): R;
    synchronize<R = boolean>(): R;
    _synchronizeForced<R = boolean, P0 = boolean>(__synchronizeForced: P0): R;
    _synchronizeForced_notificationQueue<R = boolean, P0 = boolean, P1 = unknown>(__synchronizeForced: P0, _notificationQueue: P1): R;
    synchronizeWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_synchronizeWithCompletionHandler: P0): R;
    _scheduleRemoteSynchronization<R = void>(): R;
    registerDefaultValues<R = void, P0 = unknown>(_registerDefaultValues: P0): R;
    removeObjectForKey<R = void, P0 = unknown>(_removeObjectForKey: P0): R;
    setObject_forKey<R = void, P0 = unknown, P1 = unknown>(_setObject: P0, _forKey: P1): R;
    _adjustTimerForAutosync<R = void>(): R;
    _adjustTimer<R = void, P0 = unknown>(__adjustTimer: P0): R;
    _syncConcurrently<R = void>(): R;
    _syncConcurrentlyForced<R = void, P0 = boolean>(__syncConcurrentlyForced: P0): R;
    synchronizeWithSourceForced<R = boolean, P0 = boolean>(_synchronizeWithSourceForced: P0): R;
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    _rethrowException<R = void, P0 = unknown>(__rethrowException: P0): R;
    _postDidChangeNotificationExternalChanges_sourceChangeCount<R = boolean, P0 = unknown, P1 = number>(__postDidChangeNotificationExternalChanges: P0, _sourceChangeCount: P1): R;
    _storeChangeFromSourceChange<R = number, P0 = number>(__storeChangeFromSourceChange: P0): R;
    _setHasPendingSynchronize<R = void, P0 = boolean>(__setHasPendingSynchronize: P0): R;
    _hasPendingSynchronize<R = boolean>(): R;
    _setShouldAvoidSynchronize<R = void, P0 = boolean>(__setShouldAvoidSynchronize: P0): R;
    _shouldAvoidSynchronize<R = boolean>(): R;
    dealloc<R = void>(): R;
    initWithBundleIdentifier<R = unknown, P0 = unknown>(_initWithBundleIdentifier: P0): R;
    initWithBundleIdentifier_storeIdentifier<R = unknown, P0 = unknown, P1 = unknown>(_initWithBundleIdentifier: P0, _storeIdentifier: P1): R;
    initWithBundleIdentifier_storeIdentifier_additionalStore<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_initWithBundleIdentifier: P0, _storeIdentifier: P1, _additionalStore: P2): R;
    _useSourceSyncWithBlock<R = void, P0 = CDUnknownBlockType>(__useSourceSyncWithBlock: P0): R;
    _useSourceAsyncWithBlock<R = void, P0 = CDUnknownBlockType>(__useSourceAsyncWithBlock: P0): R;
    _pleaseSynchronize<R = void, P0 = unknown>(__pleaseSynchronize: P0): R;
    dictionaryRepresentation<R = NSDictionary>(): R;
  }
  namespace NSUbiquitousKeyValueStore {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSUbiquitousKeyValueStore>(): R;
      new: <R = NSUbiquitousKeyValueStore>() => R;
      _appWillDeactivate<R = void>(): R;
      _appWillActivate<R = void>(): R;
      _synchronizeStoresForced<R = void, P0 = boolean>(__synchronizeStoresForced: P0): R;
      additionalStoreWithIdentifier<R = unknown, P0 = unknown>(_additionalStoreWithIdentifier: P0): R;
      defaultStore<R = unknown>(): R;
    }
  }
}

declare const NSUbiquitousKeyValueStore: cocoa.NSUbiquitousKeyValueStore.CLASS;
