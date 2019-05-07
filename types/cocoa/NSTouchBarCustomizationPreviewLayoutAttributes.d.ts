/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewLayoutAttributes<T0 = void, T1 = void, T2 = void> extends NSCollectionViewLayoutAttributes {
    isEqual<R = boolean, P0 = unknown>(_isEqual: P0): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    description<R = unknown>(): R;
    showsAppState<R = boolean>(): R;
    setShowsAppState<R = void, P0 = boolean>(_v: P0): R;
    isSpace<R = boolean>(): R;
    setIsSpace<R = void, P0 = boolean>(_v: P0): R;
    itemState<R = number>(): R;
    setItemState<R = void, P0 = number>(_v: P0): R;
    editable<R = boolean>(): R;
    setEditable<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSTouchBarCustomizationPreviewLayoutAttributes {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewLayoutAttributes {}
  }
}

declare const NSTouchBarCustomizationPreviewLayoutAttributes: cocoa.NSTouchBarCustomizationPreviewLayoutAttributes.CLASS;
