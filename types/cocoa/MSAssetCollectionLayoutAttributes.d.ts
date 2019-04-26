/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetCollectionLayoutAttributes<T0 = void, T1 = void, T2 = void> extends NSCollectionViewLayoutAttributes {
    hash<R = number>(): R;
    isEqual<R = boolean, P0 = unknown>(_isEqual: P0): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    itemSizeMode<R = number>(): R;
    setItemSizeMode<R = void, P0 = number>(_v: P0): R;
    displayMode<R = number>(): R;
    setDisplayMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSAssetCollectionLayoutAttributes {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewLayoutAttributes {}
  }
}

declare const MSAssetCollectionLayoutAttributes: cocoa.MSAssetCollectionLayoutAttributes.CLASS;
