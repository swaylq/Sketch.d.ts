/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrollerImpPairDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    scrollerImpPair_updateScrollerStyleForNewRecommendedScrollerStyle<R = void, P0 = NSScrollerImpPair, P1 = number>(_scrollerImpPair: P0, _updateScrollerStyleForNewRecommendedScrollerStyle: P1): R;
    scrollerImpPair_setContentAreaNeedsDisplayInRect<R = void, P0 = NSScrollerImpPair, P1 = CGRect>(_scrollerImpPair: P0, _setContentAreaNeedsDisplayInRect: P1): R;
    scrollerImpPair_convertContentPoint_toScrollerImp<R = CGPoint, P0 = NSScrollerImpPair, P1 = CGPoint, P2 = NSScrollerImp>(_scrollerImpPair: P0, _convertContentPoint: P1, _toScrollerImp: P2): R;
    mouseLocationInContentAreaForScrollerImpPair<R = CGPoint, P0 = NSScrollerImpPair>(_mouseLocationInContentAreaForScrollerImpPair: P0): R;
    inLiveResizeForScrollerImpPair<R = boolean, P0 = NSScrollerImpPair>(_inLiveResizeForScrollerImpPair: P0): R;
    contentAreaRectForScrollerImpPair<R = CGRect, P0 = NSScrollerImpPair>(_contentAreaRectForScrollerImpPair: P0): R;
    scrollerImpPair_isContentPointVisible<R = boolean, P0 = NSScrollerImpPair, P1 = CGPoint>(_scrollerImpPair: P0, _isContentPointVisible: P1): R;
  }
  namespace NSScrollerImpPairDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
