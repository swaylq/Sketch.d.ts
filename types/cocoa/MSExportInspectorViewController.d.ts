/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportInspectorViewController<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
    firstResponderIgnoringFieldEditor<R = unknown>(): R;
    editExportPresets<R = void, P0 = unknown>(_editExportPresets: P0): R;
    addExportPreset<R = void, P0 = unknown>(_addExportPreset: P0): R;
    unApplyAllExportPresets<R = void, P0 = unknown>(_unApplyAllExportPresets: P0): R;
    applyExportPreset<R = void, P0 = unknown>(_applyExportPreset: P0): R;
    findExportFormatAmong_equalToFormat<R = unknown, P0 = unknown, P1 = unknown>(_findExportFormatAmong: P0, _equalToFormat: P1): R;
    exportPresetAppliesToSelectedLayers<R = boolean, P0 = unknown>(_exportPresetAppliesToSelectedLayers: P0): R;
    showExportPresetMenu<R = void, P0 = unknown>(_showExportPresetMenu: P0): R;
    createSliceAction<R = void, P0 = unknown>(_createSliceAction: P0): R;
    document<R = unknown>(): R;
    addExportFormat<R = void, P0 = unknown>(_addExportFormat: P0): R;
    hasEnabledStyle<R = boolean>(): R;
    prepare<R = void>(): R;
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    headerItem<R = MSHeaderInspectorItem>(): R;
    setHeaderItem<R = void, P0 = MSHeaderInspectorItem>(_v: P0): R;
    textLabelRightConstraintExpandedWidth<R = number>(): R;
    setTextLabelRightConstraintExpandedWidth<R = void, P0 = number>(_v: P0): R;
    formatViewControllers<R = NSArray>(): R;
    setFormatViewControllers<R = void, P0 = NSArray>(_v: P0): R;
    nameView<R = NSView>(): R;
    setNameView<R = void, P0 = NSView>(_v: P0): R;
    textLabelRightConstraint<R = NSLayoutConstraint>(): R;
    setTextLabelRightConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    headerLabel<R = NSTextField>(): R;
    setHeaderLabel<R = void, P0 = NSTextField>(_v: P0): R;
    exportFormatLabelTextField<R = NSTextField>(): R;
    setExportFormatLabelTextField<R = void, P0 = NSTextField>(_v: P0): R;
    exportPresetsMenuButton<R = NSButton>(): R;
    setExportPresetsMenuButton<R = void, P0 = NSButton>(_v: P0): R;
    knifeButton<R = NSButton>(): R;
    setKnifeButton<R = void, P0 = NSButton>(_v: P0): R;
    addExportFormatButton<R = NSButton>(): R;
    setAddExportFormatButton<R = void, P0 = NSButton>(_v: P0): R;
    bottomLabelView<R = NSView>(): R;
    setBottomLabelView<R = void, P0 = NSView>(_v: P0): R;
    views<R = NSArray>(): R;
    hasExports<R = boolean>(): R;
  }
  namespace MSExportInspectorViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSExportInspectorViewController>(): R;
      new: <R = MSExportInspectorViewController>() => R;
    }
  }
}

declare const MSExportInspectorViewController: cocoa.MSExportInspectorViewController.CLASS;
