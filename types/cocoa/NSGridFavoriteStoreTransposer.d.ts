/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGridFavoriteStoreTransposer<T0 = void, T1 = void, T2 = void> extends NSFavoriteColorsStore, NSFavoriteColorsStoreConcreteSubclassProtocol {
    baseStoreDidChange<R = void, P0 = unknown>(_baseStoreDidChange: P0): R;
    initWithGridStore_numRows_numColumns<R = unknown, P0 = unknown, P1 = number, P2 = number>(_initWithGridStore: P0, _numRows: P1, _numColumns: P2): R;
  }
  namespace NSGridFavoriteStoreTransposer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFavoriteColorsStore, NSFavoriteColorsStoreConcreteSubclassProtocol {
      alloc<R = NSGridFavoriteStoreTransposer>(): R;
      new: <R = NSGridFavoriteStoreTransposer>() => R;
    }
  }
}

declare const NSGridFavoriteStoreTransposer: cocoa.NSGridFavoriteStoreTransposer.CLASS;
