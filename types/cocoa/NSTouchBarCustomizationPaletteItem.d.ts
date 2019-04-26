/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteItem<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem {
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionNames<R = unknown>(): R;
    accessibilityHitTest<R = unknown, P0 = CGPoint>(_accessibilityHitTest: P0): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityRoleAttribute<R = unknown>(): R;
  }
  namespace NSTouchBarCustomizationPaletteItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem {
      alloc<R = NSTouchBarCustomizationPaletteItem>(): R;
      new: <R = NSTouchBarCustomizationPaletteItem>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteItem: cocoa.NSTouchBarCustomizationPaletteItem.CLASS;
