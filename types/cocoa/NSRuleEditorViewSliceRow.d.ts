/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorViewSliceRow<T0 = void, T1 = void, T2 = void> extends NSRuleEditorViewSlice {
    _subtractButton<R = unknown>(): R;
    _addButton<R = unknown>(): R;
    isEditable<R = boolean>(): R;
    setEditable<R = void, P0 = boolean>(_setEditable: P0): R;
    _dropsIndentWhenImmediatelyBelow<R = boolean>(): R;
    _setRowTypeToAddFromPlusButton<R = void, P0 = number>(__setRowTypeToAddFromPlusButton: P0): R;
    _plusMinusButtonsAcceptFirstMouse<R = boolean>(): R;
    _configurePlusButtonByRowType<R = void, P0 = number>(__configurePlusButtonByRowType: P0): R;
    _setRowType<R = void, P0 = number>(__setRowType: P0): R;
    _rowType<R = number>(): R;
    _updateButtonVisibilities<R = void>(): R;
    _nestingModeShouldHideSubtractButton<R = boolean>(): R;
    _nestingModeShouldHideAddButton<R = boolean>(): R;
    _deleteOption<R = void, P0 = unknown>(__deleteOption: P0): R;
    _addOption<R = void, P0 = unknown>(__addOption: P0): R;
    _sortOptionDictionariesByLayoutOrder<R = unknown, P0 = unknown>(__sortOptionDictionariesByLayoutOrder: P0): R;
    _updateEnabledStateForSubviews<R = void>(): R;
    _emptyRulePartSubviews<R = void>(): R;
    _ruleOptionPopupChangedAction<R = void, P0 = unknown>(__ruleOptionPopupChangedAction: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    _minWidthForPass_forView_withProposedMinWidth<R = number, P0 = number, P1 = unknown, P2 = number>(__minWidthForPass: P0, _forView: P1, _withProposedMinWidth: P2): R;
    _tightenResizables_intoGivenWidth<R = void, P0 = unknown, P1 = number>(__tightenResizables: P0, _intoGivenWidth: P1): R;
    _alignmentGridWidth<R = number>(): R;
    _commonInit<R = void>(): R;
    _isRulePopup<R = boolean, P0 = unknown>(__isRulePopup: P0): R;
    _isRuleStaticTextField<R = boolean, P0 = unknown>(__isRuleStaticTextField: P0): R;
    _createMenuSeparatorItem<R = unknown>(): R;
    _createMenuItemWithTitle<R = unknown, P0 = unknown>(__createMenuItemWithTitle: P0): R;
    _createPopUpButtonWithItems_selectedItemIndex<R = unknown, P0 = unknown, P1 = number>(__createPopUpButtonWithItems: P0, _selectedItemIndex: P1): R;
    _createStaticTextFieldWithStringValue<R = unknown, P0 = unknown>(__createStaticTextFieldWithStringValue: P0): R;
    _createDeleteRowButton<R = unknown>(): R;
    _createAddRowButton<R = unknown>(): R;
    _rowButtonsInterviewHorizontalPadding<R = number>(): R;
    _rowButtonsLeftHorizontalPadding<R = number>(): R;
    _rowButtonsRightHorizontalPadding<R = number>(): R;
    _indentationHorizontalPadding<R = number>(): R;
    _leftmostViewFixedHorizontalPadding<R = number>(): R;
    _minimumVerticalPopupPadding<R = number>(): R;
    _interviewHorizontalPadding<R = number>(): R;
  }
  namespace NSRuleEditorViewSliceRow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSRuleEditorViewSlice {
      alloc<R = NSRuleEditorViewSliceRow>(): R;
      new: <R = NSRuleEditorViewSliceRow>() => R;
    }
  }
}

declare const NSRuleEditorViewSliceRow: cocoa.NSRuleEditorViewSliceRow.CLASS;
