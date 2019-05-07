/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueFastMutableSet<T0 = void, T1 = void, T2 = void> extends NSKeyValueMutableSet {
    unionSet<R = void, P0 = unknown>(_unionSet: P0): R;
    setSet<R = void, P0 = unknown>(_setSet: P0): R;
    removeObject<R = void, P0 = unknown>(_removeObject: P0): R;
    removeAllObjects<R = void>(): R;
    minusSet<R = void, P0 = unknown>(_minusSet: P0): R;
    intersectSet<R = void, P0 = unknown>(_intersectSet: P0): R;
    addObjectsFromArray<R = void, P0 = unknown>(_addObjectsFromArray: P0): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
  }
  namespace NSKeyValueFastMutableSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueMutableSet {}
  }
}

declare const NSKeyValueFastMutableSet: cocoa.NSKeyValueFastMutableSet.CLASS;
