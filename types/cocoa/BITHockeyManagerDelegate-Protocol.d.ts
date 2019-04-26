/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BITHockeyManagerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, BITCrashManagerDelegateProtocol {
    userEmailForHockeyManager_componentManager<R = NSString, P0 = BITHockeyManager, P1 = BITHockeyBaseManager>(_userEmailForHockeyManager: P0, _componentManager: P1): R;
    userNameForHockeyManager_componentManager<R = NSString, P0 = BITHockeyManager, P1 = BITHockeyBaseManager>(_userNameForHockeyManager: P0, _componentManager: P1): R;
    userIDForHockeyManager_componentManager<R = NSString, P0 = BITHockeyManager, P1 = BITHockeyBaseManager>(_userIDForHockeyManager: P0, _componentManager: P1): R;
  }
  namespace BITHockeyManagerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, BITCrashManagerDelegateProtocol {}
  }
}
