/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintInfo<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
    takeSettingsFromPDFInfo<R = void, P0 = unknown>(_takeSettingsFromPDFInfo: P0): R;
    _compatibility_initWithUnkeyedCoder<R = unknown, P0 = unknown>(__compatibility_initWithUnkeyedCoder: P0): R;
    description<R = unknown>(): R;
    updateFromPMPrintSettings<R = void>(): R;
    updateFromPMPageFormat<R = void>(): R;
    PMPrintSettings<R = void>(): R;
    PMPageFormat<R = void>(): R;
    PMPrintSession<R = void>(): R;
    setUpPrintOperationDefaultValues<R = void>(): R;
    dictionary<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithDictionary<R = unknown, P0 = unknown>(_initWithDictionary: P0): R;
    _validatePaginationAttributes<R = void>(): R;
    _setObject_ifNoAttributeForKey<R = void, P0 = unknown, P1 = unknown>(__setObject: P0, _ifNoAttributeForKey: P1): R;
    _setInt_ifNoAttributeForKey<R = void, P0 = number, P1 = unknown>(__setInt: P0, _ifNoAttributeForKey: P1): R;
    _setFloat_ifNoAttributeForKey<R = void, P0 = number, P1 = unknown>(__setFloat: P0, _ifNoAttributeForKey: P1): R;
    _setBool_ifNoAttributeForKey<R = void, P0 = boolean, P1 = unknown>(__setBool: P0, _ifNoAttributeForKey: P1): R;
    _initWithAttributesNoCopy_flattenedPageFormatData_printSettingsData<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__initWithAttributesNoCopy: P0, _flattenedPageFormatData: P1, _printSettingsData: P2): R;
    _setAttributesNoCopy_pageFormat_orFlattenedData_printSettings_orFlattenedData<R = void, P0 = unknown, P1 = OpaquePMPageFormat, P2 = unknown, P3 = OpaquePMPrintSettings, P4 = unknown>(__setAttributesNoCopy: P0, _pageFormat: P1, _orFlattenedData: P2, _printSettings: P3, _orFlattenedData1: P4): R;
    _setPrintSettings<R = void, P0 = OpaquePMPrintSettings>(__setPrintSettings: P0): R;
    _setPageFormat<R = void, P0 = OpaquePMPageFormat>(__setPageFormat: P0): R;
    _printSettings<R = OpaquePMPrintSettings>(): R;
    _pageFormat<R = OpaquePMPageFormat>(): R;
    _printSession<R = OpaquePMPrintSession>(): R;
    _makePDFInfo<R = unknown>(): R;
    _setPrintInfo<R = void, P0 = unknown>(__setPrintInfo: P0): R;
    _printSettingsWasEdited<R = void>(): R;
    _pageFormatWasEdited<R = void>(): R;
    _printSettingsForSetting<R = OpaquePMPrintSettings>(): R;
    _pageFormatForSetting<R = OpaquePMPageFormat>(): R;
    _printSessionForSetting<R = OpaquePMPrintSession>(): R;
    _printSettingsForGetting<R = OpaquePMPrintSettings>(): R;
    _pageFormatForGetting<R = OpaquePMPageFormat>(): R;
    _printSessionForGetting<R = OpaquePMPrintSession>(): R;
    _createDefaultOrUnflattenPrintSettingsIfNecessary<R = void>(): R;
    _createDefaultOrUnflattenPageFormatIfNecessary<R = void>(): R;
    _removeObjectForAttributeKey<R = void, P0 = unknown>(__removeObjectForAttributeKey: P0): R;
    _setObject_forAttributeKey<R = void, P0 = unknown, P1 = unknown>(__setObject: P0, _forAttributeKey: P1): R;
    _objectForAttributeKey<R = unknown, P0 = unknown>(__objectForAttributeKey: P0): R;
    _allAttributeKeys<R = unknown>(): R;
    _reconcilePrintSettingsAttributes<R = void>(): R;
    _reconcilePageFormatAttributes<R = void>(): R;
    _reconcilePrintSessionAttributes<R = void>(): R;
    printSettings<R = NSMutableDictionary>(): R;
    imageablePageBounds<R = CGRect>(): R;
    localizedPaperName<R = NSString>(): R;
    printer<R = NSPrinter>(): R;
    setPrinter<R = void, P0 = NSPrinter>(_v: P0): R;
    selectionOnly<R = boolean>(): R;
    setSelectionOnly<R = void, P0 = boolean>(_v: P0): R;
    jobDisposition<R = NSString>(): R;
    setJobDisposition<R = void, P0 = NSString>(_v: P0): R;
    verticalPagination<R = number>(): R;
    setVerticalPagination<R = void, P0 = number>(_v: P0): R;
    horizontalPagination<R = number>(): R;
    setHorizontalPagination<R = void, P0 = number>(_v: P0): R;
    verticallyCentered<R = boolean>(): R;
    setVerticallyCentered<R = void, P0 = boolean>(_v: P0): R;
    horizontallyCentered<R = boolean>(): R;
    setHorizontallyCentered<R = void, P0 = boolean>(_v: P0): R;
    bottomMargin<R = number>(): R;
    setBottomMargin<R = void, P0 = number>(_v: P0): R;
    topMargin<R = number>(): R;
    setTopMargin<R = void, P0 = number>(_v: P0): R;
    rightMargin<R = number>(): R;
    setRightMargin<R = void, P0 = number>(_v: P0): R;
    leftMargin<R = number>(): R;
    setLeftMargin<R = void, P0 = number>(_v: P0): R;
    scalingFactor<R = number>(): R;
    setScalingFactor<R = void, P0 = number>(_v: P0): R;
    orientation<R = number>(): R;
    setOrientation<R = void, P0 = number>(_v: P0): R;
    paperSize<R = CGSize>(): R;
    setPaperSize<R = void, P0 = CGSize>(_v: P0): R;
    paperName<R = NSString>(): R;
    setPaperName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSPrintInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
      alloc<R = NSPrintInfo>(): R;
      new: <R = NSPrintInfo>() => R;
      defaultPrinter<R = unknown>(): R;
      sharedPrintInfo<R = unknown>(): R;
      setSharedPrintInfo<R = void, P0 = unknown>(_setSharedPrintInfo: P0): R;
      initialize<R = void>(): R;
      sizeForPaperName<R = CGSize, P0 = unknown>(_sizeForPaperName: P0): R;
      setDefaultPrinter<R = void, P0 = unknown>(_setDefaultPrinter: P0): R;
      _managedAttributeKeys<R = unknown>(): R;
      _printSettingsAttributeKeys<R = unknown>(): R;
      _pageFormatAttributeKeys<R = unknown>(): R;
      _printSessionAttributeKeys<R = unknown>(): R;
      _jobSavingURLInPrintSession_printSettings<R = unknown, P0 = OpaquePMPrintSession, P1 = OpaquePMPrintSettings>(__jobSavingURLInPrintSession: P0, _printSettings: P1): R;
      _jobDispositionInPrintSession_printSettings<R = unknown, P0 = OpaquePMPrintSession, P1 = OpaquePMPrintSettings>(__jobDispositionInPrintSession: P0, _printSettings: P1): R;
      _setJobDisposition_savePath_inPrintSession_printSettings<R = void, P0 = unknown, P1 = unknown, P2 = OpaquePMPrintSession, P3 = OpaquePMPrintSettings>(__setJobDisposition: P0, _savePath: P1, _inPrintSession: P2, _printSettings: P3): R;
      _setJobDisposition_saveURL_inPrintSession_printSettings<R = void, P0 = unknown, P1 = unknown, P2 = OpaquePMPrintSession, P3 = OpaquePMPrintSettings>(__setJobDisposition: P0, _saveURL: P1, _inPrintSession: P2, _printSettings: P3): R;
      _setJobDisposition_format_saveURL_inPrintSession_printSettings<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = OpaquePMPrintSession, P4 = OpaquePMPrintSettings>(__setJobDisposition: P0, _format: P1, _saveURL: P2, _inPrintSession: P3, _printSettings: P4): R;
      _orientationInPageFormat<R = number, P0 = OpaquePMPageFormat>(__orientationInPageFormat: P0): R;
      _paperNameInPageFormat<R = unknown, P0 = OpaquePMPageFormat>(__paperNameInPageFormat: P0): R;
      _paperSizeInPageFormat<R = CGSize, P0 = OpaquePMPageFormat>(__paperSizeInPageFormat: P0): R;
      _setOrientation_inPageFormat<R = void, P0 = number, P1 = OpaquePMPageFormat>(__setOrientation: P0, _inPageFormat: P1): R;
      _setPaperName_inPrintSession_pageFormat<R = void, P0 = unknown, P1 = OpaquePMPrintSession, P2 = OpaquePMPageFormat>(__setPaperName: P0, _inPrintSession: P1, _pageFormat: P2): R;
      _setPaperSize_inPrintSession_pageFormat<R = void, P0 = CGSize, P1 = OpaquePMPrintSession, P2 = OpaquePMPageFormat>(__setPaperSize: P0, _inPrintSession: P1, _pageFormat: P2): R;
      _printerInPrintSession<R = unknown, P0 = OpaquePMPrintSession>(__printerInPrintSession: P0): R;
      _setPrinter_inPrintSession<R = void, P0 = unknown, P1 = OpaquePMPrintSession>(__setPrinter: P0, _inPrintSession: P1): R;
    }
  }
}

declare const NSPrintInfo: cocoa.NSPrintInfo.CLASS;
