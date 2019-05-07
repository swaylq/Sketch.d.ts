/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLegacyFilePromiseCoordinator<T0 = void, T1 = void, T2 = void> extends NSObject {
    _resolvePendingMatches<R = void>(): R;
    run<R = void>(): R;
    runUntilDone<R = void>(): R;
    quit<R = void>(): R;
    enqueueTargetUrls<R = boolean, P0 = unknown>(_enqueueTargetUrls: P0): R;
    waitForPromisedURLsToBeWrittenToDisk_error<R = boolean, P0 = unknown, P1 = unknown>(_waitForPromisedURLsToBeWrittenToDisk: P0, _error: P1): R;
    _main<R = void>(): R;
    dealloc<R = void>(): R;
    completionHandler<R = CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    pathReadyForReadingHandler<R = CDUnknownBlockType>(): R;
    setPathReadyForReadingHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    destinationUrl<R = NSURL>(): R;
    setDestinationUrl<R = void, P0 = NSURL>(_v: P0): R;
    remainingTargetUrls<R = NSArray>(): R;
  }
  namespace _NSLegacyFilePromiseCoordinator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSLegacyFilePromiseCoordinator>(): R;
      new: <R = _NSLegacyFilePromiseCoordinator>() => R;
    }
  }
}
