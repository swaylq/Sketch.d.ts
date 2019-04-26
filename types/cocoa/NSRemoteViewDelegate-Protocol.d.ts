/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRemoteViewDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    constraintsDidChangeInFrameOfAccessoryWindowOfView<R = void, P0 = NSRemoteView>(_constraintsDidChangeInFrameOfAccessoryWindowOfView: P0): R;
    accessoryWindowOfViewWillUpdateConstraintsIfNeeded<R = void, P0 = NSRemoteView>(_accessoryWindowOfViewWillUpdateConstraintsIfNeeded: P0): R;
    windowOfViewShouldResignKey<R = boolean, P0 = NSRemoteView>(_windowOfViewShouldResignKey: P0): R;
    windowOfViewShouldBecomeKey<R = boolean, P0 = NSRemoteView>(_windowOfViewShouldBecomeKey: P0): R;
    viewShouldDragOldestAncestorWindow<R = boolean, P0 = NSRemoteView>(_viewShouldDragOldestAncestorWindow: P0): R;
    view_shouldResize<R = boolean, P0 = NSRemoteView, P1 = CGSize>(_view: P0, _shouldResize: P1): R;
    view_willHaveServiceFontSmoothingBackgroundColor<R = NSColor, P0 = NSRemoteView, P1 = NSColor>(_view: P0, _willHaveServiceFontSmoothingBackgroundColor: P1): R;
    viewDidRetreatToConfigPhase<R = void, P0 = NSRemoteView>(_viewDidRetreatToConfigPhase: P0): R;
    viewDidAdvanceToRunPhase<R = void, P0 = NSRemoteView>(_viewDidAdvanceToRunPhase: P0): R;
    viewDidAdvanceToConfigPhase<R = void, P0 = NSRemoteView>(_viewDidAdvanceToConfigPhase: P0): R;
    viewDidInvalidate<R = void, P0 = NSRemoteView>(_viewDidInvalidate: P0): R;
    viewWillInvalidate<R = void, P0 = NSRemoteView>(_viewWillInvalidate: P0): R;
    view_encounteredError<R = void, P0 = NSRemoteView, P1 = NSError>(_view: P0, _encounteredError: P1): R;
    exportedObject<R = NSObject>(): R;
    exportedInterface<R = NSXPCInterface>(): R;
    serviceViewControllerInterface<R = NSXPCInterface>(): R;
    shouldRetainExportedObject<R = boolean>(): R;
  }
  namespace NSRemoteViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
