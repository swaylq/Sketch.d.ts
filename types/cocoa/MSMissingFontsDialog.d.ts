/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMissingFontsDialog<T0 = void, T1 = void, T2 = void> extends NSWindowController, NSTableViewDataSourceProtocol {
    cxx_destruct<R = void>(): R;
    close<R = void, P0 = unknown>(_close: P0): R;
    openAnyway<R = void, P0 = unknown>(_openAnyway: P0): R;
    runPanelWithMissingFonts_savingWillChangeFonts<R = boolean, P0 = unknown, P1 = boolean>(_runPanelWithMissingFonts: P0, _savingWillChangeFonts: P1): R;
    openButton<R = NSButton>(): R;
    setOpenButton<R = void, P0 = NSButton>(_v: P0): R;
    cancelButton<R = NSButton>(): R;
    setCancelButton<R = void, P0 = NSButton>(_v: P0): R;
    descriptionText<R = NSTextField>(): R;
    setDescriptionText<R = void, P0 = NSTextField>(_v: P0): R;
    missingFonts<R = NSArray>(): R;
    setMissingFonts<R = void, P0 = NSArray>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSMissingFontsDialog {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindowController, NSTableViewDataSourceProtocol {
      alloc<R = MSMissingFontsDialog>(): R;
      new: <R = MSMissingFontsDialog>() => R;
    }
  }
}

declare const MSMissingFontsDialog: cocoa.MSMissingFontsDialog.CLASS;
