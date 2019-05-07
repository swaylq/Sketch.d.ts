/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPanel<T0 = void, T1 = void, T2 = void> extends NSPanel, NSTouchBarColorPickerViewControllerDelegateProtocol {
    _middleViewFrameChanged<R = void, P0 = unknown>(__middleViewFrameChanged: P0): R;
    _colorWellAcceptedColor<R = void, P0 = unknown>(__colorWellAcceptedColor: P0): R;
    _set<R = void, P0 = unknown>(__set: P0): R;
    _forceSetColor<R = void, P0 = unknown>(__forceSetColor: P0): R;
    _switchToAppropriateModeForColorIfNecessary<R = void, P0 = unknown>(__switchToAppropriateModeForColorIfNecessary: P0): R;
    _sendActionAndNotification<R = void>(): R;
    _forceSendAction_notification_firstResponder<R = void, P0 = boolean, P1 = boolean, P2 = boolean>(__forceSendAction: P0, _notification: P1, _firstResponder: P2): R;
    _withColorSettingDisabled<R = void, P0 = CDUnknownBlockType>(__withColorSettingDisabled: P0): R;
    _allowsColorSetting<R = boolean>(): R;
    _startingWindowForSendAction<R = unknown, P0 = string>(__startingWindowForSendAction: P0): R;
    detachColorList<R = void, P0 = unknown>(_detachColorList: P0): R;
    attachColorList<R = void, P0 = unknown>(_attachColorList: P0): R;
    magnifierDidFailToSelectColor<R = void, P0 = unknown>(_magnifierDidFailToSelectColor: P0): R;
    magnifier_didSelectColor<R = void, P0 = unknown, P1 = unknown>(_magnifier: P0, _didSelectColor: P1): R;
    _magnify<R = void, P0 = unknown>(__magnify: P0): R;
    _isCurrentColorPicker<R = boolean, P0 = unknown>(__isCurrentColorPicker: P0): R;
    _switchToPicker<R = void, P0 = unknown>(__switchToPicker: P0): R;
    _sizeWindowForPicker<R = void, P0 = unknown>(__sizeWindowForPicker: P0): R;
    _setMinPickerContentSize<R = void, P0 = CGSize>(__setMinPickerContentSize: P0): R;
    _panelSizeExcludingToolbar<R = CGSize>(): R;
    _switchViewForToolbarItem<R = void, P0 = unknown>(__switchViewForToolbarItem: P0): R;
    _saveMode<R = void>(): R;
    _newLegalSizeFromSize_force_roundDirection<R = CGSize, P0 = CGSize, P1 = boolean, P2 = number>(__newLegalSizeFromSize: P0, _force: P1, _roundDirection: P2): R;
    _syncSwatchSizeToSavedNumVisibleRows<R = void>(): R;
    _setNumVisibleSwatchRows<R = void, P0 = number>(__setNumVisibleSwatchRows: P0): R;
    _arrayForPartialPinningFromArray<R = unknown, P0 = unknown>(__arrayForPartialPinningFromArray: P0): R;
    _unpinViews_resizeMasks<R = void, P0 = unknown, P1 = unknown>(__unpinViews: P0, _resizeMasks: P1): R;
    _pinViews_resizeFlagsToLeaveAlone<R = unknown, P0 = unknown, P1 = number>(__pinViews: P0, _resizeFlagsToLeaveAlone: P1): R;
    _unpinViews<R = void, P0 = unknown>(__unpinViews: P0): R;
    _pinViews<R = void, P0 = unknown>(__pinViews: P0): R;
    _endLiveResize<R = void>(): R;
    _savedMode<R = number>(): R;
    _setupButtonImageAndToolTips<R = void>(): R;
    _removeColorPicker<R = void, P0 = unknown>(__removeColorPicker: P0): R;
    _toolTipForColorPicker<R = unknown, P0 = unknown>(__toolTipForColorPicker: P0): R;
    _appendColorPicker<R = void, P0 = unknown>(__appendColorPicker: P0): R;
    _insertionOrderForPicker<R = number, P0 = unknown>(__insertionOrderForPicker: P0): R;
    _colorPickers<R = unknown>(): R;
    _loadColorPickers<R = void>(): R;
    _timedAdjustTextControl<R = void, P0 = unknown>(__timedAdjustTextControl: P0): R;
    _setShowAlpha_andForce<R = void, P0 = boolean, P1 = boolean>(__setShowAlpha: P0, _andForce: P1): R;
    insertNewline<R = void, P0 = unknown>(_insertNewline: P0): R;
    _cancelKey<R = void, P0 = unknown>(__cancelKey: P0): R;
    _stopModal<R = void, P0 = unknown>(__stopModal: P0): R;
    _adjustedFrameForSaving<R = CGRect, P0 = CGRect>(__adjustedFrameForSaving: P0): R;
    _adjustedFrameFromDefaults<R = CGRect, P0 = CGRect>(__adjustedFrameFromDefaults: P0): R;
    _setUtilityWindow<R = void, P0 = boolean>(__setUtilityWindow: P0): R;
    _setUseModalAppearance<R = void, P0 = boolean>(__setUseModalAppearance: P0): R;
    _changeMinColorPanelSizeByDelta_setWindowFrame<R = void, P0 = CGSize, P1 = boolean>(__changeMinColorPanelSizeByDelta: P0, _setWindowFrame: P1): R;
    _changeMinColorPanelSizeByDelta_compareWithOldMinSize_oldMinSize_setWindowFrame<R = void, P0 = CGSize, P1 = boolean, P2 = CGSize, P3 = boolean>(__changeMinColorPanelSizeByDelta: P0, _compareWithOldMinSize: P1, _oldMinSize: P2, _setWindowFrame: P3): R;
    _resetOpacity<R = void, P0 = unknown>(__resetOpacity: P0): R;
    _resetOpacity_andForceSetColor<R = void, P0 = unknown, P1 = boolean>(__resetOpacity: P0, _andForceSetColor: P1): R;
    _provideNewViewFor_initialViewRequest<R = unknown, P0 = unknown, P1 = boolean>(__provideNewViewFor: P0, _initialViewRequest: P1): R;
    _determinesMinSizeFromAccessoryView<R = boolean, P0 = unknown>(__determinesMinSizeFromAccessoryView: P0): R;
    setColorMask<R = unknown, P0 = number>(_setColorMask: P0): R;
    colorMask<R = number>(): R;
    _storeNewColorInColorWell<R = void, P0 = unknown>(__storeNewColorInColorWell: P0): R;
    _validateOpacitySlider<R = void>(): R;
    isViewOfPickerLoaded<R = boolean, P0 = unknown>(_isViewOfPickerLoaded: P0): R;
    setViewOfPickerIsLoaded<R = void, P0 = unknown>(_setViewOfPickerIsLoaded: P0): R;
    applicationDidBecomeActive<R = void, P0 = unknown>(_applicationDidBecomeActive: P0): R;
    _keyViewFollowingModalButtons<R = unknown>(): R;
    _keyViewPrecedingModalButtons<R = unknown>(): R;
    _keyViewFollowingOpacityViews<R = unknown>(): R;
    _keyViewFollowingAccessoryView<R = unknown>(): R;
    _colorSwatch<R = unknown>(): R;
    _keyViewPrecedingAccesoryView<R = unknown>(): R;
    _keyViewFollowingPickerViews<R = unknown>(): R;
    _keyViewPrecedingPickerViews<R = unknown>(): R;
    _pickerView<R = unknown>(): R;
    _selectFirstKeyView<R = void>(): R;
    becomeKeyWindow<R = void>(): R;
    changeWindowFrameSizeByDelta_display_animate<R = void, P0 = CGSize, P1 = boolean, P2 = boolean>(_changeWindowFrameSizeByDelta: P0, _display: P1, _animate: P2): R;
    _setTitleFixedPointWindowFrame_display_animate<R = void, P0 = CGSize, P1 = boolean, P2 = boolean>(__setTitleFixedPointWindowFrame: P0, _display: P1, _animate: P2): R;
    setHidesOnDeactivate<R = void, P0 = boolean>(_setHidesOnDeactivate: P0): R;
    _colorPanelDidLoad<R = void>(): R;
    __setNumberOfRowsToToggleVisibleInColorSwatch<R = void, P0 = number>(___setNumberOfRowsToToggleVisibleInColorSwatch: P0): R;
    __numberOfRowsToToggleVisibleInColorSwatch<R = number>(): R;
    __numberOfVisibleRowsInColorSwatch<R = number>(): R;
    __action<R = string>(): R;
    __target<R = unknown>(): R;
    color<R = NSColor>(): R;
    setColor<R = void, P0 = NSColor>(_v: P0): R;
    alpha<R = number>(): R;
    showsAlpha<R = boolean>(): R;
    setShowsAlpha<R = void, P0 = boolean>(_v: P0): R;
    usingModalAppearance<R = boolean>(): R;
    setUsingModalAppearance<R = void, P0 = boolean>(_v: P0): R;
    mode<R = number>(): R;
    setMode<R = void, P0 = number>(_v: P0): R;
    continuous<R = boolean>(): R;
    setContinuous<R = void, P0 = boolean>(_v: P0): R;
    accessoryView<R = NSView>(): R;
    setAccessoryView<R = void, P0 = NSView>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + NSColorPanel(NSColorPanelSetColor): 
    setColorWithoutNotifying<R = void, P0 = unknown>(_setColorWithoutNotifying: P0): R;
    shouldIgnoreNonInteractiveChangeColorMessage<R = boolean>(): R;
    shouldIgnoreChangeColorMessage<R = boolean>(): R;
  }
  namespace NSColorPanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel, NSTouchBarColorPickerViewControllerDelegateProtocol {
      alloc<R = NSColorPanel>(): R;
      new: <R = NSColorPanel>() => R;
      _dragColor_withEvent_fromView_source<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(__dragColor: P0, _withEvent: P1, _fromView: P2, _source: P3): R;
      dragColor_withEvent_fromView<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_dragColor: P0, _withEvent: P1, _fromView: P2): R;
      ignoreModifierKeysWhileDragging<R = boolean>(): R;
      draggingSourceOperationMaskForLocal<R = number, P0 = boolean>(_draggingSourceOperationMaskForLocal: P0): R;
      loadsExternalColorPickers<R = boolean>(): R;
      setLoadsExternalColorPickers<R = void, P0 = boolean>(_setLoadsExternalColorPickers: P0): R;
      setPickerMode<R = void, P0 = number>(_setPickerMode: P0): R;
      setPickerMask<R = void, P0 = number>(_setPickerMask: P0): R;
      restoreWindowWithIdentifier_state_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_restoreWindowWithIdentifier: P0, _state: P1, _completionHandler: P2): R;
      sharedColorPanelExists<R = boolean>(): R;
      sharedColorPanel<R = unknown>(): R;
      warmupExternalColorPickersIfNecessary<R = void>(): R;
      keyPathsForValuesAffectingTouchBar<R = unknown>(): R;
  
  }
  }
}

declare const NSColorPanel: cocoa.NSColorPanel.CLASS;
