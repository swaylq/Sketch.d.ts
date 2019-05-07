/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudAction<T0 = void, T1 = void, T2 = void> extends MSPopoverAction, MSCloudShareUploadControllerDelegateProtocol {
    performCloseSelector_withDelegate_shouldClose_contextInfo<R = void, P0 = string, P1 = unknown, P2 = boolean, P3 = void>(_performCloseSelector: P0, _withDelegate: P1, _shouldClose: P2, _contextInfo: P3): R;
    document_shouldClose_contextInfo<R = void, P0 = unknown, P1 = boolean, P2 = void>(_document: P0, _shouldClose: P1, _contextInfo: P2): R;
    prepareCloseWithHandler<R = void, P0 = CDUnknownBlockType>(_prepareCloseWithHandler: P0): R;
    setCloudPlatform<R = void, P0 = unknown>(_setCloudPlatform: P0): R;
    validate<R = boolean>(): R;
    updateProgressImage<R = void>(): R;
    image<R = unknown>(): R;
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    mayShowInToolbar<R = boolean>(): R;
    attemptRecoveryFromError_optionIndex_delegate_didRecoverSelector_contextInfo<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = string, P4 = void>(_attemptRecoveryFromError: P0, _optionIndex: P1, _delegate: P2, _didRecoverSelector: P3, _contextInfo: P4): R;
    refreshShareWithHandler<R = void, P0 = CDUnknownBlockType>(_refreshShareWithHandler: P0): R;
    startUploadUpdating_ownedByOrganization<R = void, P0 = unknown, P1 = unknown>(_startUploadUpdating: P0, _ownedByOrganization: P1): R;
    closeAlertUploadDidFinishHandler<R = CDUnknownBlockType>(): R;
    setCloseAlertUploadDidFinishHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    refreshOperation<R = SCKAPIOperation>(): R;
    setRefreshOperation<R = void, P0 = SCKAPIOperation>(_v: P0): R;
    upload<R = MSCloudShareUploadController>(): R;
    setUpload<R = void, P0 = MSCloudShareUploadController>(_v: P0): R;
    popoverViewController<R = NSViewController>(): R;
    setPopoverViewController<R = void, P0 = NSViewController>(_v: P0): R;
    canCloseImmediately<R = boolean>(): R;
    progressImages<R = NSArray>(): R;
    exportedDocument<R = MSCloudExportableDocument>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSCloudAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPopoverAction, MSCloudShareUploadControllerDelegateProtocol {
      alloc<R = MSCloudAction>(): R;
      new: <R = MSCloudAction>() => R;
      prepareClosingActions_withHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_prepareClosingActions: P0, _withHandler: P1): R;
      prepareTerminationWithHandler<R = void, P0 = CDUnknownBlockType>(_prepareTerminationWithHandler: P0): R;
      shouldPrepareForTermination<R = boolean>(): R;
      actionsToPrepareTermination<R = unknown>(): R;
      cloudEnabled<R = boolean>(): R;
      attemptRecoveryFromCloudError_optionIndex<R = void, P0 = unknown, P1 = number>(_attemptRecoveryFromCloudError: P0, _optionIndex: P1): R;
      cloudError_addingRecoveryOptionsWithAttempter<R = unknown, P0 = unknown, P1 = unknown>(_cloudError: P0, _addingRecoveryOptionsWithAttempter: P1): R;
      isErrorRecoverable<R = boolean, P0 = unknown>(_isErrorRecoverable: P0): R;
    }
  }
}

declare const MSCloudAction: cocoa.MSCloudAction.CLASS;
