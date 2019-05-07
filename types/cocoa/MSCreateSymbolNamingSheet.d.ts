/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCreateSymbolNamingSheet<T0 = void, T1 = void, T2 = void> extends CHSheetController {
    validateConfirmButton<R = void>(): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    setShouldShowMoveCheckbox<R = void, P0 = boolean>(_setShouldShowMoveCheckbox: P0): R;
    setSuggestedName<R = void, P0 = unknown>(_setSuggestedName: P0): R;
    setSymbolPageName<R = void, P0 = unknown>(_setSymbolPageName: P0): R;
    awakeFromNib<R = void>(): R;
    completionBlock<R = CDUnknownBlockType>(): R;
    setCompletionBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    symbolPageField<R = NSTextField>(): R;
    setSymbolPageField<R = void, P0 = NSTextField>(_v: P0): R;
    symbolNameField<R = NSTextField>(): R;
    setSymbolNameField<R = void, P0 = NSTextField>(_v: P0): R;
    confirmButton<R = NSButton>(): R;
    setConfirmButton<R = void, P0 = NSButton>(_v: P0): R;
    moveSymbolToPageCheckbox<R = NSButton>(): R;
    setMoveSymbolToPageCheckbox<R = void, P0 = NSButton>(_v: P0): R;
  }
  namespace MSCreateSymbolNamingSheet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CHSheetController {
      alloc<R = MSCreateSymbolNamingSheet>(): R;
      new: <R = MSCreateSymbolNamingSheet>() => R;
    }
  }
}

declare const MSCreateSymbolNamingSheet: cocoa.MSCreateSymbolNamingSheet.CLASS;
