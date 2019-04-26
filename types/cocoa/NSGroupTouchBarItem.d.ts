/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGroupTouchBarItem<T0 = void, T1 = void, T2 = void> extends NSTouchBarItem, NSTouchBarItemTypeGroupProtocol {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    item_minSize_maxSize_preferredSize<R = void, P0 = unknown, P1 = CGSize, P2 = CGSize, P3 = CGSize>(_item: P0, _minSize: P1, _maxSize: P2, _preferredSize: P3): R;
    _defaultCompressionOptionOrder<R = unknown>(): R;
    _minimumWidthForCompressionOptions<R = number, P0 = unknown>(__minimumWidthForCompressionOptions: P0): R;
    _invalidateMeasurementsOfItem<R = void, P0 = unknown>(__invalidateMeasurementsOfItem: P0): R;
    frameChangesEnded<R = void>(): R;
    compressionGroupLayout<R = unknown>(): R;
    _requiresReducedMetricAppearance<R = boolean>(): R;
    setGroupHasAlertStyle<R = void, P0 = boolean>(_setGroupHasAlertStyle: P0): R;
    groupHasAlertStyle<R = boolean>(): R;
    setHasAutomaticLayoutDirection<R = void, P0 = boolean>(_setHasAutomaticLayoutDirection: P0): R;
    hasAutomaticLayoutDirection<R = boolean>(): R;
    _setGroupItems<R = void, P0 = unknown>(__setGroupItems: P0): R;
    _makeContainerTouchBar<R = unknown>(): R;
    prioritizedCompressionOptions<R = NSArray>(): R;
    setPrioritizedCompressionOptions<R = void, P0 = NSArray>(_v: P0): R;
    effectiveCompressionOptions<R = NSUserInterfaceCompressionOptions>(): R;
    preferredItemWidth<R = number>(): R;
    setPreferredItemWidth<R = void, P0 = number>(_v: P0): R;
    prefersEqualWidths<R = boolean>(): R;
    setPrefersEqualWidths<R = void, P0 = boolean>(_v: P0): R;
    groupUserInterfaceLayoutDirection<R = number>(): R;
    setGroupUserInterfaceLayoutDirection<R = void, P0 = number>(_v: P0): R;
    customizationLabel<R = NSString>(): R;
    setCustomizationLabel<R = void, P0 = NSString>(_v: P0): R;
    groupTouchBar<R = NSTouchBar>(): R;
    setGroupTouchBar<R = void, P0 = NSTouchBar>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSGroupTouchBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarItem, NSTouchBarItemTypeGroupProtocol {
      alloc<R = NSGroupTouchBarItem>(): R;
      new: <R = NSGroupTouchBarItem>() => R;
      keyPathsForValuesAffecting_requiresReducedMetricAppearance<R = unknown>(): R;
      keyPathsForValuesAffectingEffectiveCompressibleUserInterfaceOptions<R = unknown>(): R;
      alertStyleGroupItemWithIdentifier<R = unknown, P0 = unknown>(_alertStyleGroupItemWithIdentifier: P0): R;
      groupItemWithIdentifier_items_allowedCompressionOptions<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_groupItemWithIdentifier: P0, _items: P1, _allowedCompressionOptions: P2): R;
      groupItemWithIdentifier_items<R = unknown, P0 = unknown, P1 = unknown>(_groupItemWithIdentifier: P0, _items: P1): R;
    }
  }
}

declare const NSGroupTouchBarItem: cocoa.NSGroupTouchBarItem.CLASS;
