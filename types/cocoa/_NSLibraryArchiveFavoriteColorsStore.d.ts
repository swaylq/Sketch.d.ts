/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLibraryArchiveFavoriteColorsStore<T0 = void, T1 = void, T2 = void> extends NSFavoriteColorsStore, NSFavoriteColorsStoreConcreteSubclassProtocol {
    postDistributedNotification<R = void>(): R;
    remoteColorsDidChange<R = void, P0 = unknown>(_remoteColorsDidChange: P0): R;
    initWithFileURL<R = unknown, P0 = unknown>(_initWithFileURL: P0): R;
  }
  namespace _NSLibraryArchiveFavoriteColorsStore {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFavoriteColorsStore, NSFavoriteColorsStoreConcreteSubclassProtocol {
      alloc<R = _NSLibraryArchiveFavoriteColorsStore>(): R;
      new: <R = _NSLibraryArchiveFavoriteColorsStore>() => R;
    }
  }
}
