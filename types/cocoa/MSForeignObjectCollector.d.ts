/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSForeignObjectCollector<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    buildCollectionWithFilter<R = unknown, P0 = CDUnknownBlockType>(_buildCollectionWithFilter: P0): R;
    enumerateForeignObjects<R = void, P0 = CDUnknownBlockType>(_enumerateForeignObjects: P0): R;
    buildLibraryToSharedObjectMap<R = unknown>(): R;
    initWithProvider<R = unknown, P0 = unknown>(_initWithProvider: P0): R;
    filter<R = CDUnknownBlockType>(): R;
    setFilter<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    provider<R = MSForeignObjectProvider>(): R;
  }
  namespace MSForeignObjectCollector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSForeignObjectCollector>(): R;
      new: <R = MSForeignObjectCollector>() => R;
    }
  }
}

declare const MSForeignObjectCollector: cocoa.MSForeignObjectCollector.CLASS;
