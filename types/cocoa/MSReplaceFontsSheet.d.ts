/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceFontsSheet<T0 = void, T1 = void, T2 = void> extends CHSheetController, NSTableViewDataSourceProtocol, NSTableViewDelegateProtocol, BCPopoverDelegateProtocol, NSWindowDelegateProtocol {
    closePopover<R = boolean>(): R;
    displayNameForSystemFontname<R = unknown, P0 = unknown>(_displayNameForSystemFontname: P0): R;
    fontFamilyAction<R = void, P0 = unknown>(_fontFamilyAction: P0): R;
    reloadFontWeightPopup_familyName_row<R = void, P0 = unknown, P1 = unknown, P2 = number>(_reloadFontWeightPopup: P0, _familyName: P1, _row: P2): R;
    fontWeightAction<R = void, P0 = unknown>(_fontWeightAction: P0): R;
    changeFontFamilyTo_forRow<R = void, P0 = unknown, P1 = number>(_changeFontFamilyTo: P0, _forRow: P1): R;
    updateFonts<R = void>(): R;
    setObject<R = void, P0 = unknown>(_setObject: P0): R;
    systemFontsChanged<R = void, P0 = unknown>(_systemFontsChanged: P0): R;
    windowDidLoad<R = void>(): R;
    popover<R = BCPopover>(): R;
    setPopover<R = void, P0 = BCPopover>(_v: P0): R;
    viewController<R = NSViewController>(): R;
    setViewController<R = void, P0 = NSViewController>(_v: P0): R;
    fonts<R = NSMutableArray>(): R;
    setFonts<R = void, P0 = NSMutableArray>(_v: P0): R;
    tableView<R = NSTableView>(): R;
    setTableView<R = void, P0 = NSTableView>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSReplaceFontsSheet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CHSheetController, NSTableViewDataSourceProtocol, NSTableViewDelegateProtocol, BCPopoverDelegateProtocol, NSWindowDelegateProtocol {
      alloc<R = MSReplaceFontsSheet>(): R;
      new: <R = MSReplaceFontsSheet>() => R;
      dontReplaceFontLabel<R = unknown>(): R;
    }
  }
}

declare const MSReplaceFontsSheet: cocoa.MSReplaceFontsSheet.CLASS;
