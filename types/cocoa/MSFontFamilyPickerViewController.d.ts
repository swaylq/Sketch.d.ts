/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFontFamilyPickerViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol {
    cxx_destruct<R = void>(): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    doubleClickTableView<R = void, P0 = unknown>(_doubleClickTableView: P0): R;
    awakeFromNib<R = void>(): R;
    tableView<R = NSTableView>(): R;
    setTableView<R = void, P0 = NSTableView>(_v: P0): R;
    fontList<R = MSFontList>(): R;
    setFontList<R = void, P0 = MSFontList>(_v: P0): R;
    completionBlock<R = CDUnknownBlockType>(): R;
    setCompletionBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSFontFamilyPickerViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol {
      alloc<R = MSFontFamilyPickerViewController>(): R;
      new: <R = MSFontFamilyPickerViewController>() => R;
    }
  }
}

declare const MSFontFamilyPickerViewController: cocoa.MSFontFamilyPickerViewController.CLASS;
