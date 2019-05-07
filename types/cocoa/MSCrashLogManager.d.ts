/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCrashLogManager<T0 = void, T1 = void, T2 = void> extends NSObject, MSActionObserverProtocol, BITHockeyManagerDelegateProtocol, BITCrashManagerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    setup<R = boolean>(): R;
    environmentText<R = unknown>(): R;
    logText<R = unknown>(): R;
    appSupportURL<R = unknown>(): R;
    setEnvironmentValue_forKey<R = void, P0 = unknown, P1 = unknown>(_setEnvironmentValue: P0, _forKey: P1): R;
    log<R = void, P0 = unknown>(_log: P0): R;
    text<R = NSString>(): R;
    environment<R = NSDictionary>(): R;
    items<R = NSArray>(): R;
    environmentURL<R = NSURL>(): R;
    logURL<R = NSURL>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSCrashLogManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSActionObserverProtocol, BITHockeyManagerDelegateProtocol, BITCrashManagerDelegateProtocol {
      alloc<R = MSCrashLogManager>(): R;
      new: <R = MSCrashLogManager>() => R;
    }
  }
}

declare const MSCrashLogManager: cocoa.MSCrashLogManager.CLASS;
