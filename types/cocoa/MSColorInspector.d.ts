/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspector<T0 = void, T1 = void, T2 = void> extends NSViewController, MSColorInspectorSectionDelegateProtocol, BCPopoverDelegateProtocol, NSTouchBarDelegateProtocol, MSStylePartPreviewButtonDelegateProtocol, MSColorPickerViewControllerDelegateProtocol, MSColorModePickerControllerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    touchBarColorAction<R = void, P0 = unknown>(_touchBarColorAction: P0): R;
    customTouchBarItemIdentifiers<R = unknown>(): R;
    adjustInspectorToColorPopoverIfNeeded<R = void, P0 = unknown>(_adjustInspectorToColorPopoverIfNeeded: P0): R;
    colorMagnifierAction<R = void, P0 = unknown>(_colorMagnifierAction: P0): R;
    acceptsFirstResponder<R = boolean>(): R;
    modeDidChangeToFillType_gradientType<R = void, P0 = number, P1 = number>(_modeDidChangeToFillType: P0, _gradientType: P1): R;
    reloadTouchBarsAfterSelectionChange<R = void, P0 = unknown>(_reloadTouchBarsAfterSelectionChange: P0): R;
    reloadTouchBars<R = void>(): R;
    adjustFirstResponder<R = void>(): R;
    refreshTabbingCycle<R = void>(): R;
    filteredStyleParts<R = unknown, P0 = unknown>(_filteredStyleParts: P0): R;
    reflectEffectiveStyleParts<R = void>(): R;
    close<R = void>(): R;
    refreshAction<R = void, P0 = unknown>(_refreshAction: P0): R;
    colorChangedTo<R = void, P0 = unknown>(_colorChangedTo: P0): R;
    setColorWithoutNotifying<R = void, P0 = unknown>(_setColorWithoutNotifying: P0): R;
    setColor<R = void, P0 = unknown>(_setColor: P0): R;
    changeColor<R = void, P0 = unknown>(_changeColor: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    redo<R = void, P0 = unknown>(_redo: P0): R;
    undo<R = void, P0 = unknown>(_undo: P0): R;
    documentRedoAction<R = unknown>(): R;
    documentUndoAction<R = unknown>(): R;
    setMaximumAvailableHeight<R = void, P0 = number>(_setMaximumAvailableHeight: P0): R;
    validateEnableButtons<R = void>(): R;
    currentSection<R = unknown>(): R;
    colorTypePickerModeForStyle<R = number, P0 = unknown>(_colorTypePickerModeForStyle: P0): R;
    stylePartIsGradient<R = boolean, P0 = unknown>(_stylePartIsGradient: P0): R;
    findFrequentImages<R = void>(): R;
    findFrequentColors<R = void>(): R;
    findFrequentObjects<R = void>(): R;
    prepareForDisplay<R = void>(): R;
    setInitialColor<R = void, P0 = unknown>(_setInitialColor: P0): R;
    setModePickerInitialMode<R = void>(): R;
    updateModePickerForCurrentStyles<R = void>(): R;
    initWithSender_document_handlerManager_globalAssets<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithSender: P0, _document: P1, _handlerManager: P2, _globalAssets: P3): R;
    textFieldToContinueEditing<R = NSTextField>(): R;
    setTextFieldToContinueEditing<R = void, P0 = NSTextField>(_v: P0): R;
    colorPickerController<R = MSColorPickerViewController>(): R;
    setColorPickerController<R = void, P0 = MSColorPickerViewController>(_v: P0): R;
    libraryAssetsController<R = MSLibraryAssetCollectionsController>(): R;
    setLibraryAssetsController<R = void, P0 = MSLibraryAssetCollectionsController>(_v: P0): R;
    stackView<R = MSStackView>(): R;
    setStackView<R = void, P0 = MSStackView>(_v: P0): R;
    displayingDiverseStyles<R = boolean>(): R;
    setDisplayingDiverseStyles<R = void, P0 = boolean>(_v: P0): R;
    globalAssets<R = MSPersistentAssetCollection>(): R;
    setGlobalAssets<R = void, P0 = MSPersistentAssetCollection>(_v: P0): R;
    document<R = MSDocument>(): R;
    setDocument<R = void, P0 = MSDocument>(_v: P0): R;
    eventHandlerManager<R = MSEventHandlerManager>(): R;
    setEventHandlerManager<R = void, P0 = MSEventHandlerManager>(_v: P0): R;
    patternSection<R = MSColorInspectorSectionPattern>(): R;
    setPatternSection<R = void, P0 = MSColorInspectorSectionPattern>(_v: P0): R;
    gradientSection<R = MSColorInspectorSectionGradient>(): R;
    setGradientSection<R = void, P0 = MSColorInspectorSectionGradient>(_v: P0): R;
    colorSection<R = MSColorInspectorSectionColor>(): R;
    setColorSection<R = void, P0 = MSColorInspectorSectionColor>(_v: P0): R;
    colorModePickerController<R = MSColorModePickerController>(): R;
    setColorModePickerController<R = void, P0 = MSColorModePickerController>(_v: P0): R;
    delegate<R = MSColorInspectorDelegate>(): R;
    setDelegate<R = void, P0 = MSColorInspectorDelegate>(_v: P0): R;
    styleParts<R = NSArray>(): R;
    setStyleParts<R = void, P0 = NSArray>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSColorInspector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, MSColorInspectorSectionDelegateProtocol, BCPopoverDelegateProtocol, NSTouchBarDelegateProtocol, MSStylePartPreviewButtonDelegateProtocol, MSColorPickerViewControllerDelegateProtocol, MSColorModePickerControllerDelegateProtocol {
      alloc<R = MSColorInspector>(): R;
      new: <R = MSColorInspector>() => R;
      presentColorInspectorPopoverForViewController_delegate_document_globalAssets_relativeToView_setupHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = CDUnknownBlockType>(_presentColorInspectorPopoverForViewController: P0, _delegate: P1, _document: P2, _globalAssets: P3, _relativeToView: P4, _setupHandler: P5): R;
      presentColorInspectorPopoverWithDelegate_document_globalAssets_relativeToView_setupHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = CDUnknownBlockType>(_presentColorInspectorPopoverWithDelegate: P0, _document: P1, _globalAssets: P2, _relativeToView: P3, _setupHandler: P4): R;
      presentColorInspectorPopoverForViewController_document_globalAssets_relativeToView_setupHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = CDUnknownBlockType>(_presentColorInspectorPopoverForViewController: P0, _document: P1, _globalAssets: P2, _relativeToView: P3, _setupHandler: P4): R;
    }
  }
}

declare const MSColorInspector: cocoa.MSColorInspector.CLASS;
