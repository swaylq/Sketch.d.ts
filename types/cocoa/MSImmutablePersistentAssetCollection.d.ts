/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutablePersistentAssetCollection<T0 = void, T1 = void, T2 = void> extends MSImmutableAssetCollection {}
  namespace MSImmutablePersistentAssetCollection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableAssetCollection {
      alloc<R = MSImmutablePersistentAssetCollection>(): R;
      new: <R = MSImmutablePersistentAssetCollection>() => R;
    }
  }
}

declare const MSImmutablePersistentAssetCollection: cocoa.MSImmutablePersistentAssetCollection.CLASS;
