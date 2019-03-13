/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUIActivityProviderProtocol<T = any> extends NSObjectProtocol {
    _cleanUpUserActivity<R = void>(): R;
    _didRestoreUserActivity<R = void, P0 = NSUserActivity>(__didRestoreUserActivity: P0): R;
    _becomeCurrentUserActivityIfNecessary<R = void>(): R;
    userActivityWasContinued<R = void, P0 = NSUserActivity>(_userActivityWasContinued: P0): R;
    restoreUserActivityState<R = void, P0 = NSUserActivity>(_restoreUserActivityState: P0): R;
    updateUserActivityState<R = void, P0 = NSUserActivity>(_updateUserActivityState: P0): R;
    userActivity<R = NSUserActivity>(): R;
    setUserActivity<R = void, P0 = NSUserActivity>(_v: P0): R;
  }
  namespace classes {
    export interface NSUIActivityProviderProtocol<T = any> extends NSObjectProtocol {  }
  }
}
