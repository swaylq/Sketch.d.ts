/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionItemSourceProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    validRequestorForSendType_returnType<R = NSServicesMenuRequestor, P0 = NSString, P1 = NSString>(_validRequestorForSendType: P0, _returnType: P1): R;
    quickAction_anchoringViewForRequestor_showRelativeToRect_preferredEdge<R = NSView, P0 = _NSQuickAction, P1 = NSServicesRequestor, P2 = CGRect, P3 = number>(_quickAction: P0, _anchoringViewForRequestor: P1, _showRelativeToRect: P2, _preferredEdge: P3): R;
    quickAction_sourceWindowForRequestor<R = NSWindow, P0 = _NSQuickAction, P1 = NSServicesRequestor>(_quickAction: P0, _sourceWindowForRequestor: P1): R;
    quickAction_didFailWithRequestor_error<R = void, P0 = _NSQuickAction, P1 = NSServicesRequestor, P2 = NSError>(_quickAction: P0, _didFailWithRequestor: P1, _error: P2): R;
    quickAction_didPerformWithRequestor<R = void, P0 = _NSQuickAction, P1 = NSServicesRequestor>(_quickAction: P0, _didPerformWithRequestor: P1): R;
    quickAction_willPerformWithRequestor<R = void, P0 = _NSQuickAction, P1 = NSServicesRequestor>(_quickAction: P0, _willPerformWithRequestor: P1): R;
    additionalQuickActionItemSource<R = _NSQuickActionItemSource>(): R;
    servicesRequestor<R = NSServicesRequestor>(): R;
  }
  namespace _NSQuickActionItemSourceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
