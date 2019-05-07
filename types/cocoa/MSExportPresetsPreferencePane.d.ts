/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPresetsPreferencePane<T0 = void, T1 = void, T2 = void> extends MSPreferencePane, NSTableViewDataSourceProtocol, NSTableViewDelegateProtocol {
    adjustFirstResponderIfNeeded<R = void>(): R;
    restoreDefaultExportPresets<R = void, P0 = unknown>(_restoreDefaultExportPresets: P0): R;
    removeExportFormatFromPreset<R = void, P0 = unknown>(_removeExportFormatFromPreset: P0): R;
    addExportFormat<R = void, P0 = unknown>(_addExportFormat: P0): R;
    commitExportPresetName<R = void, P0 = unknown>(_commitExportPresetName: P0): R;
    uniqueNonEmptyName_forPreset<R = unknown, P0 = unknown, P1 = unknown>(_uniqueNonEmptyName: P0, _forPreset: P1): R;
    presetWithDisplayName<R = unknown, P0 = unknown>(_presetWithDisplayName: P0): R;
    pickDefaultExportPreset<R = void, P0 = unknown>(_pickDefaultExportPreset: P0): R;
    removeExportPreset<R = void, P0 = unknown>(_removeExportPreset: P0): R;
    addExportPreset<R = void, P0 = unknown>(_addExportPreset: P0): R;
    refreshExportFormats<R = void>(): R;
    refreshExportPresets<R = void>(): R;
    commitPendingTextEditsIfNeeded<R = void>(): R;
    editExportPreset<R = void, P0 = unknown>(_editExportPreset: P0): R;
    selectPreset<R = boolean, P0 = unknown>(_selectPreset: P0): R;
    selectPresetAtIndex<R = boolean, P0 = number>(_selectPresetAtIndex: P0): R;
    globalAssets<R = unknown>(): R;
    preferredSize<R = CGSize>(): R;
    exportFormatViewControllers<R = NSArray>(): R;
    setExportFormatViewControllers<R = void, P0 = NSArray>(_v: P0): R;
    designedExportFormatFooterBottomDistance<R = number>(): R;
    designedSize<R = CGSize>(): R;
    tableView<R = NSTableView>(): R;
    setTableView<R = void, P0 = NSTableView>(_v: P0): R;
    removeButton<R = NSButton>(): R;
    setRemoveButton<R = void, P0 = NSButton>(_v: P0): R;
    presetNameTextField<R = NSTextField>(): R;
    setPresetNameTextField<R = void, P0 = NSTextField>(_v: P0): R;
    noPresetsPlaceholderView<R = NSView>(): R;
    setNoPresetsPlaceholderView<R = void, P0 = NSView>(_v: P0): R;
    exportFormatsViewController<R = MSExportFormatViewController>(): R;
    setExportFormatsViewController<R = void, P0 = MSExportFormatViewController>(_v: P0): R;
    exportFormatsView<R = NSStackView>(): R;
    setExportFormatsView<R = void, P0 = NSStackView>(_v: P0): R;
    exportFormatFooterBottomConstraint<R = NSLayoutConstraint>(): R;
    setExportFormatFooterBottomConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    exportFormatFooterView<R = NSView>(): R;
    setExportFormatFooterView<R = void, P0 = NSView>(_v: P0): R;
    exportFormatEditorView<R = NSView>(): R;
    setExportFormatEditorView<R = void, P0 = NSView>(_v: P0): R;
    addFormatButton<R = NSButton>(): R;
    setAddFormatButton<R = void, P0 = NSButton>(_v: P0): R;
    addButton<R = NSButton>(): R;
    setAddButton<R = void, P0 = NSButton>(_v: P0): R;
    selectedPreset<R = MSExportPreset>(): R;
    presets<R = NSArray>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSExportPresetsPreferencePane {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPreferencePane, NSTableViewDataSourceProtocol, NSTableViewDelegateProtocol {
      alloc<R = MSExportPresetsPreferencePane>(): R;
      new: <R = MSExportPresetsPreferencePane>() => R;
      localizedNewExportPresetName<R = unknown>(): R;
      exportPresetWithNameExists<R = boolean, P0 = unknown>(_exportPresetWithNameExists: P0): R;
    }
  }
}

declare const MSExportPresetsPreferencePane: cocoa.MSExportPresetsPreferencePane.CLASS;
