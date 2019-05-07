/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcretePrintOperation<T0 = void, T1 = void, T2 = void> extends NSPrintOperation {
    currentPage<R = number>(): R;
    pageRange<R = _NSRange>(): R;
    context<R = unknown>(): R;
    setPrintInfo<R = void, P0 = unknown>(_setPrintInfo: P0): R;
    printInfo<R = unknown>(): R;
    view<R = unknown>(): R;
    _progressPanel_didEndAndReturn_contextInfo<R = void, P0 = unknown, P1 = number, P2 = void>(__progressPanel: P0, _didEndAndReturn: P1, _contextInfo: P2): R;
    _progressPanelWasCancelled_contextInfo<R = void, P0 = unknown, P1 = void>(__progressPanelWasCancelled: P0, _contextInfo: P1): R;
    _printPanel_didEndAndReturn_contextInfo<R = void, P0 = unknown, P1 = number, P2 = void>(__printPanel: P0, _didEndAndReturn: P1, _contextInfo: P2): R;
    _continueModalOperationPastPrintPanel<R = void>(): R;
    _continueModalOperationToTheEnd<R = void, P0 = unknown>(__continueModalOperationToTheEnd: P0): R;
    _finishModalOperation<R = void>(): R;
    _messageTraceExportAsPDFIfNecessary<R = void>(): R;
    _renderView<R = boolean>(): R;
    _setPageOrderFromPrintInfo<R = void>(): R;
    _createAndShowProgressPanelIfAppropriate<R = void, P0 = boolean>(__createAndShowProgressPanelIfAppropriate: P0): R;
    _beginPDFPanelModalForWindow_thenContinue<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__beginPDFPanelModalForWindow: P0, _thenContinue: P1): R;
    _preparedPrintPanel<R = unknown>(): R;
    pageOrder<R = number>(): R;
    setPageOrder<R = void, P0 = number>(_setPageOrder: P0): R;
    canSpawnSeparateThread<R = boolean>(): R;
    setCanSpawnSeparateThread<R = void, P0 = boolean>(_setCanSpawnSeparateThread: P0): R;
    PDFPanel<R = unknown>(): R;
    setPDFPanel<R = void, P0 = unknown>(_setPDFPanel: P0): R;
    printPanel<R = unknown>(): R;
    _showsPreviewByDefault<R = boolean>(): R;
    setPrintPanel<R = void, P0 = unknown>(_setPrintPanel: P0): R;
    showsProgressPanel<R = boolean>(): R;
    setShowsProgressPanel<R = void, P0 = boolean>(_setShowsProgressPanel: P0): R;
    showsPrintPanel<R = boolean>(): R;
    setShowsPrintPanel<R = void, P0 = boolean>(_setShowsPrintPanel: P0): R;
    jobTitle<R = unknown>(): R;
    setJobTitle<R = void, P0 = unknown>(_setJobTitle: P0): R;
    preferredRenderingQuality<R = number>(): R;
    isCopyingOperation<R = boolean>(): R;
    dealloc<R = void>(): R;
    _initWithView_printInfo_epsNotPDF_bounds_data_orPath<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean, P3 = CGRect, P4 = unknown, P5 = unknown>(__initWithView: P0, _printInfo: P1, _epsNotPDF: P2, _bounds: P3, _data: P4, _orPath: P5): R;
    _initWithView_printInfo<R = unknown, P0 = unknown, P1 = unknown>(__initWithView: P0, _printInfo: P1): R;
    _setShowProgressPanel<R = void, P0 = boolean>(__setShowProgressPanel: P0): R;
    _setShowPrintPanel<R = void, P0 = boolean>(__setShowPrintPanel: P0): R;
    _thumbnailView<R = unknown>(): R;
    _setThumbnailView<R = void, P0 = unknown>(__setThumbnailView: P0): R;
    _validateJobPageNumbers<R = void>(): R;
    _nUpPages<R = number>(): R;
    _viewKnowsPages<R = number>(): R;
    _lastPageNumber<R = number>(): R;
    _firstPageNumber<R = number>(): R;
    _validatePagination<R = void>(): R;
  }
  namespace NSConcretePrintOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPrintOperation {
      alloc<R = NSConcretePrintOperation>(): R;
      new: <R = NSConcretePrintOperation>() => R;
    }
  }
}

declare const NSConcretePrintOperation: cocoa.NSConcretePrintOperation.CLASS;
