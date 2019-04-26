/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentConstantData<T0 = void, T1 = void, T2 = void> extends NSData {
    dealloc<R = void>(): R;
    decelerationRate<R = number>(): R;
    setDecelerationRate<R = void, P0 = number>(_v: P0): R;
    initialClipSize<R = CGSize>(): R;
    setInitialClipSize<R = void, P0 = CGSize>(_v: P0): R;
    initialClipOrigin<R = CGPoint>(): R;
    setInitialClipOrigin<R = void, P0 = CGPoint>(_v: P0): R;
    initialStretchAmount<R = CGSize>(): R;
    setInitialStretchAmount<R = void, P0 = CGSize>(_v: P0): R;
    initialOriginConstraintLoc<R = CGPoint>(): R;
    setInitialOriginConstraintLoc<R = void, P0 = CGPoint>(_v: P0): R;
    initialContentInsets<R = NSEdgeInsets>(): R;
    setInitialContentInsets<R = void, P0 = NSEdgeInsets>(_v: P0): R;
    initialDocumentFrame<R = CGRect>(): R;
    setInitialDocumentFrame<R = void, P0 = CGRect>(_v: P0): R;
    pageAlignmentsVertical<R = NSArray>(): R;
    setPageAlignmentsVertical<R = void, P0 = NSArray>(_v: P0): R;
    pageAlignmentsHorizontal<R = NSArray>(): R;
    setPageAlignmentsHorizontal<R = void, P0 = NSArray>(_v: P0): R;
    synchronizedSiblingsVertical<R = NSArray>(): R;
    setSynchronizedSiblingsVertical<R = void, P0 = NSArray>(_v: P0): R;
    synchronizedSiblingsHorizontal<R = NSArray>(): R;
    setSynchronizedSiblingsHorizontal<R = void, P0 = NSArray>(_v: P0): R;
    scrollingModeVertical<R = number>(): R;
    setScrollingModeVertical<R = void, P0 = number>(_v: P0): R;
    scrollingModeHorizontal<R = number>(): R;
    setScrollingModeHorizontal<R = void, P0 = number>(_v: P0): R;
    hasSwipeForwardingResponder<R = boolean>(): R;
    setHasSwipeForwardingResponder<R = void, P0 = boolean>(_v: P0): R;
    doesDelegateRespondToSynchLayers<R = boolean>(): R;
    setDoesDelegateRespondToSynchLayers<R = void, P0 = boolean>(_v: P0): R;
    isDocumentLayerInclusive<R = boolean>(): R;
    setIsDocumentLayerInclusive<R = void, P0 = boolean>(_v: P0): R;
    allowsVerticalStretching<R = boolean>(): R;
    setAllowsVerticalStretching<R = void, P0 = boolean>(_v: P0): R;
    allowsHorizontalStretching<R = boolean>(): R;
    setAllowsHorizontalStretching<R = void, P0 = boolean>(_v: P0): R;
    usePredominantAxisScrolling<R = boolean>(): R;
    setUsePredominantAxisScrolling<R = void, P0 = boolean>(_v: P0): R;
    isClipViewFlipped<R = boolean>(): R;
    setIsClipViewFlipped<R = void, P0 = boolean>(_v: P0): R;
    affineTransformToClipView<R = CGAffineTransform>(): R;
    setAffineTransformToClipView<R = void, P0 = CGAffineTransform>(_v: P0): R;
    pointsPerPixel<R = CGSize>(): R;
    setPointsPerPixel<R = void, P0 = CGSize>(_v: P0): R;
    documentPerfCategory<R = NSString>(): R;
    setDocumentPerfCategory<R = void, P0 = NSString>(_v: P0): R;
    documentLayer<R = CALayer>(): R;
    setDocumentLayer<R = void, P0 = CALayer>(_v: P0): R;
    documentView<R = NSView>(): R;
    setDocumentView<R = void, P0 = NSView>(_v: P0): R;
    headerClipLayer<R = CALayer>(): R;
    setHeaderClipLayer<R = void, P0 = CALayer>(_v: P0): R;
    headerClipView<R = NSClipView>(): R;
    setHeaderClipView<R = void, P0 = NSClipView>(_v: P0): R;
    clipLayer<R = CALayer>(): R;
    setClipLayer<R = void, P0 = CALayer>(_v: P0): R;
    clipView<R = NSClipView>(): R;
    setClipView<R = void, P0 = NSClipView>(_v: P0): R;
    scrollViewDelegate<R = NSScrollViewDelegate>(): R;
    setScrollViewDelegate<R = void, P0 = NSScrollViewDelegate>(_v: P0): R;
    scrollView<R = NSScrollView>(): R;
    setScrollView<R = void, P0 = NSScrollView>(_v: P0): R;
    window<R = NSWindow>(): R;
    setWindow<R = void, P0 = NSWindow>(_v: P0): R;
  }
  namespace _NSScrollingConcurrentConstantData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSData {
      constantDataWithScrollView_forwardingAxis<R = unknown, P0 = unknown, P1 = number>(_constantDataWithScrollView: P0, _forwardingAxis: P1): R;
    }
  }
}
