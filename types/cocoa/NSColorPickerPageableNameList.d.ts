/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerPageableNameList<T0 = void, T1 = void, T2 = void> extends NSColorPicker, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol, NSColorPickingCustomProtocol {
    pasteboardTypeForReordering<R = unknown>(): R;
    pageableTableView_handleKeyDownEvent<R = boolean, P0 = unknown, P1 = unknown>(_pageableTableView: P0, _handleKeyDownEvent: P1): R;
    activeColorList<R = unknown>(): R;
    tableViewClicked<R = void, P0 = unknown>(_tableViewClicked: P0): R;
    _colorForRow<R = unknown, P0 = number>(__colorForRow: P0): R;
    control_textShouldEndEditing<R = boolean, P0 = unknown, P1 = unknown>(_control: P0, _textShouldEndEditing: P1): R;
    didPresentErrorWithRecovery_contextInfo<R = void, P0 = boolean, P1 = void>(_didPresentErrorWithRecovery: P0, _contextInfo: P1): R;
    _errorDuplicateColor<R = void, P0 = unknown>(__errorDuplicateColor: P0): R;
    endSheetReturningTag<R = void, P0 = unknown>(_endSheetReturningTag: P0): R;
    filterChanged<R = void, P0 = unknown>(_filterChanged: P0): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    control_textView_doCommandBySelector<R = boolean, P0 = unknown, P1 = unknown, P2 = string>(_control: P0, _textView: P1, _doCommandBySelector: P2): R;
    removeList<R = void, P0 = unknown>(_removeList: P0): R;
    removeColor<R = void, P0 = unknown>(_removeColor: P0): R;
    _removeCurrentColor<R = void>(): R;
    _currentSelectedColorListColorName<R = unknown>(): R;
    renameList<R = void, P0 = unknown>(_renameList: P0): R;
    openList<R = void, P0 = unknown>(_openList: P0): R;
    openListFromFile<R = void, P0 = unknown>(_openListFromFile: P0): R;
    newList<R = void, P0 = unknown>(_newList: P0): R;
    newListName<R = unknown, P0 = unknown>(_newListName: P0): R;
    newColor<R = void, P0 = unknown>(_newColor: P0): R;
    newColorName<R = unknown, P0 = unknown>(_newColorName: P0): R;
    copyColorAtIndex_toIndex_saveList<R = void, P0 = number, P1 = number, P2 = boolean>(_copyColorAtIndex: P0, _toIndex: P1, _saveList: P2): R;
    moveColorAtIndex_toIndex_saveList<R = void, P0 = number, P1 = number, P2 = boolean>(_moveColorAtIndex: P0, _toIndex: P1, _saveList: P2): R;
    insertNewColor_atIndex_andShowInWell<R = void, P0 = unknown, P1 = number, P2 = boolean>(_insertNewColor: P0, _atIndex: P1, _andShowInWell: P2): R;
    addNewColor_andShowInWell<R = void, P0 = unknown, P1 = boolean>(_addNewColor: P0, _andShowInWell: P1): R;
    saveList<R = boolean, P0 = unknown>(_saveList: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    addColorAllowed<R = boolean>(): R;
    removeColorAllowed<R = boolean>(): R;
    isCurrListEditable<R = boolean>(): R;
    removeListEnabled<R = boolean>(): R;
    findColorNamed_inList_usingLocalName<R = number, P0 = unknown, P1 = unknown, P2 = boolean>(_findColorNamed: P0, _inList: P1, _usingLocalName: P2): R;
    restoreDefaults<R = void>(): R;
    saveDefaults<R = void>(): R;
    loadColorLists<R = void>(): R;
    attachedListDictionary<R = unknown>(): R;
    listDictionary<R = unknown>(): R;
    setCurrListName<R = void, P0 = unknown>(_setCurrListName: P0): R;
    attachColorList_makeSelected<R = void, P0 = unknown, P1 = boolean>(_attachColorList: P0, _makeSelected: P1): R;
    attachColorList_systemList_makeSelected<R = void, P0 = unknown, P1 = boolean, P2 = boolean>(_attachColorList: P0, _systemList: P1, _makeSelected: P2): R;
    replaceColorList_withColorList<R = void, P0 = unknown, P1 = unknown>(_replaceColorList: P0, _withColorList: P1): R;
    switchList<R = void, P0 = unknown>(_switchList: P0): R;
    switchToListNamed<R = void, P0 = unknown>(_switchToListNamed: P0): R;
    _endColorListInlineEditing<R = boolean>(): R;
    refreshUI<R = void>(): R;
    _reloadColorListTableView<R = void>(): R;
    _colorListChanged<R = void, P0 = unknown>(__colorListChanged: P0): R;
    _reloadColorListTableViewForFilterChange<R = void>(): R;
    _updateSortedColorListNames<R = void>(): R;
    _currentFilterString<R = unknown>(): R;
    insertPopItemWithTitle_andObject_atIndex<R = void, P0 = unknown, P1 = unknown, P2 = number>(_insertPopItemWithTitle: P0, _andObject: P1, _atIndex: P2): R;
    insertPopItemWithTitle_andObject<R = void, P0 = unknown, P1 = unknown>(_insertPopItemWithTitle: P0, _andObject: P1): R;
    _selectColorInTableView<R = void>(): R;
    _colorIndexInTableView<R = number>(): R;
    _matchQualityOfColorAtIndex_toColor_ifBetterThan<R = number, P0 = number, P1 = unknown, P2 = number>(__matchQualityOfColorAtIndex: P0, _toColor: P1, _ifBetterThan: P2): R;
    _changedPossibleKeys<R = void>(): R;
    setupLoadedNib<R = void>(): R;
    _currentColorIndex<R = number>(): R;
    awakeFromNib<R = void>(): R;
    listPickerView<R = NSView>(): R;
    setListPickerView<R = void, P0 = NSView>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSColorPickerPageableNameList {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColorPicker, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol, NSColorPickingCustomProtocol {
      alloc<R = NSColorPickerPageableNameList>(): R;
      new: <R = NSColorPickerPageableNameList>() => R;
      keyPathsForValuesAffectingValueForKey<R = unknown, P0 = unknown>(_keyPathsForValuesAffectingValueForKey: P0): R;
    }
  }
}

declare const NSColorPickerPageableNameList: cocoa.NSColorPickerPageableNameList.CLASS;
