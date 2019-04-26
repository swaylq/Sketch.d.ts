/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewAccessibilityHelper<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElement {
    accessibilitySelectedChildrenDidChange<R = void>(): R;
    _dequeueSectionWithIndex<R = unknown, P0 = number>(__dequeueSectionWithIndex: P0): R;
    _trimSectionCacheToVisibleSections<R = void, P0 = unknown>(__trimSectionCacheToVisibleSections: P0): R;
    _visibleSections<R = unknown>(): R;
    accessibilityArrayAttributeValues_index_maxCount<R = unknown, P0 = unknown, P1 = number, P2 = number>(_accessibilityArrayAttributeValues: P0, _index: P1, _maxCount: P2): R;
    accessibilityArrayAttributeCount<R = number, P0 = unknown>(_accessibilityArrayAttributeCount: P0): R;
    accessibilityIndexOfChild<R = number, P0 = unknown>(_accessibilityIndexOfChild: P0): R;
    setAccessibilitySelectedChildren<R = void, P0 = unknown>(_setAccessibilitySelectedChildren: P0): R;
    accessibilitySelectedChildren<R = unknown>(): R;
    accessibilityChildren<R = unknown>(): R;
    accessibilityColumnCount<R = number>(): R;
    accessibilityRowCount<R = number>(): R;
    accessibilityRoleDescription<R = unknown>(): R;
    accessibilitySubrole<R = unknown>(): R;
    accessibilityRole<R = unknown>(): R;
    nextSectionForSection<R = unknown, P0 = unknown>(_nextSectionForSection: P0): R;
    previousSectionForSection<R = unknown, P0 = unknown>(_previousSectionForSection: P0): R;
    accessibilityParentForView<R = unknown, P0 = unknown>(_accessibilityParentForView: P0): R;
    accessibilityParentForItem<R = unknown, P0 = unknown>(_accessibilityParentForItem: P0): R;
    _dumpVisibleChildren<R = void>(): R;
    accessibilityPrepareLayout<R = void>(): R;
    accessibilityInvalidateLayout<R = void>(): R;
    accessibilityDidEndScrolling<R = void>(): R;
    initWithLayout<R = unknown, P0 = unknown>(_initWithLayout: P0): R;
    _sectionCacheOffset<R = number>(): R;
    set_sectionCacheOffset<R = void, P0 = number>(_v: P0): R;
    sectionAccessibilityClass<R = unknown>(): R;
    setSectionAccessibilityClass<R = void, P0 = unknown>(_v: P0): R;
    _sectionCache<R = NSMutableArray>(): R;
    accessibilityVisibleChildren<R = NSArray>(): R;
    collectionView<R = NSCollectionView>(): R;
    layout<R = NSCollectionViewLayout>(): R;
    setLayout<R = void, P0 = NSCollectionViewLayout>(_v: P0): R;
    accessibilitySelectedCells<R = NSArray>(): R;
    setAccessibilitySelectedCells<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace NSCollectionViewAccessibilityHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElement {
      alloc<R = NSCollectionViewAccessibilityHelper>(): R;
      new: <R = NSCollectionViewAccessibilityHelper>() => R;
    }
  }
}

declare const NSCollectionViewAccessibilityHelper: cocoa.NSCollectionViewAccessibilityHelper.CLASS;
