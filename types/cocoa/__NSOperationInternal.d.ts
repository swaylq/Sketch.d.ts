/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSOperationInternal<T0 = void, T1 = void, T2 = void> extends NSObject {
    _activity<R = unknown>(): R;
    _start<R = void, P0 = unknown>(__start: P0): R;
    _dependencies<R = unknown>(): R;
    _removeAllDependencies<R = void, P0 = unknown>(__removeAllDependencies: P0): R;
    _removeDependency_outer<R = void, P0 = unknown, P1 = unknown>(__removeDependency: P0, _outer: P1): R;
    _addDependency_outer<R = void, P0 = unknown, P1 = unknown>(__addDependency: P0, _outer: P1): R;
    _waitUntilFinishedOrTimeout_outer<R = void, P0 = number, P1 = unknown>(__waitUntilFinishedOrTimeout: P0, _outer: P1): R;
    _waitUntilFinished<R = void, P0 = unknown>(__waitUntilFinished: P0): R;
    _setName_outer<R = void, P0 = unknown, P1 = unknown>(__setName: P0, _outer: P1): R;
    _name<R = unknown>(): R;
    _setCompletionBlock_outer<R = void, P0 = CDUnknownBlockType, P1 = unknown>(__setCompletionBlock: P0, _outer: P1): R;
    _completionBlock<R = CDUnknownBlockType>(): R;
    _copyCompletionBlock<R = CDUnknownBlockType>(): R;
    _setThreadPriority_outer<R = void, P0 = number, P1 = unknown>(__setThreadPriority: P0, _outer: P1): R;
    _threadPriority<R = number>(): R;
    _setQueuePriority_outer<R = void, P0 = number, P1 = unknown>(__setQueuePriority: P0, _outer: P1): R;
    _queuePriority<R = number>(): R;
    _isReady<R = boolean>(): R;
    _isFinished<R = boolean>(): R;
    _isExecuting<R = boolean>(): R;
    _cancel<R = void, P0 = unknown>(__cancel: P0): R;
    _isCancelled<R = boolean>(): R;
    dealloc<R = void>(): R;
    _invalidate<R = void>(): R;
  }
  namespace __NSOperationInternal {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = __NSOperationInternal>(): R;
      new: <R = __NSOperationInternal>() => R;
      _observeValueForKeyPath_ofObject_changeKind_oldValue_newValue_indexes_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = unknown, P5 = unknown, P6 = void>(__observeValueForKeyPath: P0, _ofObject: P1, _changeKind: P2, _oldValue: P3, _newValue: P4, _indexes: P5, _context: P6): R;
    }
  }
}
