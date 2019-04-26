/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCompressionGroupLayout<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    _minimumWidthForCompressionOptions<R = number, P0 = unknown>(__minimumWidthForCompressionOptions: P0): R;
    item_minSize_maxSize_preferredSize<R = void, P0 = unknown, P1 = CGSize, P2 = CGSize, P3 = CGSize>(_item: P0, _minSize: P1, _maxSize: P2, _preferredSize: P3): R;
    _guarenteedWidthForNotBreakingEqualWidths<R = number>(): R;
    _optionPriorToBreakingEqualWidths<R = unknown>(): R;
    _largestPreferredWidthForGroup<R = number>(): R;
    _smallestStretchedWidthForGroup<R = number>(): R;
    _largestStretchedWidthForGroup<R = number>(): R;
    _largestUnstretchedWidthForGroup<R = number>(): R;
    _itemViewWantsAlertStylePadding<R = boolean, P0 = unknown>(__itemViewWantsAlertStylePadding: P0): R;
    _equalMinWidthForGuarenteedEqualWidthGroup<R = number>(): R;
    _equalMaxWidthForGuarenteedEqualWidthGroup<R = number>(): R;
    _defaultCompressionOptionOrder<R = unknown>(): R;
    frameChangesEnded<R = void>(): R;
    _setCurrentCompressionOptions<R = void, P0 = unknown>(__setCurrentCompressionOptions: P0): R;
    _item_setCurrentCompressionOptions<R = void, P0 = unknown, P1 = unknown>(__item: P0, _setCurrentCompressionOptions: P1): R;
    _teardownItems<R = void, P0 = unknown>(__teardownItems: P0): R;
    _setupItems<R = void, P0 = unknown>(__setupItems: P0): R;
    _compressionOptionForItem<R = unknown, P0 = unknown>(__compressionOptionForItem: P0): R;
    _cachedWidthForItem_options<R = number, P0 = unknown, P1 = unknown>(__cachedWidthForItem: P0, _options: P1): R;
    _prioritizedAndSanitizedCompressionOptionsForOptions<R = unknown, P0 = unknown>(__prioritizedAndSanitizedCompressionOptionsForOptions: P0): R;
    invalidateMeasurementsOfItems<R = void>(): R;
    _invalidateMeasurementsOfItem<R = void, P0 = unknown>(__invalidateMeasurementsOfItem: P0): R;
    _itemsExcludingSpaces<R = unknown>(): R;
    _customOptionOrderAllowsOption<R = boolean, P0 = unknown>(__customOptionOrderAllowsOption: P0): R;
    _compoundedCompressionOptions<R = unknown>(): R;
    dealloc<R = void>(): R;
    _requiresReducedMetricAppearance<R = boolean>(): R;
    groupHasAlertStyle<R = boolean>(): R;
    setGroupHasAlertStyle<R = void, P0 = boolean>(_v: P0): R;
    items<R = NSSet>(): R;
    setItems<R = void, P0 = NSSet>(_v: P0): R;
    effectiveCompressionOptions<R = NSUserInterfaceCompressionOptions>(): R;
    prioritizedCompressionOptions<R = NSArray>(): R;
    setPrioritizedCompressionOptions<R = void, P0 = NSArray>(_v: P0): R;
    preferredItemWidth<R = number>(): R;
    setPreferredItemWidth<R = void, P0 = number>(_v: P0): R;
    prefersEqualWidths<R = boolean>(): R;
    setPrefersEqualWidths<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSCompressionGroupLayout {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSCompressionGroupLayout>(): R;
      new: <R = NSCompressionGroupLayout>() => R;
    }
  }
}

declare const NSCompressionGroupLayout: cocoa.NSCompressionGroupLayout.CLASS;
