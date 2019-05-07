/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFontNamesTableView<T0 = void, T1 = void, T2 = void> extends NSTableView {
    cxx_destruct<R = void>(): R;
    cancelOperation<R = void, P0 = unknown>(_cancelOperation: P0): R;
    searchField<R = NSSearchField>(): R;
    setSearchField<R = void, P0 = NSSearchField>(_v: P0): R;
  }
  namespace MSFontNamesTableView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableView {
      alloc<R = MSFontNamesTableView>(): R;
      new: <R = MSFontNamesTableView>() => R;
    }
  }
}

declare const MSFontNamesTableView: cocoa.MSFontNamesTableView.CLASS;
