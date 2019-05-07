/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewGridLayout<T0 = void, T1 = void, T2 = void> extends NSCollectionViewLayout {
    dealloc<R = void>(): R;
    _shouldRelayoutImmediatelyForNewCollectionViewSize<R = boolean>(): R;
    shouldInvalidateLayoutForBoundsChange<R = boolean, P0 = CGRect>(_shouldInvalidateLayoutForBoundsChange: P0): R;
    layoutAttributesForInterItemGapBeforeIndexPath<R = unknown, P0 = unknown>(_layoutAttributesForInterItemGapBeforeIndexPath: P0): R;
    layoutAttributesForDropTargetAtPoint<R = unknown, P0 = CGPoint>(_layoutAttributesForDropTargetAtPoint: P0): R;
    layoutAttributesForItemAtIndexPath<R = unknown, P0 = unknown>(_layoutAttributesForItemAtIndexPath: P0): R;
    layoutAttributesForElementsInRect<R = unknown, P0 = CGRect>(_layoutAttributesForElementsInRect: P0): R;
    collectionViewContentSize<R = CGSize>(): R;
    prepareLayout<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    init<R = unknown>(): R;
    _hitTestPoint_usingBlock<R = void, P0 = CGPoint, P1 = CDUnknownBlockType>(__hitTestPoint: P0, _usingBlock: P1): R;
    _updateGridSettingsWithPrototype<R = void>(): R;
    scrollDirection<R = number>(): R;
    _filledViewShouldExtendVertically<R = boolean>(): R;
    _computeGridConfigurationWithSize<R = unknown, P0 = CGSize>(__computeGridConfigurationWithSize: P0): R;
    _computeGridConfigurationWithSize_count<R = unknown, P0 = CGSize, P1 = number>(__computeGridConfigurationWithSize: P0, _count: P1): R;
    _computeGridConfiguration<R = unknown>(): R;
    _computeGridConfigurationWithCount<R = unknown, P0 = number>(__computeGridConfigurationWithCount: P0): R;
    _currentGridConfiguration<R = unknown>(): R;
    backgroundColors<R = NSArray>(): R;
    setBackgroundColors<R = void, P0 = NSArray>(_v: P0): R;
    maximumItemSize<R = CGSize>(): R;
    setMaximumItemSize<R = void, P0 = CGSize>(_v: P0): R;
    minimumItemSize<R = CGSize>(): R;
    setMinimumItemSize<R = void, P0 = CGSize>(_v: P0): R;
    maximumNumberOfColumns<R = number>(): R;
    setMaximumNumberOfColumns<R = void, P0 = number>(_v: P0): R;
    maximumNumberOfRows<R = number>(): R;
    setMaximumNumberOfRows<R = void, P0 = number>(_v: P0): R;
    minimumLineSpacing<R = number>(): R;
    setMinimumLineSpacing<R = void, P0 = number>(_v: P0): R;
    minimumInteritemSpacing<R = number>(): R;
    setMinimumInteritemSpacing<R = void, P0 = number>(_v: P0): R;
    margins<R = NSEdgeInsets>(): R;
    setMargins<R = void, P0 = NSEdgeInsets>(_v: P0): R;
  }
  namespace NSCollectionViewGridLayout {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewLayout {
      itemLayoutIsSequential<R = boolean>(): R;
    }
  }
}

declare const NSCollectionViewGridLayout: cocoa.NSCollectionViewGridLayout.CLASS;
