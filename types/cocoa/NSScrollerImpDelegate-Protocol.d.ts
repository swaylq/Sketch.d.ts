/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrollerImpDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    scrollerImp_overlayScrollerStateChangedTo<R = void, P0 = NSScrollerImp, P1 = number>(_scrollerImp: P0, _overlayScrollerStateChangedTo: P1): R;
    scrollerImp_animateTrackAlphaTo_duration<R = void, P0 = NSScrollerImp, P1 = number, P2 = number>(_scrollerImp: P0, _animateTrackAlphaTo: P1, _duration: P2): R;
    scrollerImp_animateKnobAlphaTo_duration<R = void, P0 = NSScrollerImp, P1 = number, P2 = number>(_scrollerImp: P0, _animateKnobAlphaTo: P1, _duration: P2): R;
    layer<R = CALayer>(): R;
    convertRectFromBacking<R = CGRect, P0 = CGRect>(_convertRectFromBacking: P0): R;
    convertRectToBacking<R = CGRect, P0 = CGRect>(_convertRectToBacking: P0): R;
    shouldUseLayerPerPartForScrollerImp<R = boolean, P0 = NSScrollerImp>(_shouldUseLayerPerPartForScrollerImp: P0): R;
    convertRectToLayer<R = CGRect, P0 = CGRect>(_convertRectToLayer: P0): R;
    mouseLocationInScrollerForScrollerImp<R = CGPoint, P0 = NSScrollerImp>(_mouseLocationInScrollerForScrollerImp: P0): R;
    scrollerImp_animateExpansionTransitionWithDuration<R = void, P0 = NSScrollerImp, P1 = number>(_scrollerImp: P0, _animateExpansionTransitionWithDuration: P1): R;
    scrollerImp_animateUIStateTransitionWithDuration<R = void, P0 = NSScrollerImp, P1 = number>(_scrollerImp: P0, _animateUIStateTransitionWithDuration: P1): R;
  }
  namespace NSScrollerImpDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
