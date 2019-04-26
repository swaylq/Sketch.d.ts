/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPersistentAssetCollection<T0 = void, T1 = void, T2 = void> extends MSAssetCollection {
    applyDefaultExportPresetsIfNeeded<R = void>(): R;
    resourceNeedingMigration<R = unknown>(): R;
    cleanupAfterTesting<R = void>(): R;
    save<R = void>(): R;
    archive<R = MSVersionedArchive>(): R;
    setArchive<R = void, P0 = MSVersionedArchive>(_v: P0): R;
  }
  namespace MSPersistentAssetCollection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAssetCollection {
      alloc<R = MSPersistentAssetCollection>(): R;
      new: <R = MSPersistentAssetCollection>() => R;
      defaultExportPresets<R = unknown>(): R;
      assetCollectionWithName<R = unknown, P0 = unknown>(_assetCollectionWithName: P0): R;
      assetCollectionByMigratingPresetsFromSources<R = unknown, P0 = unknown>(_assetCollectionByMigratingPresetsFromSources: P0): R;
      defaultMigrationArchiveForPresetNamed<R = unknown, P0 = unknown>(_defaultMigrationArchiveForPresetNamed: P0): R;
      defaultMigrationSources<R = unknown>(): R;
    }
  }
}

declare const MSPersistentAssetCollection: cocoa.MSPersistentAssetCollection.CLASS;
