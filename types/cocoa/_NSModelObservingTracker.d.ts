/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSModelObservingTracker<T0 = void, T1 = void, T2 = void> extends NSObject {
    _logObservingInfo<R = void>(): R;
    modelAndProxyKeysObserved<R = unknown>(): R;
    analyzeKeyPath_registerOrUnregister<R = void, P0 = unknown, P1 = boolean>(_analyzeKeyPath: P0, _registerOrUnregister: P1): R;
    removeObservedKey<R = void, P0 = unknown>(_removeObservedKey: P0): R;
    addObservedKey<R = void, P0 = unknown>(_addObservedKey: P0): R;
    registerModelKeyPaths_unregisterModelKeyPaths<R = void, P0 = unknown, P1 = unknown>(_registerModelKeyPaths: P0, _unregisterModelKeyPaths: P1): R;
    unregisterModelKeyPath<R = void, P0 = unknown>(_unregisterModelKeyPath: P0): R;
    registerModelKeyPath<R = void, P0 = unknown>(_registerModelKeyPath: P0): R;
    clearAllModelObjectObserving<R = void>(): R;
    stopObservingModelObject<R = void, P0 = unknown>(_stopObservingModelObject: P0): R;
    startObservingModelObject<R = void, P0 = unknown>(_startObservingModelObject: P0): R;
    setObservingToModelObjectsRange<R = void, P0 = _NSRange>(_setObservingToModelObjectsRange: P0): R;
    stopObservingModelObjectsAtReferenceIndexes<R = void, P0 = unknown>(_stopObservingModelObjectsAtReferenceIndexes: P0): R;
    startObservingModelObjectsAtReferenceIndexes<R = void, P0 = unknown>(_startObservingModelObjectsAtReferenceIndexes: P0): R;
    stopObservingModelObjectAtReferenceIndex<R = void, P0 = number>(_stopObservingModelObjectAtReferenceIndex: P0): R;
    startObservingModelObjectAtReferenceIndex<R = void, P0 = number>(_startObservingModelObjectAtReferenceIndex: P0): R;
    _stopObservingModelObject<R = void, P0 = unknown>(__stopObservingModelObject: P0): R;
    _startObservingModelObject<R = void, P0 = unknown>(__startObservingModelObject: P0): R;
    _registerOrUnregister_observerNotificationsForKeyPath<R = void, P0 = boolean, P1 = unknown>(__registerOrUnregister: P0, _observerNotificationsForKeyPath: P1): R;
    _registerOrUnregister_observerNotificationsForModelObject<R = void, P0 = boolean, P1 = unknown>(__registerOrUnregister: P0, _observerNotificationsForModelObject: P1): R;
    _registerOrUnregister_observerNotificationsForKeyPath_ofModelObject<R = void, P0 = boolean, P1 = unknown, P2 = unknown>(__registerOrUnregister: P0, _observerNotificationsForKeyPath: P1, _ofModelObject: P2): R;
    updateReferenceIndexesToReflectRemovalAtIndexes<R = void, P0 = unknown>(_updateReferenceIndexesToReflectRemovalAtIndexes: P0): R;
    updateReferenceIndexesToReflectRemovalAtIndex<R = void, P0 = number>(_updateReferenceIndexesToReflectRemovalAtIndex: P0): R;
    updateReferenceIndexesToReflectInsertionAtIndexes<R = void, P0 = unknown>(_updateReferenceIndexesToReflectInsertionAtIndexes: P0): R;
    updateReferenceIndexesToReflectInsertionAtIndex<R = void, P0 = number>(_updateReferenceIndexesToReflectInsertionAtIndex: P0): R;
    replaceIndexReferenceModelObjectArrayWithEqualCopy<R = void, P0 = unknown>(_replaceIndexReferenceModelObjectArrayWithEqualCopy: P0): R;
    indexReferenceModelObjectArray<R = unknown>(): R;
    setIndexReferenceModelObjectArray_clearAllModelObjectObserving<R = void, P0 = unknown, P1 = boolean>(_setIndexReferenceModelObjectArray: P0, _clearAllModelObjectObserving: P1): R;
    dealloc<R = void>(): R;
    _dealloc<R = void>(): R;
    initWithModelObserver_availableModelAndProxyKeys<R = unknown, P0 = unknown, P1 = unknown>(_initWithModelObserver: P0, _availableModelAndProxyKeys: P1): R;
  }
  namespace _NSModelObservingTracker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSModelObservingTracker>(): R;
      new: <R = _NSModelObservingTracker>() => R;
    }
  }
}
