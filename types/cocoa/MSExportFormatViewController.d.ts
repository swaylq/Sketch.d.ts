/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportFormatViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    cxx_destruct<R = void>(): R;
    updateRemoveButtonLayout<R = void>(): R;
    sizeByRemovingSuffixes<R = number, P0 = unknown>(_sizeByRemovingSuffixes: P0): R;
    applyEditedScaleFieldValue_toExportFormat_scaleType_normalSize<R = void, P0 = number, P1 = unknown, P2 = number, P3 = CGSize>(_applyEditedScaleFieldValue: P0, _toExportFormat: P1, _scaleType: P2, _normalSize: P3): R;
    findSizeOfLayer_forScaleType_completionBlock<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_findSizeOfLayer: P0, _forScaleType: P1, _completionBlock: P2): R;
    commitScaleStringEdit_withCompletionBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_commitScaleStringEdit: P0, _withCompletionBlock: P1): R;
    exportSelection<R = void, P0 = unknown>(_exportSelection: P0): R;
    scaleFieldAction<R = void, P0 = unknown>(_scaleFieldAction: P0): R;
    scaleMenuAction<R = void, P0 = unknown>(_scaleMenuAction: P0): R;
    formatPopupAction<R = void, P0 = unknown>(_formatPopupAction: P0): R;
    removeExportFormat<R = void, P0 = unknown>(_removeExportFormat: P0): R;
    firstExportFormat<R = unknown>(): R;
    exportFormatCanBeScaled<R = boolean>(): R;
    updateTextFieldProperties<R = void>(): R;
    prepare<R = void>(): R;
    scalePopupMenu<R = NSMenu>(): R;
    setScalePopupMenu<R = void, P0 = NSMenu>(_v: P0): R;
    designedFormatPopUpButtonWidth<R = number>(): R;
    setDesignedFormatPopUpButtonWidth<R = void, P0 = number>(_v: P0): R;
    expandedRemoveWidth<R = number>(): R;
    setExpandedRemoveWidth<R = void, P0 = number>(_v: P0): R;
    removeButtonContainerView<R = NSView>(): R;
    setRemoveButtonContainerView<R = void, P0 = NSView>(_v: P0): R;
    drawOldFashioned<R = boolean>(): R;
    setDrawOldFashioned<R = void, P0 = boolean>(_v: P0): R;
    removeButtonHidden<R = boolean>(): R;
    setRemoveButtonHidden<R = void, P0 = boolean>(_v: P0): R;
    scaleField<R = MSTextFieldWithDropDownMenu>(): R;
    setScaleField<R = void, P0 = MSTextFieldWithDropDownMenu>(_v: P0): R;
    exportFormats<R = NSArray>(): R;
    setExportFormats<R = void, P0 = NSArray>(_v: P0): R;
    suffixTextField<R = MSExportFormatNamingTextField>(): R;
    setSuffixTextField<R = void, P0 = MSExportFormatNamingTextField>(_v: P0): R;
    sizeView<R = NSView>(): R;
    setSizeView<R = void, P0 = NSView>(_v: P0): R;
    removeSizeButton<R = NSButton>(): R;
    setRemoveSizeButton<R = void, P0 = NSButton>(_v: P0): R;
    formatPopup<R = NSPopUpButton>(): R;
    setFormatPopup<R = void, P0 = NSPopUpButton>(_v: P0): R;
  }
  namespace MSExportFormatViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = MSExportFormatViewController>(): R;
      new: <R = MSExportFormatViewController>() => R;
      scaleDisplayStringForValue_suffix<R = unknown, P0 = number, P1 = number>(_scaleDisplayStringForValue: P0, _suffix: P1): R;
    }
  }
}

declare const MSExportFormatViewController: cocoa.MSExportFormatViewController.CLASS;
