/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFavoriteColorsStore<T0 = void, T1 = void, T2 = void> extends NSObject {
    colorsFromBacking<R = unknown>(): R;
    writeColorsToBacking<R = boolean, P0 = unknown>(_writeColorsToBacking: P0): R;
    updateColorsFromBacking<R = void>(): R;
    updatingFromBacking<R = void, P0 = CDUnknownBlockType>(_updatingFromBacking: P0): R;
    deferredWriteColors<R = void>(): R;
    replaceColorAtIndex_withColor<R = void, P0 = number, P1 = unknown>(_replaceColorAtIndex: P0, _withColor: P1): R;
    removeColorAtIndex<R = void, P0 = number>(_removeColorAtIndex: P0): R;
    addColor<R = void, P0 = unknown>(_addColor: P0): R;
    insertColor_atIndex<R = void, P0 = unknown, P1 = number>(_insertColor: P0, _atIndex: P1): R;
    copyColorAtIndex_toIndex<R = void, P0 = number, P1 = number>(_copyColorAtIndex: P0, _toIndex: P1): R;
    moveColorAtIndex_toIndex_replacement<R = void, P0 = number, P1 = number, P2 = boolean>(_moveColorAtIndex: P0, _toIndex: P1, _replacement: P2): R;
    dealloc<R = void>(): R;
    colors<R = NSArray>(): R;
    colorEntries<R = NSArray>(): R;
    setColorEntries<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace NSFavoriteColorsStore {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFavoriteColorsStore>(): R;
      new: <R = NSFavoriteColorsStore>() => R;
      defersBackingUpdates<R = boolean>(): R;
      defaultListCompatibleStore<R = unknown>(): R;
      defaultGridCompatibleStore<R = unknown>(): R;
      defaultStore<R = unknown>(): R;
    }
  }
}

declare const NSFavoriteColorsStore: cocoa.NSFavoriteColorsStore.CLASS;
