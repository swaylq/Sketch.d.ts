/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportSheet<T0 = void, T1 = void, T2 = void> extends CHSheetController {
    toggleItemSelectedForExportState<R = void, P0 = unknown>(_toggleItemSelectedForExportState: P0): R;
    isItemSelectedForExport<R = boolean, P0 = unknown>(_isItemSelectedForExport: P0): R;
    document<R = unknown>(): R;
    collectionView_newItemForRepresentedObject<R = unknown, P0 = unknown, P1 = unknown>(_collectionView: P0, _newItemForRepresentedObject: P1): R;
    resizeWindowToFit<R = void>(): R;
    includeAllCheckboxAction<R = void, P0 = unknown>(_includeAllCheckboxAction: P0): R;
    updateExportSheetItems<R = void, P0 = boolean>(_updateExportSheetItems: P0): R;
    validateIncludeAllSlicesCheckBox<R = void>(): R;
    findConflictingNamesInSlices<R = void, P0 = unknown>(_findConflictingNamesInSlices: P0): R;
    awakeFromNib<R = void>(): R;
    warningSliceIDs<R = NSSet>(): R;
    setWarningSliceIDs<R = void, P0 = NSSet>(_v: P0): R;
    slices<R = NSArray>(): R;
    setSlices<R = void, P0 = NSArray>(_v: P0): R;
    selectedSlices<R = NSMutableArray>(): R;
    setSelectedSlices<R = void, P0 = NSMutableArray>(_v: P0): R;
    exportButton<R = NSButton>(): R;
    setExportButton<R = void, P0 = NSButton>(_v: P0): R;
    includeAllSlicesCheckBox<R = NSButton>(): R;
    setIncludeAllSlicesCheckBox<R = void, P0 = NSButton>(_v: P0): R;
    collectionView<R = NSCollectionView>(): R;
    setCollectionView<R = void, P0 = NSCollectionView>(_v: P0): R;
    slicesCheckBoxState<R = number>(): R;
  }
  namespace MSExportSheet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CHSheetController {
      alloc<R = MSExportSheet>(): R;
      new: <R = MSExportSheet>() => R;
    }
  }
}

declare const MSExportSheet: cocoa.MSExportSheet.CLASS;
