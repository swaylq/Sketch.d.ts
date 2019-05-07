/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSProgressProxy<T0 = void, T1 = void, T2 = void> extends NSProgress {
    isOld<R = boolean>(): R;
    _acknowledgeWithSuccess<R = void, P0 = boolean>(__acknowledgeWithSuccess: P0): R;
    acknowledgeWithSuccess<R = void, P0 = boolean>(_acknowledgeWithSuccess: P0): R;
    fractionCompleted<R = number>(): R;
    unpublish<R = void>(): R;
    publish<R = void>(): R;
    setFileCompletedCount<R = void, P0 = unknown>(_setFileCompletedCount: P0): R;
    setFileTotalCount<R = void, P0 = unknown>(_setFileTotalCount: P0): R;
    setFileURL<R = void, P0 = unknown>(_setFileURL: P0): R;
    setFileOperationKind<R = void, P0 = unknown>(_setFileOperationKind: P0): R;
    setThroughput<R = void, P0 = unknown>(_setThroughput: P0): R;
    setEstimatedTimeRemaining<R = void, P0 = unknown>(_setEstimatedTimeRemaining: P0): R;
    setKind<R = void, P0 = unknown>(_setKind: P0): R;
    setUserInfoObject_forKey<R = void, P0 = unknown, P1 = unknown>(_setUserInfoObject: P0, _forKey: P1): R;
    setPrioritizationHandler<R = void, P0 = CDUnknownBlockType>(_setPrioritizationHandler: P0): R;
    setPrioritizable<R = void, P0 = boolean>(_setPrioritizable: P0): R;
    setPausingHandler<R = void, P0 = CDUnknownBlockType>(_setPausingHandler: P0): R;
    setCancellationHandler<R = void, P0 = CDUnknownBlockType>(_setCancellationHandler: P0): R;
    setPausable<R = void, P0 = boolean>(_setPausable: P0): R;
    setCancellable<R = void, P0 = boolean>(_setCancellable: P0): R;
    setLocalizedDescription<R = void, P0 = unknown>(_setLocalizedDescription: P0): R;
    setCompletedUnitCount<R = void, P0 = number>(_setCompletedUnitCount: P0): R;
    setTotalUnitCount<R = void, P0 = number>(_setTotalUnitCount: P0): R;
    resignCurrent<R = void>(): R;
    becomeCurrentWithPendingUnitCount<R = void, P0 = number>(_becomeCurrentWithPendingUnitCount: P0): R;
    _setRemoteValues_forKeys<R = void, P0 = unknown, P1 = unknown>(__setRemoteValues: P0, _forKeys: P1): R;
    _setRemoteUserInfoValue_forKey<R = void, P0 = unknown, P1 = unknown>(__setRemoteUserInfoValue: P0, _forKey: P1): R;
    _invokeUnpublishingHandler<R = void>(): R;
    _invokePublishingHandler<R = void, P0 = CDUnknownBlockType>(__invokePublishingHandler: P0): R;
    dealloc<R = void>(): R;
    _initWithForwarder_values_isOld<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(__initWithForwarder: P0, _values: P1, _isOld: P2): R;
  }
  namespace _NSProgressProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSProgress {
      alloc<R = _NSProgressProxy>(): R;
      new: <R = _NSProgressProxy>() => R;
    }
  }
}
