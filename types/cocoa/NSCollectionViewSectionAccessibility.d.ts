/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewSectionAccessibility<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElement {
    setAccessibilityVisibleChildren<R = void, P0 = unknown>(_setAccessibilityVisibleChildren: P0): R;
    description<R = unknown>(): R;
    accessibilityPerformScrollToVisible<R = boolean>(): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionDescription<R = unknown, P0 = unknown>(_accessibilityActionDescription: P0): R;
    accessibilityActionNames<R = unknown>(): R;
    accessibilityArrayAttributeValues_index_maxCount<R = unknown, P0 = unknown, P1 = number, P2 = number>(_accessibilityArrayAttributeValues: P0, _index: P1, _maxCount: P2): R;
    accessibilityArrayAttributeCount<R = number, P0 = unknown>(_accessibilityArrayAttributeCount: P0): R;
    accessibilityIndexOfChild<R = number, P0 = unknown>(_accessibilityIndexOfChild: P0): R;
    accessibilityTopLevelUIElement<R = unknown>(): R;
    accessibilityWindow<R = unknown>(): R;
    accessibilityOrientation<R = number>(): R;
    __accessibilityLabel<R = unknown>(): R;
    accessibilityLabel<R = unknown>(): R;
    accessibilityVisibleChildren<R = unknown>(): R;
    accessibilityChildren<R = unknown>(): R;
    accessibilitySubrole<R = unknown>(): R;
    accessibilityRole<R = unknown>(): R;
    isAccessibilityElement<R = boolean>(): R;
    compare<R = number, P0 = unknown>(_compare: P0): R;
    hasSupplementaryFooterView<R = boolean>(): R;
    hasSupplementaryHeaderView<R = boolean>(): R;
    supplementaryFooterView<R = unknown, P0 = boolean>(_supplementaryFooterView: P0): R;
    supplementaryHeaderView<R = unknown, P0 = boolean>(_supplementaryHeaderView: P0): R;
    _supplementaryView_elementKind_indexPath<R = unknown, P0 = boolean, P1 = unknown, P2 = unknown>(__supplementaryView: P0, _elementKind: P1, _indexPath: P2): R;
    offsetForSupplementaryHeaderView<R = number>(): R;
    _makeSupplementaryViewForElementKind_atIndexPath<R = unknown, P0 = unknown, P1 = unknown>(__makeSupplementaryViewForElementKind: P0, _atIndexPath: P1): R;
    _hasSupplementaryViewForElementKind<R = boolean, P0 = unknown>(__hasSupplementaryViewForElementKind: P0): R;
    visibleItemsInSection<R = unknown, P0 = number>(_visibleItemsInSection: P0): R;
    visibleSupplementaryViewsInSection<R = unknown, P0 = number>(_visibleSupplementaryViewsInSection: P0): R;
    _dumpVisibleChildren<R = void>(): R;
    firstElementInSection<R = unknown, P0 = boolean>(_firstElementInSection: P0): R;
    lastElementInSection<R = unknown, P0 = boolean>(_lastElementInSection: P0): R;
    accessibilityPrepareLayout<R = void>(): R;
    accessibilityInvalidateLayout<R = void>(): R;
    accessibilityDidEndScrolling<R = void>(): R;
    initWithCollectionViewAccessibility<R = unknown, P0 = unknown>(_initWithCollectionViewAccessibility: P0): R;
    supplementaryFooterElement<R = NSCollectionViewFooterAccessibility>(): R;
    supplementaryHeaderElement<R = NSCollectionViewHeaderAccessibility>(): R;
    collectionView<R = NSCollectionView>(): R;
    collectionViewAccessibility<R = NSCollectionViewAccessibilityHelper>(): R;
  }
  namespace NSCollectionViewSectionAccessibility {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElement {
      alloc<R = NSCollectionViewSectionAccessibility>(): R;
      new: <R = NSCollectionViewSectionAccessibility>() => R;
    }
  }
}

declare const NSCollectionViewSectionAccessibility: cocoa.NSCollectionViewSectionAccessibility.CLASS;
