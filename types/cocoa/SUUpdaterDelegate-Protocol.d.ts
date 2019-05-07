/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SUUpdaterDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    updater_didAbortWithError<R = void, P0 = SUUpdater, P1 = NSError>(_updater: P0, _didAbortWithError: P1): R;
    updater_didCancelInstallUpdateOnQuit<R = void, P0 = SUUpdater, P1 = SUAppcastItem>(_updater: P0, _didCancelInstallUpdateOnQuit: P1): R;
    updater_willInstallUpdateOnQuit_immediateInstallationInvocation<R = void, P0 = SUUpdater, P1 = SUAppcastItem, P2 = NSInvocation>(_updater: P0, _willInstallUpdateOnQuit: P1, _immediateInstallationInvocation: P2): R;
    updaterDidShowModalAlert<R = void, P0 = SUUpdater>(_updaterDidShowModalAlert: P0): R;
    updaterWillShowModalAlert<R = void, P0 = SUUpdater>(_updaterWillShowModalAlert: P0): R;
    pathToRelaunchForUpdater<R = NSString, P0 = SUUpdater>(_pathToRelaunchForUpdater: P0): R;
    versionDisplayerForUpdater<R = SUVersionDisplay, P0 = SUUpdater>(_versionDisplayerForUpdater: P0): R;
    versionComparatorForUpdater<R = SUVersionComparison, P0 = SUUpdater>(_versionComparatorForUpdater: P0): R;
    updaterDidRelaunchApplication<R = void, P0 = SUUpdater>(_updaterDidRelaunchApplication: P0): R;
    updaterWillRelaunchApplication<R = void, P0 = SUUpdater>(_updaterWillRelaunchApplication: P0): R;
    updaterShouldRelaunchApplication<R = boolean, P0 = SUUpdater>(_updaterShouldRelaunchApplication: P0): R;
    updater_shouldPostponeRelaunchForUpdate_untilInvoking<R = boolean, P0 = SUUpdater, P1 = SUAppcastItem, P2 = NSInvocation>(_updater: P0, _shouldPostponeRelaunchForUpdate: P1, _untilInvoking: P2): R;
    updater_willInstallUpdate<R = void, P0 = SUUpdater, P1 = SUAppcastItem>(_updater: P0, _willInstallUpdate: P1): R;
    userDidCancelDownload<R = void, P0 = SUUpdater>(_userDidCancelDownload: P0): R;
    updater_failedToDownloadUpdate_error<R = void, P0 = SUUpdater, P1 = SUAppcastItem, P2 = NSError>(_updater: P0, _failedToDownloadUpdate: P1, _error: P2): R;
    updater_willDownloadUpdate_withRequest<R = void, P0 = SUUpdater, P1 = SUAppcastItem, P2 = NSMutableURLRequest>(_updater: P0, _willDownloadUpdate: P1, _withRequest: P2): R;
    updaterDidNotFindUpdate<R = void, P0 = SUUpdater>(_updaterDidNotFindUpdate: P0): R;
    updater_didFindValidUpdate<R = void, P0 = SUUpdater, P1 = SUAppcastItem>(_updater: P0, _didFindValidUpdate: P1): R;
    bestValidUpdateInAppcast_forUpdater<R = SUAppcastItem, P0 = SUAppcast, P1 = SUUpdater>(_bestValidUpdateInAppcast: P0, _forUpdater: P1): R;
    updater_didFinishLoadingAppcast<R = void, P0 = SUUpdater, P1 = SUAppcast>(_updater: P0, _didFinishLoadingAppcast: P1): R;
    updaterShouldPromptForPermissionToCheckForUpdates<R = boolean, P0 = SUUpdater>(_updaterShouldPromptForPermissionToCheckForUpdates: P0): R;
    feedURLStringForUpdater<R = NSString, P0 = SUUpdater>(_feedURLStringForUpdater: P0): R;
    feedParametersForUpdater_sendingSystemProfile<R = NSArray, P0 = SUUpdater, P1 = boolean>(_feedParametersForUpdater: P0, _sendingSystemProfile: P1): R;
    updaterMayCheckForUpdates<R = boolean, P0 = SUUpdater>(_updaterMayCheckForUpdates: P0): R;
  }
  namespace SUUpdaterDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
