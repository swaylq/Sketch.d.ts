/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    windowDidChangeOcclusionState<R = void, P0 = NSNotification>(_windowDidChangeOcclusionState: P0): R;
    windowDidExitVersionBrowser<R = void, P0 = NSNotification>(_windowDidExitVersionBrowser: P0): R;
    windowWillExitVersionBrowser<R = void, P0 = NSNotification>(_windowWillExitVersionBrowser: P0): R;
    windowDidEnterVersionBrowser<R = void, P0 = NSNotification>(_windowDidEnterVersionBrowser: P0): R;
    windowWillEnterVersionBrowser<R = void, P0 = NSNotification>(_windowWillEnterVersionBrowser: P0): R;
    windowDidExitFullScreen<R = void, P0 = NSNotification>(_windowDidExitFullScreen: P0): R;
    windowWillExitFullScreen<R = void, P0 = NSNotification>(_windowWillExitFullScreen: P0): R;
    windowDidEnterFullScreen<R = void, P0 = NSNotification>(_windowDidEnterFullScreen: P0): R;
    windowWillEnterFullScreen<R = void, P0 = NSNotification>(_windowWillEnterFullScreen: P0): R;
    windowDidEndLiveResize<R = void, P0 = NSNotification>(_windowDidEndLiveResize: P0): R;
    windowWillStartLiveResize<R = void, P0 = NSNotification>(_windowWillStartLiveResize: P0): R;
    windowDidEndSheet<R = void, P0 = NSNotification>(_windowDidEndSheet: P0): R;
    windowWillBeginSheet<R = void, P0 = NSNotification>(_windowWillBeginSheet: P0): R;
    windowDidChangeBackingProperties<R = void, P0 = NSNotification>(_windowDidChangeBackingProperties: P0): R;
    windowDidChangeScreenProfile<R = void, P0 = NSNotification>(_windowDidChangeScreenProfile: P0): R;
    windowDidChangeScreen<R = void, P0 = NSNotification>(_windowDidChangeScreen: P0): R;
    windowDidUpdate<R = void, P0 = NSNotification>(_windowDidUpdate: P0): R;
    windowDidDeminiaturize<R = void, P0 = NSNotification>(_windowDidDeminiaturize: P0): R;
    windowDidMiniaturize<R = void, P0 = NSNotification>(_windowDidMiniaturize: P0): R;
    windowWillMiniaturize<R = void, P0 = NSNotification>(_windowWillMiniaturize: P0): R;
    windowWillClose<R = void, P0 = NSNotification>(_windowWillClose: P0): R;
    windowDidResignMain<R = void, P0 = NSNotification>(_windowDidResignMain: P0): R;
    windowDidBecomeMain<R = void, P0 = NSNotification>(_windowDidBecomeMain: P0): R;
    windowDidResignKey<R = void, P0 = NSNotification>(_windowDidResignKey: P0): R;
    windowDidBecomeKey<R = void, P0 = NSNotification>(_windowDidBecomeKey: P0): R;
    windowDidMove<R = void, P0 = NSNotification>(_windowDidMove: P0): R;
    windowWillMove<R = void, P0 = NSNotification>(_windowWillMove: P0): R;
    windowDidExpose<R = void, P0 = NSNotification>(_windowDidExpose: P0): R;
    windowDidResize<R = void, P0 = NSNotification>(_windowDidResize: P0): R;
    window_didDecodeRestorableState<R = void, P0 = NSWindow, P1 = NSCoder>(_window: P0, _didDecodeRestorableState: P1): R;
    window_willEncodeRestorableState<R = void, P0 = NSWindow, P1 = NSCoder>(_window: P0, _willEncodeRestorableState: P1): R;
    window_willResizeForVersionBrowserWithMaxPreferredSize_maxAllowedSize<R = CGSize, P0 = NSWindow, P1 = CGSize, P2 = CGSize>(_window: P0, _willResizeForVersionBrowserWithMaxPreferredSize: P1, _maxAllowedSize: P2): R;
    windowDidFailToExitFullScreen<R = void, P0 = NSWindow>(_windowDidFailToExitFullScreen: P0): R;
    window_startCustomAnimationToEnterFullScreenOnScreen_withDuration<R = void, P0 = NSWindow, P1 = NSScreen, P2 = number>(_window: P0, _startCustomAnimationToEnterFullScreenOnScreen: P1, _withDuration: P2): R;
    customWindowsToEnterFullScreenForWindow_onScreen<R = NSArray, P0 = NSWindow, P1 = NSScreen>(_customWindowsToEnterFullScreenForWindow: P0, _onScreen: P1): R;
    window_startCustomAnimationToExitFullScreenWithDuration<R = void, P0 = NSWindow, P1 = number>(_window: P0, _startCustomAnimationToExitFullScreenWithDuration: P1): R;
    customWindowsToExitFullScreenForWindow<R = NSArray, P0 = NSWindow>(_customWindowsToExitFullScreenForWindow: P0): R;
    windowDidFailToEnterFullScreen<R = void, P0 = NSWindow>(_windowDidFailToEnterFullScreen: P0): R;
    window_startCustomAnimationToEnterFullScreenWithDuration<R = void, P0 = NSWindow, P1 = number>(_window: P0, _startCustomAnimationToEnterFullScreenWithDuration: P1): R;
    customWindowsToEnterFullScreenForWindow<R = NSArray, P0 = NSWindow>(_customWindowsToEnterFullScreenForWindow: P0): R;
    window_willUseFullScreenPresentationOptions<R = number, P0 = NSWindow, P1 = number>(_window: P0, _willUseFullScreenPresentationOptions: P1): R;
    window_willUseFullScreenContentSize<R = CGSize, P0 = NSWindow, P1 = CGSize>(_window: P0, _willUseFullScreenContentSize: P1): R;
    window_shouldDragDocumentWithEvent_from_withPasteboard<R = boolean, P0 = NSWindow, P1 = NSEvent, P2 = CGPoint, P3 = NSPasteboard>(_window: P0, _shouldDragDocumentWithEvent: P1, _from: P2, _withPasteboard: P3): R;
    window_shouldPopUpDocumentPathMenu<R = boolean, P0 = NSWindow, P1 = NSMenu>(_window: P0, _shouldPopUpDocumentPathMenu: P1): R;
    window_willPositionSheet_usingRect<R = CGRect, P0 = NSWindow, P1 = NSWindow, P2 = CGRect>(_window: P0, _willPositionSheet: P1, _usingRect: P2): R;
    windowWillReturnUndoManager<R = NSUndoManager, P0 = NSWindow>(_windowWillReturnUndoManager: P0): R;
    windowShouldZoom_toFrame<R = boolean, P0 = NSWindow, P1 = CGRect>(_windowShouldZoom: P0, _toFrame: P1): R;
    windowWillUseStandardFrame_defaultFrame<R = CGRect, P0 = NSWindow, P1 = CGRect>(_windowWillUseStandardFrame: P0, _defaultFrame: P1): R;
    windowWillResize_toSize<R = CGSize, P0 = NSWindow, P1 = CGSize>(_windowWillResize: P0, _toSize: P1): R;
    windowWillReturnFieldEditor_toObject<R = unknown, P0 = NSWindow, P1 = unknown>(_windowWillReturnFieldEditor: P0, _toObject: P1): R;
    windowShouldClose<R = boolean, P0 = NSWindow>(_windowShouldClose: P0): R;
  }
  namespace NSWindowDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
