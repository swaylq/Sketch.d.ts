/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewCollectionViewItem<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem, NSGestureRecognizerDelegateProtocol {
    _shouldTrailingJiggle<R = boolean>(): R;
    _shouldLeadingJiggle<R = boolean>(): R;
    _updateJiggle<R = void>(): R;
    preferredViewAppearanceShowingAppState<R = unknown, P0 = boolean>(_preferredViewAppearanceShowingAppState: P0): R;
    _handlePan<R = void, P0 = unknown>(__handlePan: P0): R;
    _handlePress<R = void, P0 = unknown>(__handlePress: P0): R;
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
    accessibilityIsHiddenAttributeSettable<R = boolean>(): R;
    accessibilityHiddenAttribute<R = unknown>(): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionNames<R = unknown>(): R;
    accessibilityHitTest<R = unknown, P0 = CGPoint>(_accessibilityHitTest: P0): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityRoleAttribute<R = unknown>(): R;
    state<R = number>(): R;
    jiggleIndex<R = number>(): R;
    panHandler<R = CDUnknownBlockType>(): R;
    setPanHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    pressHandler<R = CDUnknownBlockType>(): R;
    setPressHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    _shouldJiggle<R = boolean>(): R;
    itemView<R = NSTouchBarCustomizationPreviewItemContainerView>(): R;
    accessibilityActionEntries<R = NSArray>(): R;
    setAccessibilityActionEntries<R = void, P0 = NSArray>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTouchBarCustomizationPreviewCollectionViewItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem, NSGestureRecognizerDelegateProtocol {
      alloc<R = NSTouchBarCustomizationPreviewCollectionViewItem>(): R;
      new: <R = NSTouchBarCustomizationPreviewCollectionViewItem>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewCollectionViewItem: cocoa.NSTouchBarCustomizationPreviewCollectionViewItem.CLASS;
