/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFontPanel<T0 = void, T1 = void, T2 = void> extends NSPanel {
    _fontPanelDescriptorsDictionaryFromFromPasteboard<R = unknown, P0 = unknown>(__fontPanelDescriptorsDictionaryFromFromPasteboard: P0): R;
    removeItemForTableView_pasteboard_operation<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(_removeItemForTableView: P0, _pasteboard: P1, _operation: P2): R;
    draggingSourceOperationMaskForTableView<R = number, P0 = unknown>(_draggingSourceOperationMaskForTableView: P0): R;
    tableView_writeRowsWithIndexes_toPasteboard<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_tableView: P0, _writeRowsWithIndexes: P1, _toPasteboard: P2): R;
    tableView_acceptDrop_row_dropOperation<R = boolean, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(_tableView: P0, _acceptDrop: P1, _row: P2, _dropOperation: P3): R;
    tableView_validateDrop_proposedRow_proposedDropOperation<R = number, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(_tableView: P0, _validateDrop: P1, _proposedRow: P2, _proposedDropOperation: P3): R;
    _openExtrasPopup<R = void, P0 = unknown>(__openExtrasPopup: P0): R;
    _chooseSizeFromSlider<R = void, P0 = unknown>(__chooseSizeFromSlider: P0): R;
    _chooseSize<R = void, P0 = unknown>(__chooseSize: P0): R;
    _chooseSizeFromField<R = void, P0 = unknown>(__chooseSizeFromField: P0): R;
    _chooseFamily<R = void, P0 = unknown>(__chooseFamily: P0): R;
    _chooseFace<R = void, P0 = unknown>(__chooseFace: P0): R;
    _chooseCollection<R = void, P0 = unknown>(__chooseCollection: P0): R;
    collectionButtonPressed<R = void, P0 = unknown>(_collectionButtonPressed: P0): R;
    _fontPanelRemoveCollectionSheet_returnCode_contextInfo<R = void, P0 = unknown, P1 = number, P2 = void>(__fontPanelRemoveCollectionSheet: P0, _returnCode: P1, _contextInfo: P2): R;
    _validateExtrasButton<R = void, P0 = unknown>(__validateExtrasButton: P0): R;
    _setPreviewFont<R = void, P0 = unknown>(__setPreviewFont: P0): R;
    _updateFontPreviewFont<R = void>(): R;
    _updateFontPreview<R = void>(): R;
    _togglePreview_animated<R = void, P0 = boolean, P1 = boolean>(__togglePreview: P0, _animated: P1): R;
    _fontAttributes<R = unknown>(): R;
    _setFont<R = void, P0 = unknown>(__setFont: P0): R;
    _reflectFont<R = void>(): R;
    _currentFont<R = unknown>(): R;
    _typographyPanel<R = unknown>(): R;
    _toggleTypographyPanel<R = void>(): R;
    _notifyTypographyPanel<R = void>(): R;
    _collectionsChanged<R = void, P0 = unknown>(__collectionsChanged: P0): R;
    _sizeListChanged<R = void, P0 = unknown>(__sizeListChanged: P0): R;
    convertAttributes<R = unknown, P0 = unknown>(_convertAttributes: P0): R;
    _validateFontPanelFontAttributes<R = void>(): R;
    _setAttributes_isMultiple<R = void, P0 = unknown, P1 = boolean>(__setAttributes: P0, _isMultiple: P1): R;
    panelConvertFont<R = unknown, P0 = unknown>(_panelConvertFont: P0): R;
    setPanelFont_isMultiple<R = void, P0 = unknown, P1 = boolean>(_setPanelFont: P0, _isMultiple: P1): R;
    _inHideFaceMode<R = boolean>(): R;
    _inHideCollectionsMode<R = boolean>(): R;
    _checkCollectionMoveOut<R = void, P0 = number>(__checkCollectionMoveOut: P0): R;
    _reflectSize<R = void>(): R;
    windowWillResize_toSize<R = CGSize, P0 = unknown, P1 = CGSize>(_windowWillResize: P0, _toSize: P1): R;
    _toggleCollections_animate<R = void, P0 = number, P1 = boolean>(__toggleCollections: P0, _animate: P1): R;
    _validateFaces<R = void, P0 = number>(__validateFaces: P0): R;
    _validateSizes<R = void, P0 = number>(__validateSizes: P0): R;
    applicationDidBecomeActive<R = void, P0 = unknown>(_applicationDidBecomeActive: P0): R;
    windowDidUpdate<R = void, P0 = unknown>(_windowDidUpdate: P0): R;
    _populateMiniMode<R = void>(): R;
    _populatePopup_withTableView<R = void, P0 = unknown, P1 = unknown>(__populatePopup: P0, _withTableView: P1): R;
    _checkMiniMode<R = void, P0 = number>(__checkMiniMode: P0): R;
    _inMiniMode<R = boolean>(): R;
    _chooseSizeFromList<R = void, P0 = unknown>(__chooseSizeFromList: P0): R;
    _changeSizeStyle<R = void, P0 = unknown>(__changeSizeStyle: P0): R;
    _resetSizeList<R = void, P0 = unknown>(__resetSizeList: P0): R;
    _removeSizeFromList<R = void, P0 = unknown>(__removeSizeFromList: P0): R;
    _addSizeToList<R = void, P0 = unknown>(__addSizeToList: P0): R;
    _sizeEditDone<R = void, P0 = unknown>(__sizeEditDone: P0): R;
    comboBox_indexOfItemWithStringValue<R = number, P0 = unknown, P1 = unknown>(_comboBox: P0, _indexOfItemWithStringValue: P1): R;
    comboBox_objectValueForItemAtIndex<R = unknown, P0 = unknown, P1 = number>(_comboBox: P0, _objectValueForItemAtIndex: P1): R;
    numberOfItemsInComboBox<R = number, P0 = unknown>(_numberOfItemsInComboBox: P0): R;
    splitView_canCollapseSubview<R = boolean, P0 = unknown, P1 = unknown>(_splitView: P0, _canCollapseSubview: P1): R;
    numberOfRowsInTableView<R = number, P0 = unknown>(_numberOfRowsInTableView: P0): R;
    tableView_setObjectValue_forTableColumn_row<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_tableView: P0, _setObjectValue: P1, _forTableColumn: P2, _row: P3): R;
    tableView_willDisplayCell_forTableColumn_row<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_tableView: P0, _willDisplayCell: P1, _forTableColumn: P2, _row: P3): R;
    tableView_objectValueForTableColumn_row<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_tableView: P0, _objectValueForTableColumn: P1, _row: P2): R;
    tableView_shouldEditTableColumn_row<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(_tableView: P0, _shouldEditTableColumn: P1, _row: P2): R;
    setChooser<R = void, P0 = unknown>(_setChooser: P0): R;
    setSizeTitle<R = void, P0 = unknown>(_setSizeTitle: P0): R;
    setSize<R = void, P0 = unknown>(_setSize: P0): R;
    _chooseBestMatchingFace<R = void>(): R;
    loadFaces<R = void, P0 = unknown>(_loadFaces: P0): R;
    _setRecents<R = void, P0 = unknown>(__setRecents: P0): R;
    _createFontPanelSizeRep<R = unknown>(): R;
    _sortCollections<R = void>(): R;
    _installAccessoryView<R = void, P0 = unknown>(__installAccessoryView: P0): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    reloadDefaultFontFamilies<R = void>(): R;
    _selectedSize<R = unknown>(): R;
    _showEffects<R = boolean>(): R;
    _canShowEffects<R = boolean>(): R;
    _searchChanged<R = void, P0 = unknown>(__searchChanged: P0): R;
    _sendCarbonNotification<R = void>(): R;
    setCarbonNotification<R = void, P0 = void>(_setCarbonNotification: P0): R;
    _carbonNotification<R = void>(): R;
    _fontPanelDidLoad<R = void>(): R;
    _setup<R = void>(): R;
    _currentFamilyName<R = unknown>(): R;
    _currentCollectionName<R = unknown>(): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    worksWhenModal<R = boolean>(): R;
    setWorksWhenModal<R = void, P0 = boolean>(_v: P0): R;
    accessoryView<R = NSView>(): R;
    setAccessoryView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace NSFontPanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = NSFontPanel>(): R;
      new: <R = NSFontPanel>() => R;
      restoreWindowWithIdentifier_state_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_restoreWindowWithIdentifier: P0, _state: P1, _completionHandler: P2): R;
      sharedFontPanel<R = unknown>(): R;
      sharedFontPanelExists<R = boolean>(): R;
    }
  }
}

declare const NSFontPanel: cocoa.NSFontPanel.CLASS;
