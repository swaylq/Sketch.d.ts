/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCPopover<T0 = void, T1 = void, T2 = void> extends NSObject, NSWindowDelegateProtocol, NSViewControllerPresentationAnimatorProtocol {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    closeIgnoringViewControllerPresentations<R = void>(): R;
    close<R = void>(): R;
    windowRectForViewSize_above_pointingTo_edge<R = CGRect, P0 = CGSize, P1 = CGRect, P2 = CGPoint, P3 = number>(_windowRectForViewSize: P0, _above: P1, _pointingTo: P2, _edge: P3): R;
    pointAtEdge_ofRect<R = CGPoint, P0 = number, P1 = CGRect>(_pointAtEdge: P0, _ofRect: P1): R;
    attachedViewDidMove<R = void, P0 = unknown>(_attachedViewDidMove: P0): R;
    ensureRectFitsInParentWindow<R = CGRect, P0 = CGRect>(_ensureRectFitsInParentWindow: P0): R;
    attachToPointInScreenCoordinates<R = CGPoint>(): R;
    screenAnchorRect<R = CGRect>(): R;
    popoverWindowFrame<R = CGRect>(): R;
    screenFrame<R = CGRect>(): R;
    popoverArrowPosition<R = number>(): R;
    otherPopoverDidShow<R = void, P0 = unknown>(_otherPopoverDidShow: P0): R;
    contentViewDidResizeNotification<R = void, P0 = unknown>(_contentViewDidResizeNotification: P0): R;
    attachedWindowDidMove<R = void, P0 = unknown>(_attachedWindowDidMove: P0): R;
    configureNotifications<R = void, P0 = unknown>(_configureNotifications: P0): R;
    move<R = void>(): R;
    showRelativeToView_preferredEdge<R = void, P0 = unknown, P1 = number>(_showRelativeToView: P0, _preferredEdge: P1): R;
    closed<R = boolean>(): R;
    setClosed<R = void, P0 = boolean>(_v: P0): R;
    preferredEdge<R = number>(): R;
    setPreferredEdge<R = void, P0 = number>(_v: P0): R;
    attachedToViewMargin<R = number>(): R;
    setAttachedToViewMargin<R = void, P0 = number>(_v: P0): R;
    attachedToView<R = NSView>(): R;
    setAttachedToView<R = void, P0 = NSView>(_v: P0): R;
    closesOnWindowDidResignKey<R = boolean>(): R;
    setClosesOnWindowDidResignKey<R = void, P0 = boolean>(_v: P0): R;
    layerDependency<R = number>(): R;
    setLayerDependency<R = void, P0 = number>(_v: P0): R;
    screenEdgeBehaviour<R = number>(): R;
    setScreenEdgeBehaviour<R = void, P0 = number>(_v: P0): R;
    window<R = BCPopoverWindow>(): R;
    setWindow<R = void, P0 = BCPopoverWindow>(_v: P0): R;
    delegate<R = BCPopoverDelegate>(): R;
    setDelegate<R = void, P0 = BCPopoverDelegate>(_v: P0): R;
    contentViewController<R = NSViewController>(): R;
    setContentViewController<R = void, P0 = NSViewController>(_v: P0): R;
    minimumHeight<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace BCPopover {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSWindowDelegateProtocol, NSViewControllerPresentationAnimatorProtocol {
      alloc<R = BCPopover>(): R;
      new: <R = BCPopover>() => R;
    }
  }
}

declare const BCPopover: cocoa.BCPopover.CLASS;
