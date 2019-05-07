/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSActivityAssertion<T0 = void, T1 = void, T2 = void> extends NSObject {
    _reactivate<R = void>(): R;
    _end<R = void>(): R;
    debugDescription<R = unknown>(): R;
    dealloc<R = void>(): R;
    _initWithActivityOptions_reason_expirationHandler<R = unknown, P0 = number, P1 = unknown, P2 = CDUnknownBlockType>(__initWithActivityOptions: P0, _reason: P1, _expirationHandler: P2): R;
  }
  namespace _NSActivityAssertion {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSActivityAssertion>(): R;
      new: <R = _NSActivityAssertion>() => R;
      _performActivityWithOptions_reason_usingBlock<R = void, P0 = number, P1 = unknown, P2 = CDUnknownBlockType>(__performActivityWithOptions: P0, _reason: P1, _usingBlock: P2): R;
      _dumpExpiringActivitives<R = void>(): R;
      _expiringActivities<R = unknown>(): R;
      _expirationHandlerExecutionQueue<R = unknown>(): R;
      _expiringTaskExecutionQueue<R = unknown>(): R;
      _expiringAssertionManagementQueue<R = unknown>(): R;
    }
  }
}
