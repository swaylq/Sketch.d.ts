/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMenuContext<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    _finishQualifingEntries_withCompletionHandler<R = boolean, P0 = unknown, P1 = CDUnknownBlockType>(__finishQualifingEntries: P0, _withCompletionHandler: P1): R;
    qualifyEntries_withCompletionHandler<R = boolean, P0 = unknown, P1 = CDUnknownBlockType>(_qualifyEntries: P0, _withCompletionHandler: P1): R;
    _concurrentPortionOfQualifyEntriesWithEntriesNeedingURLTypechecking_withCompletionHandler<R = boolean, P0 = unknown, P1 = CDUnknownBlockType>(__concurrentPortionOfQualifyEntriesWithEntriesNeedingURLTypechecking: P0, _withCompletionHandler: P1): R;
    _preconcurrentPortionOfQualifyEntries_returningEntriesNeedingURLTypecheckingIntoSet<R = void, P0 = unknown, P1 = unknown>(__preconcurrentPortionOfQualifyEntries: P0, _returningEntriesNeedingURLTypecheckingIntoSet: P1): R;
    utisForURLs_error<R = unknown, P0 = unknown, P1 = unknown>(_utisForURLs: P0, _error: P1): R;
    filterEntriesWithCarbonPasteboardTypesBySupportedSendAndReceiveTypes_returningSendTypesIntoArray<R = void, P0 = unknown, P1 = unknown>(_filterEntriesWithCarbonPasteboardTypesBySupportedSendAndReceiveTypes: P0, _returningSendTypesIntoArray: P1): R;
    serviceEntryTypesConformToCarbonPasteboardTypes<R = boolean, P0 = unknown>(_serviceEntryTypesConformToCarbonPasteboardTypes: P0): R;
    filterEntriesByUnmatchedFileTypes_entriesNeedingURLTypechecking<R = void, P0 = unknown, P1 = unknown>(_filterEntriesByUnmatchedFileTypes: P0, _entriesNeedingURLTypechecking: P1): R;
    filterEntriesWithRequestorBySupportedSendAndReceiveTypes_returningSendTypesIntoArray_returningEntriesNeedingURLTypecheckingIntoSet<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_filterEntriesWithRequestorBySupportedSendAndReceiveTypes: P0, _returningSendTypesIntoArray: P1, _returningEntriesNeedingURLTypecheckingIntoSet: P2): R;
    infoForRequestor<R = unknown, P0 = unknown>(_infoForRequestor: P0): R;
    filterEntriesByRemovingItemsWithNoSendOrReceiveTypes<R = void, P0 = unknown>(_filterEntriesByRemovingItemsWithNoSendOrReceiveTypes: P0): R;
    filterEntriesByRemovingItemsThatDoNotUseSelection<R = void, P0 = unknown>(_filterEntriesByRemovingItemsThatDoNotUseSelection: P0): R;
    filterEntriesByRemovingItemsThatUseSelectionIfItIsWhitespace<R = void, P0 = unknown>(_filterEntriesByRemovingItemsThatUseSelectionIfItIsWhitespace: P0): R;
    filterEntriesByDuplicates<R = void, P0 = unknown>(_filterEntriesByDuplicates: P0): R;
    filterEntriesByTheirFilters<R = void, P0 = unknown>(_filterEntriesByTheirFilters: P0): R;
    moveQualifiedEntries_approvedEntries_havingRunFilters<R = void, P0 = unknown, P1 = unknown, P2 = number>(_moveQualifiedEntries: P0, _approvedEntries: P1, _havingRunFilters: P2): R;
    reportNoTextForTrackingFiltersThatRequireText<R = void, P0 = unknown>(_reportNoTextForTrackingFiltersThatRequireText: P0): R;
    filterEntriesByAvailableInputSources<R = void, P0 = unknown>(_filterEntriesByAvailableInputSources: P0): R;
    filterEntriesByLinkDetection<R = void, P0 = unknown>(_filterEntriesByLinkDetection: P0): R;
    filterEntriesByDataDetectors<R = void, P0 = unknown>(_filterEntriesByDataDetectors: P0): R;
    filterEntriesByScript<R = void, P0 = unknown>(_filterEntriesByScript: P0): R;
    filterEntriesByTextTransformations<R = void, P0 = unknown>(_filterEntriesByTextTransformations: P0): R;
    filterEntriesByLanguage<R = void, P0 = unknown>(_filterEntriesByLanguage: P0): R;
    filterEntriesByRadar<R = void, P0 = unknown>(_filterEntriesByRadar: P0): R;
    filterEntriesByFilePath<R = void, P0 = unknown>(_filterEntriesByFilePath: P0): R;
    filterEntriesByWidthForm<R = void, P0 = unknown>(_filterEntriesByWidthForm: P0): R;
    filterEntriesByWordLimit<R = void, P0 = unknown>(_filterEntriesByWordLimit: P0): R;
    filterEntriesByCharacterLimit<R = void, P0 = unknown>(_filterEntriesByCharacterLimit: P0): R;
    filterEntriesByFileType<R = void, P0 = unknown>(_filterEntriesByFileType: P0): R;
    filterEntriesByMenuLocation<R = void, P0 = unknown>(_filterEntriesByMenuLocation: P0): R;
    filterEntriesByBundleID<R = void, P0 = unknown>(_filterEntriesByBundleID: P0): R;
    _stringContainsFilePath_inRange<R = boolean, P0 = unknown, P1 = _NSRange>(__stringContainsFilePath: P0, _inRange: P1): R;
    _selectionExistsAndIsAllWhitespace<R = boolean>(): R;
    _sendTypesContainsTextTypeAppropriateForFiltering<R = boolean>(): R;
    _selectedURLsForApplyingFilters<R = unknown>(): R;
    _selectedStringAndRangeForApplyingFilters_attributed<R = unknown, P0 = _NSRange, P1 = boolean>(__selectedStringAndRangeForApplyingFilters: P0, _attributed: P1): R;
    determineSelectedStringForApplyingFiltersViaPasteboardFromRequestorSupplyingType_attributed<R = boolean, P0 = unknown, P1 = boolean>(_determineSelectedStringForApplyingFiltersViaPasteboardFromRequestorSupplyingType: P0, _attributed: P1): R;
    determineSelectedStringForApplyingFiltersDirectlyFromRequestorSupplyingType_attributed<R = boolean, P0 = unknown, P1 = boolean>(_determineSelectedStringForApplyingFiltersDirectlyFromRequestorSupplyingType: P0, _attributed: P1): R;
    getObjectsOfClass_fromRequestorProvidingType_options<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_getObjectsOfClass: P0, _fromRequestorProvidingType: P1, _options: P2): R;
    serviceEntryIsActiveInThisContext<R = boolean, P0 = unknown>(_serviceEntryIsActiveInThisContext: P0): R;
    requestorProvidingType<R = unknown, P0 = unknown>(_requestorProvidingType: P0): R;
    initForCarbonServicesMenuWithCopyUTIs_pasteUTIs<R = unknown, P0 = unknown, P1 = unknown>(_initForCarbonServicesMenuWithCopyUTIs: P0, _pasteUTIs: P1): R;
    initForServicePresentationMode_withRequestorChain<R = unknown, P0 = unknown, P1 = unknown>(_initForServicePresentationMode: P0, _withRequestorChain: P1): R;
    duplicateServicesMask<R = number>(): R;
    setDuplicateServicesMask<R = void, P0 = number>(_v: P0): R;
    allowsAllWhitespaceText<R = boolean>(): R;
    setAllowsAllWhitespaceText<R = void, P0 = boolean>(_v: P0): R;
    inspectsSelectionText<R = boolean>(): R;
    setInspectsSelectionText<R = void, P0 = boolean>(_v: P0): R;
    requiresSelection<R = boolean>(): R;
    setRequiresSelection<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _NSMenuContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSMenuContext>(): R;
      new: <R = _NSMenuContext>() => R;
    }
  }
}
