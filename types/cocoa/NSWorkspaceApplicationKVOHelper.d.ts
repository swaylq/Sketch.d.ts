/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWorkspaceApplicationKVOHelper<T0 = void, T1 = void, T2 = void> extends NSObject {
    applications<R = unknown>(): R;
    _installStalenessObserver<R = void>(): R;
    unobservedAppsPropertyBecameStale<R = void>(): R;
    dealloc<R = void>(): R;
    initWithKVOHelperIndex<R = unknown, P0 = number>(_initWithKVOHelperIndex: P0): R;
    removeObserver<R = void, P0 = unknown>(_removeObserver: P0): R;
    addObserver<R = void, P0 = unknown>(_addObserver: P0): R;
    _unregisterForApplicationNotifications<R = void>(): R;
    noteIndividualAppChanged<R = void, P0 = __LSASN>(_noteIndividualAppChanged: P0): R;
    noteAppTALChange_appInfo<R = void, P0 = __LSASN, P1 = unknown>(_noteAppTALChange: P0, _appInfo: P1): R;
    noteAppDeath_appInfo<R = void, P0 = __LSASN, P1 = unknown>(_noteAppDeath: P0, _appInfo: P1): R;
    noteAppBirth_appInfo<R = void, P0 = __LSASN, P1 = unknown>(_noteAppBirth: P0, _appInfo: P1): R;
    removeApplication<R = void, P0 = __LSASN>(_removeApplication: P0): R;
    addApplication<R = void, P0 = __LSASN>(_addApplication: P0): R;
    _indexOfApplicationWithASN<R = number, P0 = __LSASN>(__indexOfApplicationWithASN: P0): R;
    _registerForApplicationNotifications<R = void>(): R;
    keyPath<R = unknown>(): R;
    data<R = WorkspaceKVOData_t>(): R;
  }
  namespace NSWorkspaceApplicationKVOHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSWorkspaceApplicationKVOHelper>(): R;
      new: <R = NSWorkspaceApplicationKVOHelper>() => R;
    }
  }
}

declare const NSWorkspaceApplicationKVOHelper: cocoa.NSWorkspaceApplicationKVOHelper.CLASS;
