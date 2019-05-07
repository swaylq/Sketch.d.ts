/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableOptions<T0 = void, T1 = void, T2 = void> extends NSWindowController {
    worksWhenModal<R = boolean>(): R;
    removeClient<R = void, P0 = unknown>(_removeClient: P0): R;
    setClient<R = void, P0 = unknown>(_setClient: P0): R;
    modifyOptionsViaPanel<R = void, P0 = unknown>(_modifyOptionsViaPanel: P0): R;
    setBackgroundColor<R = void, P0 = unknown>(_setBackgroundColor: P0): R;
    setDefaultBorderColor<R = void, P0 = unknown>(_setDefaultBorderColor: P0): R;
    setBorderColor<R = void, P0 = unknown>(_setBorderColor: P0): R;
    setBorderWidth<R = void, P0 = number>(_setBorderWidth: P0): R;
    setVerticalAlignment<R = void, P0 = number>(_setVerticalAlignment: P0): R;
    setHorizontalAlignment<R = void, P0 = number>(_setHorizontalAlignment: P0): R;
    splitCells<R = void>(): R;
    splitCell_range<R = void, P0 = unknown, P1 = _NSRange>(_splitCell: P0, _range: P1): R;
    mergeCells<R = void>(): R;
    removeColumns<R = void, P0 = number>(_removeColumns: P0): R;
    addColumns<R = void, P0 = number>(_addColumns: P0): R;
    removeRows<R = void, P0 = number>(_removeRows: P0): R;
    addRows<R = void, P0 = number>(_addRows: P0): R;
    removeTable<R = void>(): R;
    addDefaultTable<R = void>(): R;
    _addDefaultTable<R = void>(): R;
    getRows_columns_inTabDelimitedString_inRange<R = boolean, P0 = number, P1 = number, P2 = unknown, P3 = _NSRange>(_getRows: P0, _columns: P1, _inTabDelimitedString: P2, _inRange: P3): R;
    addOrNestTable<R = void>(): R;
    orderFrontTableOptionsPanel<R = void, P0 = unknown>(_orderFrontTableOptionsPanel: P0): R;
    updateUI<R = void>(): R;
    enableAll<R = void, P0 = boolean>(_enableAll: P0): R;
    tableParameters<R = boolean>(): R;
    clearTableParameters<R = void>(): R;
    textView_shouldSetColor<R = boolean, P0 = unknown, P1 = unknown>(_textView: P0, _shouldSetColor: P1): R;
    tableOptionsPanel<R = unknown, P0 = boolean>(_tableOptionsPanel: P0): R;
    shouldCascadeWindows<R = boolean>(): R;
    windowDidLoad<R = void>(): R;
    initWithWindow<R = unknown, P0 = unknown>(_initWithWindow: P0): R;
  }
  namespace NSTableOptions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindowController {
      alloc<R = NSTableOptions>(): R;
      new: <R = NSTableOptions>() => R;
      sharedTableOptions<R = unknown>(): R;
    }
  }
}

declare const NSTableOptions: cocoa.NSTableOptions.CLASS;
