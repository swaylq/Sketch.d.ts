/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSplitViewDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    splitViewDidResizeSubviews<R = void, P0 = NSNotification>(_splitViewDidResizeSubviews: P0): R;
    splitViewWillResizeSubviews<R = void, P0 = NSNotification>(_splitViewWillResizeSubviews: P0): R;
    splitView_additionalEffectiveRectOfDividerAtIndex<R = CGRect, P0 = NSSplitView, P1 = number>(_splitView: P0, _additionalEffectiveRectOfDividerAtIndex: P1): R;
    splitView_effectiveRect_forDrawnRect_ofDividerAtIndex<R = CGRect, P0 = NSSplitView, P1 = CGRect, P2 = CGRect, P3 = number>(_splitView: P0, _effectiveRect: P1, _forDrawnRect: P2, _ofDividerAtIndex: P3): R;
    splitView_shouldHideDividerAtIndex<R = boolean, P0 = NSSplitView, P1 = number>(_splitView: P0, _shouldHideDividerAtIndex: P1): R;
    splitView_shouldAdjustSizeOfSubview<R = boolean, P0 = NSSplitView, P1 = NSView>(_splitView: P0, _shouldAdjustSizeOfSubview: P1): R;
    splitView_resizeSubviewsWithOldSize<R = void, P0 = NSSplitView, P1 = CGSize>(_splitView: P0, _resizeSubviewsWithOldSize: P1): R;
    splitView_constrainSplitPosition_ofSubviewAt<R = number, P0 = NSSplitView, P1 = number, P2 = number>(_splitView: P0, _constrainSplitPosition: P1, _ofSubviewAt: P2): R;
    splitView_constrainMaxCoordinate_ofSubviewAt<R = number, P0 = NSSplitView, P1 = number, P2 = number>(_splitView: P0, _constrainMaxCoordinate: P1, _ofSubviewAt: P2): R;
    splitView_constrainMinCoordinate_ofSubviewAt<R = number, P0 = NSSplitView, P1 = number, P2 = number>(_splitView: P0, _constrainMinCoordinate: P1, _ofSubviewAt: P2): R;
    splitView_shouldCollapseSubview_forDoubleClickOnDividerAtIndex<R = boolean, P0 = NSSplitView, P1 = NSView, P2 = number>(_splitView: P0, _shouldCollapseSubview: P1, _forDoubleClickOnDividerAtIndex: P2): R;
    splitView_canCollapseSubview<R = boolean, P0 = NSSplitView, P1 = NSView>(_splitView: P0, _canCollapseSubview: P1): R;
  }
  namespace NSSplitViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
