/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteLayout<T0 = void, T1 = void, T2 = void> extends NSCollectionViewLayout {
    layoutAttributesForDecorationViewOfKind_atIndexPath<R = unknown, P0 = unknown, P1 = unknown>(_layoutAttributesForDecorationViewOfKind: P0, _atIndexPath: P1): R;
    layoutAttributesForItemAtIndexPath<R = unknown, P0 = unknown>(_layoutAttributesForItemAtIndexPath: P0): R;
    layoutAttributesForElementsInRect<R = unknown, P0 = CGRect>(_layoutAttributesForElementsInRect: P0): R;
    prepareLayout<R = void>(): R;
    calculateStatsForItemAtPath_remainingColumns<R = unknown, P0 = unknown, P1 = number>(_calculateStatsForItemAtPath: P0, _remainingColumns: P1): R;
    numberOfSpannedColumns_maxItemWidth_columnWidth_columnSpacing_numRemainingColumns_numberOfColumnsPerRow<R = number, P0 = number, P1 = number, P2 = number, P3 = number, P4 = number, P5 = number>(_numberOfSpannedColumns: P0, _maxItemWidth: P1, _columnWidth: P2, _columnSpacing: P3, _numRemainingColumns: P4, _numberOfColumnsPerRow: P5): R;
    delegate<R = unknown>(): R;
    shouldInvalidateLayoutForBoundsChange<R = boolean, P0 = CGRect>(_shouldInvalidateLayoutForBoundsChange: P0): R;
    collectionViewContentSize<R = CGSize>(): R;
    numberOfColumnsPerRow<R = number>(): R;
    minItemSpacingScaled<R = number>(): R;
    rowHeightScaled<R = number>(): R;
    rowSpacingScaled<R = number>(): R;
    columnSpacingScaled<R = number>(): R;
    columnWidthScaled<R = number>(): R;
    init<R = unknown>(): R;
    edgeInsets<R = NSEdgeInsets>(): R;
    setEdgeInsets<R = void, P0 = NSEdgeInsets>(_v: P0): R;
    flexibleColumnSpan<R = number>(): R;
    setFlexibleColumnSpan<R = void, P0 = number>(_v: P0): R;
    minItemSpacing<R = number>(): R;
    setMinItemSpacing<R = void, P0 = number>(_v: P0): R;
    rowHeight<R = number>(): R;
    setRowHeight<R = void, P0 = number>(_v: P0): R;
    rowSpacing<R = number>(): R;
    setRowSpacing<R = void, P0 = number>(_v: P0): R;
    columnSpacing<R = number>(): R;
    setColumnSpacing<R = void, P0 = number>(_v: P0): R;
    columnWidth<R = number>(): R;
    setColumnWidth<R = void, P0 = number>(_v: P0): R;
    numberOfColumns<R = number>(): R;
    setNumberOfColumns<R = void, P0 = number>(_v: P0): R;
    scaleFactor<R = number>(): R;
    setScaleFactor<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSTouchBarCustomizationPaletteLayout {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewLayout {
      layoutAttributesClass<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteLayout: cocoa.NSTouchBarCustomizationPaletteLayout.CLASS;
