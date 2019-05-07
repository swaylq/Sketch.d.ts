/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOperation<T0 = void, T1 = void, T2 = void> extends NSObject {
    __graphDescription<R = unknown, P0 = number>(___graphDescription: P0): R;
    debugDescription<R = unknown>(): R;
    removeObserver_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_removeObserver: P0, _forKeyPath: P1): R;
    addObserver_forKeyPath_options_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = void>(_addObserver: P0, _forKeyPath: P1, _options: P2, _context: P3): R;
    _activity<R = unknown>(): R;
    description<R = unknown>(): R;
    start<R = void>(): R;
    main<R = void>(): R;
    removeAllDependencies<R = void>(): R;
    removeDependency<R = void, P0 = unknown>(_removeDependency: P0): R;
    addDependency<R = void, P0 = unknown>(_addDependency: P0): R;
    waitUntilFinishedOrTimeout<R = void, P0 = number>(_waitUntilFinishedOrTimeout: P0): R;
    waitUntilFinished<R = void>(): R;
    _copyCompletionBlock<R = CDUnknownBlockType>(): R;
    cancel<R = void>(): R;
    dealloc<R = void>(): R;
    setObservationInfo<R = void, P0 = void>(_setObservationInfo: P0): R;
    observationInfo<R = void>(): R;
    _implicitObservationInfo<R = unknown>(): R;
    dependencies<R = NSArray>(): R;
    qualityOfService<R = number>(): R;
    setQualityOfService<R = void, P0 = number>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    completionBlock<R = CDUnknownBlockType>(): R;
    setCompletionBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    threadPriority<R = number>(): R;
    setThreadPriority<R = void, P0 = number>(_v: P0): R;
    queuePriority<R = number>(): R;
    setQueuePriority<R = void, P0 = number>(_v: P0): R;
    ready<R = boolean>(): R;
    asynchronous<R = boolean>(): R;
    concurrent<R = boolean>(): R;
    finished<R = boolean>(): R;
    executing<R = boolean>(): R;
    cancelled<R = boolean>(): R;
  }
  namespace NSOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSOperation>(): R;
      new: <R = NSOperation>() => R;
      _removesDependenciesAfterFinish<R = boolean>(): R;
      currentOperation<R = unknown>(): R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
      keyPathsForValuesAffectingIsCancelled<R = unknown>(): R;
      keyPathsForValuesAffectingCancelled<R = unknown>(): R;
      keyPathsForValuesAffectingIsExecuting<R = unknown>(): R;
      keyPathsForValuesAffectingExecuting<R = unknown>(): R;
      keyPathsForValuesAffectingIsReady<R = unknown>(): R;
      keyPathsForValuesAffectingReady<R = unknown>(): R;
      keyPathsForValuesAffectingIsFinished<R = unknown>(): R;
      keyPathsForValuesAffectingFinished<R = unknown>(): R;
    }
  }
}

declare const NSOperation: cocoa.NSOperation.CLASS;
