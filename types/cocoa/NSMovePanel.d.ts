/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMovePanel<T0 = void, T1 = void, T2 = void> extends NSPanel {
    _setAlertInformativeMessage<R = void, P0 = unknown>(__setAlertInformativeMessage: P0): R;
    _setAlertMessage<R = void, P0 = unknown>(__setAlertMessage: P0): R;
    _useAlertStyle<R = boolean>(): R;
    _setUseAlertStyle<R = void, P0 = boolean>(__setUseAlertStyle: P0): R;
    _initContentView<R = void>(): R;
    setContentView<R = void, P0 = unknown>(_setContentView: P0): R;
    _layoutAndResizeMovePanelIfNecessary<R = void>(): R;
    _adjustMinContentSizeForMinFrameSize<R = CGSize>(): R;
    _computeMinSizeForSimpleMovePanel<R = CGSize>(): R;
    newDocument<R = void, P0 = unknown>(_newDocument: P0): R;
    ok<R = void, P0 = unknown>(_ok: P0): R;
    dismissWindow<R = void, P0 = number>(_dismissWindow: P0): R;
    _didPresentErrorWithRecovery_contextInfo<R = void, P0 = boolean, P1 = void>(__didPresentErrorWithRecovery: P0, _contextInfo: P1): R;
    _okForMoveMode<R = void, P0 = CDUnknownBlockType>(__okForMoveMode: P0): R;
    _sendToDelegateValidateFilenameOrURL_error<R = boolean, P0 = unknown, P1 = unknown>(__sendToDelegateValidateFilenameOrURL: P0, _error: P1): R;
    _refreshDelegateOptions<R = void>(): R;
    _didEndSheet_returnCode_contextInfo<R = void, P0 = unknown, P1 = number, P2 = void>(__didEndSheet: P0, _returnCode: P1, _contextInfo: P2): R;
    _completeMoveForReturnCode<R = void, P0 = number>(__completeMoveForReturnCode: P0): R;
    _closeAndCallCompletionHandlerWithReturnCode<R = void, P0 = number>(__closeAndCallCompletionHandlerWithReturnCode: P0): R;
    _removeExtraRetainIfNeeded<R = void>(): R;
    beginWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_beginWithCompletionHandler: P0): R;
    beginSheetModalForWindow_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_beginSheetModalForWindow: P0, _completionHandler: P1): R;
    _isModalWindowOrSheetRunning<R = boolean>(): R;
    setMovePopupFieldLabel<R = void, P0 = unknown>(_setMovePopupFieldLabel: P0): R;
    movePopupFieldLabel<R = unknown>(): R;
    setTitle<R = void, P0 = unknown>(_setTitle: P0): R;
    title<R = unknown>(): R;
    setDirectoryURL<R = void, P0 = unknown>(_setDirectoryURL: P0): R;
    directoryURL<R = unknown>(): R;
    _updateOkButtonEnabledState<R = void>(): R;
    _selectFirstKeyView<R = void>(): R;
    finderLocationPopUpOtherLocation<R = void, P0 = unknown>(_finderLocationPopUpOtherLocation: P0): R;
    finderLocationPopUpMenuOptions<R = number, P0 = unknown>(_finderLocationPopUpMenuOptions: P0): R;
    finderLocationPopUpRequestRecentPlaces<R = unknown, P0 = unknown>(_finderLocationPopUpRequestRecentPlaces: P0): R;
    finderLocationPopUp_didChangeToDirectoryURL<R = void, P0 = unknown, P1 = unknown>(_finderLocationPopUp: P0, _didChangeToDirectoryURL: P1): R;
    _configureMovePopUp<R = void>(): R;
    _hostAppAuditToken<R = unknown>(): R;
    _ubiquityContainerURLs<R = unknown>(): R;
    fileName<R = NSString>(): R;
    setFileName<R = void, P0 = NSString>(_v: P0): R;
    delegate<R = NSMovePanelDelegate>(): R;
    setDelegate<R = void, P0 = NSMovePanelDelegate>(_v: P0): R;
    prompt<R = NSString>(): R;
    setPrompt<R = void, P0 = NSString>(_v: P0): R;
    finalURL<R = NSURL>(): R;
    URL<R = NSURL>(): R;
    setURL<R = void, P0 = NSURL>(_v: P0): R;
    initialURL<R = NSURL>(): R;
    setInitialURL<R = void, P0 = NSURL>(_v: P0): R;
  }
  namespace NSMovePanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = NSMovePanel>(): R;
      new: <R = NSMovePanel>() => R;
      _minContentRectSize<R = CGSize>(): R;
      movePanel<R = unknown>(): R;
      newRemoteMovePanel<R = unknown>(): R;
    }
  }
}

declare const NSMovePanel: cocoa.NSMovePanel.CLASS;
