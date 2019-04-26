/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSForm<T0 = void, T1 = void, T2 = void> extends NSMatrix {
    setTextBaseWritingDirection<R = void, P0 = number>(_setTextBaseWritingDirection: P0): R;
    setTitleBaseWritingDirection<R = void, P0 = number>(_setTitleBaseWritingDirection: P0): R;
    selectTextAtIndex<R = void, P0 = number>(_selectTextAtIndex: P0): R;
    indexOfCellWithTag<R = number, P0 = number>(_indexOfCellWithTag: P0): R;
    removeEntryAtIndex<R = void, P0 = number>(_removeEntryAtIndex: P0): R;
    insertEntry_atIndex<R = unknown, P0 = unknown, P1 = number>(_insertEntry: P0, _atIndex: P1): R;
    addEntry<R = unknown, P0 = unknown>(_addEntry: P0): R;
    drawCellAtIndex<R = void, P0 = number>(_drawCellAtIndex: P0): R;
    cellAtIndex<R = unknown, P0 = number>(_cellAtIndex: P0): R;
    setTextFont<R = void, P0 = unknown>(_setTextFont: P0): R;
    setTitleFont<R = void, P0 = unknown>(_setTitleFont: P0): R;
    preferredTextFieldWidth<R = number>(): R;
    setPreferredTextFieldWidth<R = void, P0 = number>(_setPreferredTextFieldWidth: P0): R;
    setTextAlignment<R = void, P0 = number>(_setTextAlignment: P0): R;
    setTitleAlignment<R = void, P0 = number>(_setTitleAlignment: P0): R;
    setBezeled<R = void, P0 = boolean>(_setBezeled: P0): R;
    setBordered<R = void, P0 = boolean>(_setBordered: P0): R;
    setInterlineSpacing<R = void, P0 = number>(_setInterlineSpacing: P0): R;
    setEntryWidth<R = void, P0 = number>(_setEntryWidth: P0): R;
    indexOfSelectedItem<R = number>(): R;
    _resetTitleWidths<R = void>(): R;
    _maxWidth<R = number>(): R;
  }
  namespace NSForm {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMatrix {
      alloc<R = NSForm>(): R;
      new: <R = NSForm>() => R;
    }
  }
}

declare const NSForm: cocoa.NSForm.CLASS;
