/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSBundleTables<T0 = void, T1 = void, T2 = void> extends NSObject {
    loadedBundles<R = unknown>(): R;
    allBundles<R = unknown>(): R;
    allFrameworks<R = unknown>(): R;
    bundleForClass<R = unknown, P0 = unknown>(_bundleForClass: P0): R;
    addStaticFrameworkBundles<R = void, P0 = unknown>(_addStaticFrameworkBundles: P0): R;
    addBundle_forPath_withType_forClass_isImmortal<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = boolean>(_addBundle: P0, _forPath: P1, _withType: P2, _forClass: P3, _isImmortal: P4): R;
    bundleForPath<R = unknown, P0 = unknown>(_bundleForPath: P0): R;
    removeBundle_forPath_type<R = void, P0 = unknown, P1 = unknown, P2 = number>(_removeBundle: P0, _forPath: P1, _type: P2): R;
    dealloc<R = void>(): R;
  }
  namespace __NSBundleTables {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = __NSBundleTables>(): R;
      new: <R = __NSBundleTables>() => R;
      bundleTables<R = unknown>(): R;
    }
  }
}
