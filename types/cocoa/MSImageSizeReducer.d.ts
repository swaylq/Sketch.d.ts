/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageSizeReducer<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface MSImageSizeReducer<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSImageSizeReducer>(): R;
      new: <R = MSImageSizeReducer>() => R;
      showImageReductionWarningForWindow_fileSizeDifference_completionBlock<R = unknown, P0 = unknown, P1 = number, P2 = cocoa.CDUnknownBlockType>(_showImageReductionWarningForWindow: P0, _fileSizeDifference: P1, _completionBlock: P2): R;
      showWaitingSheetForWindow_completionBlock<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_showWaitingSheetForWindow: P0, _completionBlock: P1): R;
      showUnableToReduceAlert<R = unknown, P0 = unknown>(_showUnableToReduceAlert: P0): R;
      setResizedData_originalData_forOwners<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_setResizedData: P0, _originalData: P1, _forOwners: P2): R;
      largestSizeForImagesMapTableFromOwners<R = unknown, P0 = unknown>(_largestSizeForImagesMapTableFromOwners: P0): R;
      reduceImageSizeOfLayers_windowForSheet_completionBlock<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_reduceImageSizeOfLayers: P0, _windowForSheet: P1, _completionBlock: P2): R;
    }
  }
}

declare const MSImageSizeReducer: cocoa.classes.MSImageSizeReducer;
