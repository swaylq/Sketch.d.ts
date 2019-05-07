/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReorderingContainerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    containerBackground_dragDidReorderChildAtIndex_toIndex<R = void, P0 = MSReorderingContainerView, P1 = number, P2 = number>(_containerBackground: P0, _dragDidReorderChildAtIndex: P1, _toIndex: P2): R;
    numberOfReorderableSubviewsForContainerBackground<R = number, P0 = MSReorderingContainerView>(_numberOfReorderableSubviewsForContainerBackground: P0): R;
    startingOffsetForStackingContainerBackground<R = number, P0 = MSReorderingContainerView>(_startingOffsetForStackingContainerBackground: P0): R;
  }
  namespace MSReorderingContainerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
