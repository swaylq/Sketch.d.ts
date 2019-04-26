/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFavoriteColorsStoreConcreteSubclassProtocol<T0 = void, T1 = void, T2 = void> {
    colorsFromBacking<R = NSArray>(): R;
    writeColorsToBacking<R = boolean, P0 = NSArray>(_writeColorsToBacking: P0): R;
  }
  namespace NSFavoriteColorsStoreConcreteSubclassProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
