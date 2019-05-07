/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPalettePresetItem<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem {
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionNames<R = unknown>(): R;
    accessibilityHitTest<R = unknown, P0 = CGPoint>(_accessibilityHitTest: P0): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityRoleAttribute<R = unknown>(): R;
  }
  namespace NSTouchBarCustomizationPalettePresetItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem {
      alloc<R = NSTouchBarCustomizationPalettePresetItem>(): R;
      new: <R = NSTouchBarCustomizationPalettePresetItem>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPalettePresetItem: cocoa.NSTouchBarCustomizationPalettePresetItem.CLASS;
