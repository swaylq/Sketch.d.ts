/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpdateController<T0 = void, T1 = void, T2 = void> extends NSObject, SUUpdaterDelegateProtocol {
    checkerWithAppcast<R = unknown, P0 = unknown>(_checkerWithAppcast: P0): R;
    parseAppcast_withCompletion<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_parseAppcast: P0, _withCompletion: P1): R;
    storeResultsFromChecker<R = void, P0 = unknown>(_storeResultsFromChecker: P0): R;
    appCastFetchFailedWithError<R = void, P0 = unknown>(_appCastFetchFailedWithError: P0): R;
    fetchAppcastWithCompletion<R = void, P0 = CDUnknownBlockType>(_fetchAppcastWithCompletion: P0): R;
    commandLabel<R = unknown>(): R;
    commandEnabled<R = boolean>(): R;
    checkNormally<R = void>(): R;
    checkSilently<R = void>(): R;
    checkQuietly<R = void>(): R;
    updateInProgress<R = boolean>(): R;
    setUpdateInProgress<R = void, P0 = boolean>(_v: P0): R;
    hasAvailableUpdates<R = boolean>(): R;
    setHasAvailableUpdates<R = void, P0 = boolean>(_v: P0): R;
    unavailableUpdateCount<R = number>(): R;
    setUnavailableUpdateCount<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSUpdateController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, SUUpdaterDelegateProtocol {
      alloc<R = MSUpdateController>(): R;
      new: <R = MSUpdateController>() => R;
    }
  }
}

declare const MSUpdateController: cocoa.MSUpdateController.CLASS;
