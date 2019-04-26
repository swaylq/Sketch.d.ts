/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableAssetCollection<T0 = void, T1 = void, T2 = void> extends _MSImmutableAssetCollection {
    migratePropertiesFromV74OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV74OrEarlierWithUnarchiver: P0): R;
  }
  namespace MSImmutableAssetCollection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableAssetCollection {
      alloc<R = MSImmutableAssetCollection>(): R;
      new: <R = MSImmutableAssetCollection>() => R;
    }
  }
}

declare const MSImmutableAssetCollection: cocoa.MSImmutableAssetCollection.CLASS;
