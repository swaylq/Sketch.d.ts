/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComboTableView<T0 = void, T1 = void, T2 = void> extends NSTableView {
    _shouldBlurSelectionWhenCellBased<R = boolean>(): R;
    numberOfRows<R = number>(): R;
    _accessibilityWantsToBeList<R = boolean>(): R;
  }
  namespace NSComboTableView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableView {
      alloc<R = NSComboTableView>(): R;
      new: <R = NSComboTableView>() => R;
      _logErrorForNonStringIdentifier<R = boolean>(): R;
    }
  }
}

declare const NSComboTableView: cocoa.NSComboTableView.CLASS;
