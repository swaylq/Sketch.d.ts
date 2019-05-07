/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardSystemCategories<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSArtboardSystemCategories {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSArtboardSystemCategories>(): R;
      new: <R = MSArtboardSystemCategories>() => R;
      defaultCategories<R = unknown>(): R;
    }
  }
}

declare const MSArtboardSystemCategories: cocoa.MSArtboardSystemCategories.CLASS;
