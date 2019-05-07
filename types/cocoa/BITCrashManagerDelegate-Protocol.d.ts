/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BITCrashManagerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    crashManagerDidFinishSendingCrashReport<R = void, P0 = BITCrashManager>(_crashManagerDidFinishSendingCrashReport: P0): R;
    crashManager_didFailWithError<R = void, P0 = BITCrashManager, P1 = NSError>(_crashManager: P0, _didFailWithError: P1): R;
    crashManagerWillSendCrashReport<R = void, P0 = BITCrashManager>(_crashManagerWillSendCrashReport: P0): R;
    crashManagerWillCancelSendingCrashReport<R = void, P0 = BITCrashManager>(_crashManagerWillCancelSendingCrashReport: P0): R;
    crashManagerWillShowSubmitCrashReportAlert<R = void, P0 = BITCrashManager>(_crashManagerWillShowSubmitCrashReportAlert: P0): R;
    attachmentForCrashManager<R = BITHockeyAttachment, P0 = BITCrashManager>(_attachmentForCrashManager: P0): R;
    applicationLogForCrashManager<R = NSString, P0 = BITCrashManager>(_applicationLogForCrashManager: P0): R;
    showMainApplicationWindowForCrashManager<R = void, P0 = BITCrashManager>(_showMainApplicationWindowForCrashManager: P0): R;
  }
  namespace BITCrashManagerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
