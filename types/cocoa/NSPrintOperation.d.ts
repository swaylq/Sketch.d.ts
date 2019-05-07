/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintOperation<T0 = void, T1 = void, T2 = void> extends NSObject {
    cleanUpOperation<R = void>(): R;
    deliverResult<R = boolean>(): R;
    destroyContext<R = void>(): R;
    createContext<R = unknown>(): R;
    runOperation<R = boolean>(): R;
    runOperationModalForWindow_delegate_didRunSelector_contextInfo<R = void, P0 = unknown, P1 = unknown, P2 = string, P3 = void>(_runOperationModalForWindow: P0, _delegate: P1, _didRunSelector: P2, _contextInfo: P3): R;
    _isResponsibleForFileCoordination<R = boolean>(): R;
    _pageSet<R = number>(): R;
    isEPSOperation<R = boolean>(): R;
    baseAffineTransform<R = unknown>(): R;
    setBaseAffineTransform<R = void, P0 = unknown>(_setBaseAffineTransform: P0): R;
    _renderingBounds<R = CGRect>(): R;
    _isRenderingBorder<R = boolean>(): R;
    _isLockingFocus<R = boolean>(): R;
    _setLockingFocus<R = void, P0 = boolean>(__setLockingFocus: P0): R;
    _operationInfo<R = _PrivatePrintOperationInfo>(): R;
    _isCancelledAfterHandlingUserEvents<R = boolean>(): R;
    _setPreferredRenderingQuality<R = void, P0 = number>(__setPreferredRenderingQuality: P0): R;
    _setRenderingBorder<R = void, P0 = boolean>(__setRenderingBorder: P0): R;
    _pageScaling<R = number>(): R;
    _currentPageBounds<R = CGRect>(): R;
    _effectiveJobTitle<R = unknown>(): R;
    _lastRenderPageNumber<R = number>(): R;
    _firstRenderPageNumber<R = number>(): R;
    _lastJobPageNumber<R = number>(): R;
    _firstJobPageNumber<R = number>(): R;
    _tryToSetCurrentPageNumber<R = boolean, P0 = number>(__tryToSetCurrentPageNumber: P0): R;
    _invalidatePagination<R = void>(): R;
    _forceKnowsPageRangeMessage<R = void>(): R;
    showPanels<R = boolean>(): R;
    setShowPanels<R = void, P0 = boolean>(_setShowPanels: P0): R;
    jobStyleHint<R = unknown>(): R;
    setJobStyleHint<R = void, P0 = unknown>(_setJobStyleHint: P0): R;
    accessoryView<R = unknown>(): R;
    setAccessoryView<R = void, P0 = unknown>(_setAccessoryView: P0): R;
    currentPage<R = number>(): R;
    pageRange<R = _NSRange>(): R;
    context<R = NSGraphicsContext>(): R;
    printInfo<R = NSPrintInfo>(): R;
    setPrintInfo<R = void, P0 = NSPrintInfo>(_v: P0): R;
    view<R = NSView>(): R;
    pageOrder<R = number>(): R;
    setPageOrder<R = void, P0 = number>(_v: P0): R;
    canSpawnSeparateThread<R = boolean>(): R;
    setCanSpawnSeparateThread<R = void, P0 = boolean>(_v: P0): R;
    PDFPanel<R = NSPDFPanel>(): R;
    setPDFPanel<R = void, P0 = NSPDFPanel>(_v: P0): R;
    printPanel<R = NSPrintPanel>(): R;
    setPrintPanel<R = void, P0 = NSPrintPanel>(_v: P0): R;
    showsProgressPanel<R = boolean>(): R;
    setShowsProgressPanel<R = void, P0 = boolean>(_v: P0): R;
    showsPrintPanel<R = boolean>(): R;
    setShowsPrintPanel<R = void, P0 = boolean>(_v: P0): R;
    jobTitle<R = NSString>(): R;
    setJobTitle<R = void, P0 = NSString>(_v: P0): R;
    preferredRenderingQuality<R = number>(): R;
    copyingOperation<R = boolean>(): R;
  }
  namespace NSPrintOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPrintOperation>(): R;
      new: <R = NSPrintOperation>() => R;
      setCurrentOperation<R = void, P0 = unknown>(_setCurrentOperation: P0): R;
      currentOperation<R = unknown>(): R;
      EPSOperationWithView_insideRect_toData<R = unknown, P0 = unknown, P1 = CGRect, P2 = unknown>(_EPSOperationWithView: P0, _insideRect: P1, _toData: P2): R;
      PDFOperationWithView_insideRect_toData<R = unknown, P0 = unknown, P1 = CGRect, P2 = unknown>(_PDFOperationWithView: P0, _insideRect: P1, _toData: P2): R;
      printOperationWithView<R = unknown, P0 = unknown>(_printOperationWithView: P0): R;
      EPSOperationWithView_insideRect_toPath_printInfo<R = unknown, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = unknown>(_EPSOperationWithView: P0, _insideRect: P1, _toPath: P2, _printInfo: P3): R;
      EPSOperationWithView_insideRect_toData_printInfo<R = unknown, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = unknown>(_EPSOperationWithView: P0, _insideRect: P1, _toData: P2, _printInfo: P3): R;
      PDFOperationWithView_insideRect_toPath_printInfo<R = unknown, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = unknown>(_PDFOperationWithView: P0, _insideRect: P1, _toPath: P2, _printInfo: P3): R;
      PDFOperationWithView_insideRect_toData_printInfo<R = unknown, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = unknown>(_PDFOperationWithView: P0, _insideRect: P1, _toData: P2, _printInfo: P3): R;
      printOperationWithView_printInfo<R = unknown, P0 = unknown, P1 = unknown>(_printOperationWithView: P0, _printInfo: P1): R;
      _setPrintEventRetrofitInfo<R = void, P0 = unknown>(__setPrintEventRetrofitInfo: P0): R;
    }
  }
}

declare const NSPrintOperation: cocoa.NSPrintOperation.CLASS;
