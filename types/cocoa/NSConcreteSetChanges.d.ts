/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteSetChanges<T0 = void, T1 = void, T2 = void> extends NSSetChanges {
    dealloc<R = void>(): R;
    description<R = unknown>(): R;
    _fault<R = void>(): R;
    changeCount<R = number>(): R;
    transformObjectsWithBlock<R = void, P0 = CDUnknownBlockType>(_transformObjectsWithBlock: P0): R;
    filterObjectsWithTest<R = void, P0 = CDUnknownBlockType>(_filterObjectsWithTest: P0): R;
    unionSet<R = void, P0 = unknown>(_unionSet: P0): R;
    removeAllObjects<R = void>(): R;
    minusSet<R = void, P0 = unknown>(_minusSet: P0): R;
    setSet<R = void, P0 = unknown>(_setSet: P0): R;
    intersectSet<R = void, P0 = unknown>(_intersectSet: P0): R;
    addObjectsFromArray<R = void, P0 = unknown>(_addObjectsFromArray: P0): R;
    _willChange<R = void>(): R;
    initWithSet<R = unknown, P0 = unknown>(_initWithSet: P0): R;
    initWithObjects_count<R = unknown, P0 = unknown, P1 = number>(_initWithObjects: P0, _count: P1): R;
    initWithCapacity<R = unknown, P0 = number>(_initWithCapacity: P0): R;
    init<R = unknown>(): R;
    objectEnumerator<R = unknown>(): R;
    member<R = unknown, P0 = unknown>(_member: P0): R;
    count<R = number>(): R;
  }
  namespace NSConcreteSetChanges {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSetChanges {}
  }
}

declare const NSConcreteSetChanges: cocoa.NSConcreteSetChanges.CLASS;
