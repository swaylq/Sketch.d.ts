/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDirectoryTraversalOperation<T0 = void, T1 = void, T2 = void> extends NSOperation {
    _validatePaths<R = boolean, P0 = unknown>(__validatePaths: P0): R;
    _handleFTSEntry<R = void, P0 = _ftsent>(__handleFTSEntry: P0): R;
    shouldProceedAfterError<R = boolean, P0 = unknown>(_shouldProceedAfterError: P0): R;
    _setError<R = void, P0 = unknown>(__setError: P0): R;
    error<R = unknown>(): R;
    _shouldFilterEntry<R = boolean, P0 = _ftsent>(__shouldFilterEntry: P0): R;
    handlePathname<R = void, P0 = unknown>(_handlePathname: P0): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    delegate<R = unknown>(): R;
    initWithPath<R = unknown, P0 = unknown>(_initWithPath: P0): R;
  }
  namespace NSDirectoryTraversalOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOperation {
      alloc<R = NSDirectoryTraversalOperation>(): R;
      new: <R = NSDirectoryTraversalOperation>() => R;
      directoryTraversalOperationAtPath<R = unknown, P0 = unknown>(_directoryTraversalOperationAtPath: P0): R;
      _needsStatInfo<R = boolean>(): R;
      _errorWithErrno_atPath<R = unknown, P0 = number, P1 = unknown>(__errorWithErrno: P0, _atPath: P1): R;
    }
  }
}

declare const NSDirectoryTraversalOperation: cocoa.NSDirectoryTraversalOperation.CLASS;
