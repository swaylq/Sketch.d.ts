/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTreeNodeObservingTracker<T0 = void, T1 = void, T2 = void> extends NSObject {
    stopObservingModelObject<R = void, P0 = unknown>(_stopObservingModelObject: P0): R;
    startObservingModelObject<R = void, P0 = unknown>(_startObservingModelObject: P0): R;
    stopAllModeObjectObserving<R = void>(): R;
    startObservingModelObjectTree<R = void, P0 = unknown>(_startObservingModelObjectTree: P0): R;
    _stopObservingModelObject<R = void, P0 = unknown>(__stopObservingModelObject: P0): R;
    _startObservingModelObject<R = void, P0 = unknown>(__startObservingModelObject: P0): R;
    _registerOrUnregister_observerNotificationsForKeyPath<R = void, P0 = boolean, P1 = unknown>(__registerOrUnregister: P0, _observerNotificationsForKeyPath: P1): R;
    _registerOrUnregister_observerNotificationsForModelObject<R = void, P0 = boolean, P1 = unknown>(__registerOrUnregister: P0, _observerNotificationsForModelObject: P1): R;
    _registerOrUnregister_observerNotificationsForKeyPath_ofModelObject<R = void, P0 = boolean, P1 = unknown, P2 = unknown>(__registerOrUnregister: P0, _observerNotificationsForKeyPath: P1, _ofModelObject: P2): R;
    unregisterModelKeyPath<R = void, P0 = unknown>(_unregisterModelKeyPath: P0): R;
    registerModelKeyPath<R = void, P0 = unknown>(_registerModelKeyPath: P0): R;
    unregisterObservingForAnalyzableKeyPath<R = void, P0 = unknown>(_unregisterObservingForAnalyzableKeyPath: P0): R;
    registerObservingForAnalyzableKeyPath<R = void, P0 = unknown>(_registerObservingForAnalyzableKeyPath: P0): R;
    registersObservingWithKVOPriorKey<R = boolean>(): R;
    setRegistersObservingWithKVOPriorKey<R = void, P0 = boolean>(_setRegistersObservingWithKVOPriorKey: P0): R;
    dealloc<R = void>(): R;
    initWithModelObserver_availableModelAndProxyKeys<R = unknown, P0 = unknown, P1 = unknown>(_initWithModelObserver: P0, _availableModelAndProxyKeys: P1): R;
  }
  namespace _NSTreeNodeObservingTracker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSTreeNodeObservingTracker>(): R;
      new: <R = _NSTreeNodeObservingTracker>() => R;
    }
  }
}
