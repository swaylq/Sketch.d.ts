/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditor<T = any> extends NSControl {
    cxx_destruct<R = void>(): R;
    _generateFormattingDictionaryStringsFile<R = unknown>(): R;
    _recursiveGenerateFormattingDictionaryPlistForItem_rowType_intoArray_withPriorValues_hasSiblings<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown, P4 = boolean>(__recursiveGenerateFormattingDictionaryPlistForItem: P0, _rowType: P1, _intoArray: P2, _withPriorValues: P3, _hasSiblings: P4): R;
    draggedImage_endedAt_operation<R = void, P0 = unknown, P1 = CGPoint, P2 = number>(_draggedImage: P0, _endedAt: P1, _operation: P2): R;
    _updateDragging<R = number, P0 = unknown>(__updateDragging: P0): R;
    _dragOperationFromInfo<R = number, P0 = unknown>(__dragOperationFromInfo: P0): R;
    draggingSourceOperationMaskForLocal<R = number, P0 = boolean>(_draggingSourceOperationMaskForLocal: P0): R;
    _performDragForSlice_withEvent<R = boolean, P0 = unknown, P1 = unknown>(__performDragForSlice: P0, _withEvent: P1): R;
    _draggingTypes<R = unknown>(): R;
    _plusMinusButtonsAcceptFirstMouse<R = boolean>(): R;
    _deselectAll<R = void>(): R;
    _rightMouseDownOnSlice_withEvent<R = void, P0 = unknown, P1 = unknown>(__rightMouseDownOnSlice: P0, _withEvent: P1): R;
    _mouseDownOnSlice_withEvent<R = void, P0 = unknown, P1 = unknown>(__mouseDownOnSlice: P0, _withEvent: P1): R;
    _performClickOnSlice_withEvent<R = void, P0 = unknown, P1 = unknown>(__performClickOnSlice: P0, _withEvent: P1): R;
    _selectedSlices<R = unknown>(): R;
    selectRowIndexes_byExtendingSelection<R = void, P0 = unknown, P1 = boolean>(_selectRowIndexes: P0, _byExtendingSelection: P1): R;
    _selectedSliceIndices<R = unknown>(): R;
    _lastSelectedSliceIndex<R = number>(): R;
    _dragImageForIndices<R = unknown, P0 = unknown>(__dragImageForIndices: P0): R;
    _childlessParentsIfSlicesWereDeletedAtIndexes<R = unknown, P0 = unknown>(__childlessParentsIfSlicesWereDeletedAtIndexes: P0): R;
    _includeSubslicesForSlicesAtIndexes<R = unknown, P0 = unknown>(__includeSubslicesForSlicesAtIndexes: P0): R;
    _dragShouldBeginFromMouseDown<R = boolean, P0 = unknown>(__dragShouldBeginFromMouseDown: P0): R;
    _toolTipForDeleteRowButton<R = unknown>(): R;
    _toolTipForAddCompoundRowButton<R = unknown>(): R;
    _toolTipForAddSimpleRowButton<R = unknown>(): R;
    _validateItem_value_inRow<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(__validateItem: P0, _value: P1, _inRow: P2): R;
    _shouldHideSubtractButtonForSlice<R = boolean, P0 = unknown>(__shouldHideSubtractButtonForSlice: P0): R;
    _shouldHideAddButtonForSlice<R = boolean, P0 = unknown>(__shouldHideAddButtonForSlice: P0): R;
    isFlipped<R = boolean>(): R;
    _deleteSlice<R = void, P0 = unknown>(__deleteSlice: P0): R;
    _addOptionFromSlice_ofRowType<R = void, P0 = unknown, P1 = number>(__addOptionFromSlice: P0, _ofRowType: P1): R;
    _getItemsAndValuesToAddForRow_ofType<R = unknown, P0 = number, P1 = number>(__getItemsAndValuesToAddForRow: P0, _ofType: P1): R;
    _nextUnusedItems_andValues_forRow_forRowType<R = boolean, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(__nextUnusedItems: P0, _andValues: P1, _forRow: P2, _forRowType: P3): R;
    _changedItem_toItem_inRow<R = void, P0 = unknown, P1 = unknown, P2 = number>(__changedItem: P0, _toItem: P1, _inRow: P2): R;
    parentRowForRow<R = number, P0 = number>(_parentRowForRow: P0): R;
    rowTypeForRow<R = number, P0 = number>(_rowTypeForRow: P0): R;
    rowForDisplayValue<R = number, P0 = unknown>(_rowForDisplayValue: P0): R;
    displayValuesForRow<R = unknown, P0 = number>(_displayValuesForRow: P0): R;
    criteriaForRow<R = unknown, P0 = number>(_criteriaForRow: P0): R;
    subrowIndexesForRow<R = unknown, P0 = number>(_subrowIndexesForRow: P0): R;
    _slices<R = unknown>(): R;
    _lastRow<R = number>(): R;
    _setPredicate<R = void, P0 = unknown>(__setPredicate: P0): R;
    _alignmentGridWidth<R = number>(): R;
    _setAlignmentGridWidth<R = void, P0 = number>(__setAlignmentGridWidth: P0): R;
    _applicableNestingMode<R = number>(): R;
    _globalIndexesForSubrowIndexes_ofParentObject<R = unknown, P0 = unknown, P1 = unknown>(__globalIndexesForSubrowIndexes: P0, _ofParentObject: P1): R;
    _countOfRowsStartingAtObject<R = number, P0 = unknown>(__countOfRowsStartingAtObject: P0): R;
    _rowIndexForRowObject<R = number, P0 = unknown>(__rowIndexForRowObject: P0): R;
    _findRowObject_startingAtObject_withIndex<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(__findRowObject: P0, _startingAtObject: P1, _withIndex: P2): R;
    _subrowObjectsOfObject<R = unknown, P0 = unknown>(__subrowObjectsOfObject: P0): R;
    _insertNewRowAtIndex_ofType_withParentRow<R = unknown, P0 = number, P1 = number, P2 = number>(__insertNewRowAtIndex: P0, _ofType: P1, _withParentRow: P2): R;
    bind_toObject_withKeyPath_options<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_bind: P0, _toObject: P1, _withKeyPath: P2, _options: P3): R;
    unbind<R = void, P0 = unknown>(_unbind: P0): R;
    _setBoundDataSource_withKeyPath_options<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__setBoundDataSource: P0, _withKeyPath: P1, _options: P2): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _rootRowsArray<R = unknown>(): R;
    _fullCacheUpdate<R = void>(): R;
    _fullCacheUpdateRecursive_intoRow_withIndentation<R = void, P0 = unknown, P1 = number, P2 = number>(__fullCacheUpdateRecursive: P0, _intoRow: P1, _withIndentation: P2): R;
    _searchCacheForRowObject<R = unknown, P0 = unknown>(__searchCacheForRowObject: P0): R;
    _rowCacheForIndex<R = unknown, P0 = number>(__rowCacheForIndex: P0): R;
    removeRowsAtIndexes_includeSubrows<R = void, P0 = unknown, P1 = boolean>(_removeRowsAtIndexes: P0, _includeSubrows: P1): R;
    removeRowAtIndex<R = void, P0 = number>(_removeRowAtIndex: P0): R;
    setCriteria_andDisplayValues_forRowAtIndex<R = void, P0 = unknown, P1 = unknown, P2 = number>(_setCriteria: P0, _andDisplayValues: P1, _forRowAtIndex: P2): R;
    insertRowAtIndex_withType_asSubrowOfRow_animate<R = void, P0 = number, P1 = number, P2 = number, P3 = boolean>(_insertRowAtIndex: P0, _withType: P1, _asSubrowOfRow: P2, _animate: P3): R;
    addRow<R = void, P0 = unknown>(_addRow: P0): R;
    _uniqueizeIndexSet<R = unknown, P0 = unknown>(__uniqueizeIndexSet: P0): R;
    _removeSubrowsForRow_fromSet<R = void, P0 = number, P1 = unknown>(__removeSubrowsForRow: P0, _fromSet: P1): R;
    reloadCriteria<R = void>(): R;
    reloadPredicate<R = void>(): R;
    _setAllowsEmptyCompoundRows<R = void, P0 = boolean>(__setAllowsEmptyCompoundRows: P0): R;
    _allowsEmptyCompoundRows<R = boolean>(): R;
    _sendRuleAction<R = void>(): R;
    _updatePredicate<R = void>(): R;
    predicateForRow<R = unknown, P0 = number>(_predicateForRow: P0): R;
    _localizerForSlice<R = unknown, P0 = unknown>(__localizerForSlice: P0): R;
    _setStandardLocalizer<R = void, P0 = unknown>(__setStandardLocalizer: P0): R;
    _setHeaderLocalizer<R = void, P0 = unknown>(__setHeaderLocalizer: P0): R;
    _privateDelegateMethodsEnabled<R = boolean>(): R;
    _setPrivateDelegateMethodsEnabled<R = void, P0 = boolean>(__setPrivateDelegateMethodsEnabled: P0): R;
    _extendItem_withRow<R = unknown, P0 = unknown, P1 = number>(__extendItem: P0, _withRow: P1): R;
    _layoutOrdersForChoiceRootedAtItem_inRow<R = unknown, P0 = unknown, P1 = number>(__layoutOrdersForChoiceRootedAtItem: P0, _inRow: P1): R;
    _layoutOrderForItem_inRow<R = number, P0 = unknown, P1 = number>(__layoutOrderForItem: P0, _inRow: P1): R;
    _getAllAvailableItems_values_asChildrenOfItem_inRow<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(__getAllAvailableItems: P0, _values: P1, _asChildrenOfItem: P2, _inRow: P3): R;
    _loadInitialRows<R = void>(): R;
    _changedRowArray_withOldRowArray_forParent<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__changedRowArray: P0, _withOldRowArray: P1, _forParent: P2): R;
    _startObservingRowObjectsRecursively<R = void, P0 = unknown>(__startObservingRowObjectsRecursively: P0): R;
    _stopObservingRowObjectsRecursively<R = void, P0 = unknown>(__stopObservingRowObjectsRecursively: P0): R;
    _reconfigureSubviewsAnimate<R = void, P0 = boolean>(__reconfigureSubviewsAnimate: P0): R;
    _updateRowTypesToAdd<R = void>(): R;
    _updateSliceRows<R = void>(): R;
    _stopAnimationWithoutChangingFrames<R = void>(): R;
    _updateSliceIndentations<R = void>(): R;
    _updateSliceIndentationAtIndex_toIndentation_withIndexSet<R = void, P0 = number, P1 = number, P2 = unknown>(__updateSliceIndentationAtIndex: P0, _toIndentation: P1, _withIndexSet: P2): R;
    _postRowCountChangedNotificationOfType_indexes<R = void, P0 = number, P1 = unknown>(__postRowCountChangedNotificationOfType: P0, _indexes: P1): R;
    _postRuleOptionChangedNotification<R = void>(): R;
    _newSlice<R = unknown>(): R;
    _createNewSliceWithFrame_ruleEditorView<R = unknown, P0 = CGRect, P1 = unknown>(__createNewSliceWithFrame: P0, _ruleEditorView: P1): R;
    _minimumFrameHeight<R = number>(): R;
    _suppressKeyDownHandling<R = boolean>(): R;
    _setSuppressKeyDownHandling<R = void, P0 = boolean>(__setSuppressKeyDownHandling: P0): R;
    _wantsRowAnimations<R = boolean>(): R;
    _isInDesignMode<R = boolean>(): R;
    _ruleViewHasFirstResponder<R = boolean>(): R;
    selectAll<R = void, P0 = unknown>(_selectAll: P0): R;
    _windowUpdate<R = void, P0 = unknown>(__windowUpdate: P0): R;
    _queryOrderLocalizedDictionaries_withParent<R = unknown, P0 = unknown, P1 = unknown>(__queryOrderLocalizedDictionaries: P0, _withParent: P1): R;
    _queryValueForItem_inRow<R = unknown, P0 = unknown, P1 = number>(__queryValueForItem: P0, _inRow: P1): R;
    _queryChild_ofItem_withRowType<R = unknown, P0 = number, P1 = unknown, P2 = number>(__queryChild: P0, _ofItem: P1, _withRowType: P2): R;
    _queryCanSelectItem_displayValue_inRow<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(__queryCanSelectItem: P0, _displayValue: P1, _inRow: P2): R;
    _queryNumberOfChildrenOfItem_withRowType<R = number, P0 = unknown, P1 = number>(__queryNumberOfChildrenOfItem: P0, _withRowType: P1): R;
    _wantsMinimalArchival<R = boolean>(): R;
    _initRuleEditorShared<R = void>(): R;
    _createSliceDropSeparator<R = unknown>(): R;
    displayValuesKeyPath<R = NSString>(): R;
    setDisplayValuesKeyPath<R = void, P0 = NSString>(_v: P0): R;
    criteriaKeyPath<R = NSString>(): R;
    setCriteriaKeyPath<R = void, P0 = NSString>(_v: P0): R;
    subrowsKeyPath<R = NSString>(): R;
    setSubrowsKeyPath<R = void, P0 = NSString>(_v: P0): R;
    rowTypeKeyPath<R = NSString>(): R;
    setRowTypeKeyPath<R = void, P0 = NSString>(_v: P0): R;
    rowClass<R = unknown>(): R;
    setRowClass<R = void, P0 = unknown>(_v: P0): R;
    selectedRowIndexes<R = NSIndexSet>(): R;
    numberOfRows<R = number>(): R;
    predicate<R = NSPredicate>(): R;
    delegate<R = NSRuleEditorDelegate>(): R;
    setDelegate<R = void, P0 = NSRuleEditorDelegate>(_v: P0): R;
    nestingMode<R = number>(): R;
    setNestingMode<R = void, P0 = number>(_v: P0): R;
    canRemoveAllRows<R = boolean>(): R;
    setCanRemoveAllRows<R = void, P0 = boolean>(_v: P0): R;
    editable<R = boolean>(): R;
    setEditable<R = void, P0 = boolean>(_v: P0): R;
    formattingDictionary<R = NSDictionary>(): R;
    setFormattingDictionary<R = void, P0 = NSDictionary>(_v: P0): R;
    formattingStringsFilename<R = NSString>(): R;
    setFormattingStringsFilename<R = void, P0 = NSString>(_v: P0): R;
    rowHeight<R = number>(): R;
    setRowHeight<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSRuleEditor<T = any> extends NSControl {
      alloc<R = NSRuleEditor>(): R;
      new: <R = NSRuleEditor>() => R;
    }
  }
}

declare const NSRuleEditor: cocoa.classes.NSRuleEditor;