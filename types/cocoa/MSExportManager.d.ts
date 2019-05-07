/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportManager<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    savePanelWithDefaultFilename<R = unknown, P0 = unknown>(_savePanelWithDefaultFilename: P0): R;
    showSavePanelToExportIndividualSlice<R = void, P0 = unknown>(_showSavePanelToExportIndividualSlice: P0): R;
    openPanelForRequests<R = unknown, P0 = unknown>(_openPanelForRequests: P0): R;
    showSaveToFolderPanelToExportSlices<R = void, P0 = unknown>(_showSaveToFolderPanelToExportSlices: P0): R;
    displayNoSlicesWarning<R = void>(): R;
    destinationForRequest_inFolder<R = unknown, P0 = unknown, P1 = unknown>(_destinationForRequest: P0, _inFolder: P1): R;
    warnBeforeOverwritingAndSaveSlices_toFolder_completionBlock<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_warnBeforeOverwritingAndSaveSlices: P0, _toFolder: P1, _completionBlock: P2): R;
    saveSlices_toFolder<R = void, P0 = unknown, P1 = unknown>(_saveSlices: P0, _toFolder: P1): R;
    strippedSliceName<R = unknown, P0 = unknown>(_strippedSliceName: P0): R;
    exportSlice<R = void, P0 = unknown>(_exportSlice: P0): R;
    exportFilesForRequests<R = void, P0 = unknown>(_exportFilesForRequests: P0): R;
    exportFileForRequest_toFileURL<R = void, P0 = unknown, P1 = unknown>(_exportFileForRequest: P0, _toFileURL: P1): R;
    exportedDataForRequest<R = unknown, P0 = unknown>(_exportedDataForRequest: P0): R;
    rendererForRequest<R = unknown, P0 = unknown>(_rendererForRequest: P0): R;
    driver<R = MSRenderingDriver>(): R;
    setDriver<R = void, P0 = MSRenderingDriver>(_v: P0): R;
    sliceCompletionBlock<R = CDUnknownBlockType>(): R;
    setSliceCompletionBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    colorSpace<R = NSColorSpace>(): R;
  }
  namespace MSExportManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSExportManager>(): R;
      new: <R = MSExportManager>() => R;
    }
  }
}

declare const MSExportManager: cocoa.MSExportManager.CLASS;
