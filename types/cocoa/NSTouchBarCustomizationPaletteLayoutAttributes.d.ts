/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteLayoutAttributes<T0 = void, T1 = void, T2 = void> extends NSCollectionViewLayoutAttributes {
    isEqual<R = boolean, P0 = unknown>(_isEqual: P0): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    description<R = unknown>(): R;
    scaleFactor<R = number>(): R;
    setScaleFactor<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSTouchBarCustomizationPaletteLayoutAttributes {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewLayoutAttributes {}
  }
}

declare const NSTouchBarCustomizationPaletteLayoutAttributes: cocoa.NSTouchBarCustomizationPaletteLayoutAttributes.CLASS;
